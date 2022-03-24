import React, { Component } from 'react';
import queryString from 'query-string';
import Premium from '../constants/premium';
import Replacer from '../constants/functions';
import pdfmake from 'pdfmake/build/pdfmake';
import fonts from 'pdfmake/build/vfs_fonts';
import Cookies from 'universal-cookie';
import {pdfinfo} from "../constants/pdffile";

let { key_utils } =  require('voilk/lib/auth/ecc');
require('isomorphic-fetch');


class SignupForm extends Component {
    generate_random_password = (prefix = 'P') => {
        let pass = prefix + key_utils.get_random_key().toWif();
        return pass;
    }
    state = {
        ref: "voilk",
        error: "",
        username: "",
        inputfield: false,
        availbtn: true,
        genbtn: true,
        password: this.generate_random_password()
    }
    wait = (ms) =>
    {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while(d2-d < ms);
    }
    
    username_exists = (e) => {
        this.setState({error: "Contacting Blockchain.."});
        fetch('https://graphql.voilk.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ account(name: "'+this.state.username+'") { name } }' }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.data.account!==null)
            {
                this.setState(
                    {
                        error: "Account is already taken!!", 
                        availbtn: true, 
                        username: ""
                    }
                );
                return;
            }
            else {
                this.setState(
                    {
                        error: "Account is Available ✅", 
                        availbtn: false,
                        genbtn: false,
                        inputfield: true
                    }
                );
                return;
            }
        });
    }
    handlechange = (e) => {
        this.setState({genbtn: true});
        let msg = this.validate_account_name(e.target.value);
        if(msg!==null)
        {
            this.setState(
                {
                    username: "",
                    availbtn: true,
                    genbtn: true,
                    error: msg
                }
                );
        }
        else{
            this.setState({
                username: e.target.value,
                availbtn: false,
                genbtn: true,
                error: "Username is Valid  ✅"
            });
        }
    }
    
    handleavailability = (e) => {

        e.preventDefault();
        this.username_exists();

    }

    handlecreate = (e) => {
        e.preventDefault();
        console.log("Handling Create.. ");
        this.setState({error: "Contacting Blockchain... "});
        fetch('https://graphql.voilk.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'mutation {generate_token {result}}' }),
        })
        .then(res => res.json())
        .then(res => {
            this.setState({error: "Generating Access Token..."});
            if(res.data.generate_token===null)
            {
                this.setState(
                    {
                        error: "There was some problem Refresh and Try again!!", 
                        availbtn: true, 
                        username: ""
                    }
                );
                return;
            }
            else{

                this.setState({error: "Generating account kindly wait..."});
                
                let tc = res.data.generate_token.result;
                tc = Replacer.replace_array(tc);
                
                fetch('https://graphql.voilk.com/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: '{create_account(username: "'+this.state.username+'", password: "'+this.state.password+'", referral: "'+this.state.ref+'", accesstoken: "'+tc+'"){active activePubkey posting postingPubkey owner ownerPubkey memo memoPubkey masterPassword errors }}' }),
                })
                .then(re => re.json())
                .then(re => {
                    this.setState({error: "Generating Account..."});
                    
                    if(re.data.create_account===null)
                    {

                        this.setState(
                            {
                                error: "There was some problem Refresh and Try again!!", 
                                availbtn: true, 
                                username: ""
                            }
                        );
                        return;
                    }
                    else {
                        
                        
                        // playground requires you to assign document definition to a variable called dd
                        let accountInfo = re.data.create_account;
                        var dd = {
                            content: [
                            
                                {text: pdfinfo.title, style: 'header'},
                                pdfinfo.desc,
                                {text: 'Username: '+ this.state.username, style: 'subheader'},
                                {
                                    style: 'tableExample',
                                    table: {
                                        body: [
                                            ['Creator', pdfinfo.creator],
                                            ['Username', this.state.username],
                                            ['Referral', this.state.ref]
                                        ]
                                    }
                                },
                                'Account\'s access information',
                                {
                                    style: 'tableExample',
                                    table: {
                                        body: [
                                            ['Key Type', 'Value'],
                                            ['Master Password', accountInfo.masterPassword],
                                            ['Posting Key', accountInfo.posting],
                                            ['Active Key', accountInfo.active],
                                            ['Owner key', accountInfo.owner],
                                            ['Memo Key', accountInfo.memo]
                                        ]
                                    }
                                },
                                {text: 'Notes..', style: 'subheader'},
                                {
                                    bold: true,
                                    ul: pdfinfo.details
                                },
                            ],
                            styles: {
                                header: {
                                    fontSize: 18,
                                    bold: true,
                                    margin: [0, 0, 0, 10]
                                },
                                subheader: {
                                    fontSize: 16,
                                    bold: true,
                                    margin: [0, 10, 0, 5]
                                },
                                tableExample: {
                                    margin: [0, 5, 0, 15]
                                },
                                tableHeader: {
                                    bold: true,
                                    fontSize: 13,
                                    color: 'black'
                                }
                            },
                            defaultStyle: {
                                // alignment: 'justify'
                            }
                            
                        }
                        this.setState(
                            {
                                error: "Creating PDF file...", 
                                availbtn: false,
                                genbtn: false,
                                inputfield: true
                            }
                        );
                        
                        pdfmake.createPdf(dd, null, null, fonts.pdfMake.vfs).download(this.state.username + ".pdf");

                        this.setState(
                            {
                                error: "Account is Created ✅ Password: " + accountInfo.masterPassword, 
                                availbtn: false,
                                genbtn: false,
                                inputfield: true
                            }
                        );
                        
                    }
                });
                
            }
        });
         
    }

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
        if (Premium.list.includes(value)) {
            return "This username is purchase only!!";
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
    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        const cookies = new Cookies();
        if(values.ref!==undefined){
            cookies.set('ref', values.ref); 
            this.setState(
                {ref: cookies.get('ref')}
            );
        }
        else {
            this.setState(
                {ref: cookies.get('ref')===undefined?"voilk":cookies.get('ref')}
            );
        }
    }

    render() { 
        return ( 		
        <section class="section overfree">
            <div class="icon-center"><i class="fa fa-user"></i></div>
            <div class="container">
                <div class="section-title text-center">
                    
                    <p class="lead">You were invited by <strong color="red">{this.state.ref}</strong></p>
                    <p>Type a username, in small english letters, when you generate an account, a PDF file downloads, which carries your account's passwords,
                        Keep this file safe and secure.
                    </p>
                </div>

                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <form class="quoteform lightform">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="type your desired username"
                                onChange={ this.handlechange } 
                                disabled= {this.state.inputfield} />
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Hit generate and password will appear here"
                                value={this.state.password}
                                disabled />
                            <label>{this.state.error}</label>
                            <button type="submit" onClick={this.handleavailability} class="btn btn-transparent btn-block" disabled={this.state.availbtn} >Check Availability</button>
                            <button type="submit" onClick={this.handlecreate} class="btn btn-transparent btn-block" disabled={this.state.genbtn} >Generate Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
    );
    }
}
 
export default SignupForm;
