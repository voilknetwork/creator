import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

require('isomorphic-fetch');
class Referrals extends Component {
    state = { data: null, referral: null, notification: null }
    
    validate_account_name = (value) => {
        let i, label, len, length, ref;
    
        if (!value) {
            return "Account name Should not be empty";
        }
        length = value.length;
        if (length < 3) {
            return "Account name should be at least 3 characters";
        }
        if (length > 16) {
            return "Account name should be shorter than 16 characters";
        }
        ref = value.split('.');
        for (i = 0, len = ref.length; i < len; i++) {
            label = ref[i];
            if (!/^[a-z]/.test(label)) {
                return "Account name can only consist upon small letters, digits, and dashes!";
            }
            if (!/^[a-z0-9-]*$/.test(label)) {
                return "Account name can only consist upon letters, digits and dashes";
            }
            if (/--/.test(label)) {
                return "Account name can only have 1 dash in a row";
            }
            if (!/[a-z0-9]$/.test(label)) {
                return "Account name should end with a letter or digit";
            }
            if (!(label.length >= 3)) {
                return "each account segment should be longer";
            }
        }
        return null;
    }
    handlechange = (e) => {
		console.log(e.target.value);
		this.username_exists(e.target.value);
        let msg = this.validate_account_name(e.target.value);
        if(msg!==null)
        {
            this.setState(
                {
                    username: "",
                    notification: msg,
                    referral: ""
                }
            );
        }
        else{
            this.setState({
				username: e.target.value,
                notification: "Username is Valid  ✅"
            });
		}
		
    }
    username_exists = (e) => {
        this.setState({error: "Contacting Blockchain.."});
        fetch('https://graphql.voilk.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ account(name: "'+e+'") { name active {key_auths} vsd_balance} }' }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.data.account!==null)
            {
                this.setState(
                    {
                        notification: "https://landing.voilk.com/register?ref="+this.state.username, 
						referral: this.state.username,
                    }
                );
                return;
            }
            else {
                this.setState(
                    {
                        notification: "Username is not valid", 
                        inputfield: true
                    }
                );
                return;
            }
        });
	}
    remove_duplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }

    makeRows(collection) {
        return (
            <React.Fragment>
                {
                    collection.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key+1}</td>
                                <th>{item[0].username}</th>
                                <td>{item.length}</td>
                                <td>{item[0].commission==null?"0.000":item[0].commission} VSD</td>
                            </tr>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    makeTable(object) {
        return (

            <table className="table">
                <tbody>
                    <tr>
                        <th>Sr.</th>
                        <th>Username</th>
                        <th>Referral Count</th>
                        <th>Commission Earned</th>
                    </tr>
                    {this.makeRows(object)}
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <section class="section transheader customtitle">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
                                    <h2><strong>Affiliates</strong> Ranking Board!</h2>
                                    <p class="lead">
                                        Here is a list of our top affiliates.
                                    <br /></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section overfree">
                        <div class="icon-center"><i class="fa fa-user"></i></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3">
                                    <form class="quoteform">
                                    <label>Get your referral link</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="type your username"
                                            onChange={ this.handlechange } />
                                        <label>{this.state.notification}</label>
                                    </form>
                                </div>
                            </div>
                            <br />
                            <Query
                                query={gql`
                {
                    get_referrals (all: true)
                    { 
                        username 
                        referral 
                        creation_time 
                        commission temp 
                    }
                }
                `}
                            >
                                {({ loading, error, data }) => {
                                    if (loading)
                                        return (<p>Loading...</p>);
                                    if (error) return <p>Error :(</p>;

                                    let referrals = data.get_referrals;


                                    const groupsobject = referrals.reduce((groups, item) => {
                                        const group = (groups[item.username] || []);
                                        group.push(item);
                                        groups[item.username] = group;
                                        return groups;
                                    }, {});

                                    // Create an empty array
                                    let groups = [];
                                    // Convert arrays of objects to arrays of (arrays of objects)
                                    Object.keys(groupsobject).forEach((key) => groups.push(groupsobject[key]));
                                    // Sorting Arrays easily :)
                                    groups.sort((a, b) => {
                                        return (b.length - a.length);
                                    });

                                    return (
                                        <div className="seo-details">
                                            {this.makeTable(groups)}
                                        </div>
                                    );
                                }}
                            </Query>

                        
                        </div>
                    </section> 
                </div>
            </React.Fragment>
        );
    }
}

export default Referrals;
