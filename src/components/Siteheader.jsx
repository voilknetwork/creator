import React, { Component } from "react";
import { matchPath, withRouter } from 'react-router';
import { Query } from "react-apollo";
import gql from "graphql-tag";
require('isomorphic-fetch');

class Siteheader extends Component {

  gettrendingtags()
  {
    return (
      <Query
        query={gql`
          {
            get_tags {
              name
              total_payouts
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (<p>Loading...</p>);
          if (error) return <p>Error :(</p>;
          
          var i,j,temparray=[],chunk = 6;
          for (i=0,j=data.get_tags.length; i<j; i+=chunk) {
                temparray[i] = data.get_tags.slice(i,i+chunk);
                // do whatever
          }
          return (
            <React.Fragment>
              {temparray.map((tmp, key) => {                 
                 return(
                  <div className="col-md-2" key={key}>
                  <ul>                   
                    {
                      tmp.map((element, key) => {
                        
                        return(
                        <li key={key}>
                          <a href={"https://www.voilk.com/trending/" +element.name} target="_blank">
                            {element.name===""?"All":element.name}
                          </a>
                        </li>
                      )
                      })
                    }
                 </ul>
               </div>                
                  );
              })}              
            </React.Fragment>                  
          );
        }}
        </Query>
        )
  }

  render() {
    return (
      <React.Fragment>
        <header className="header site-header">
          <div className="container">
            <nav className="navbar navbar-default yamm">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="/">
                    <img src="images/logo.png" alt="Linda" />
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className={matchPath(this.props.location.pathname, { path: "/welcome" }) ? 'active' : ''}>
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown yamm-fw hasmenu">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore
                        <span className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="yamm-content">
                            <div className="row">

                              {this.gettrendingtags()}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className={matchPath(this.props.location.pathname, { path: "/affiliates" }) ? 'active' : ''}>
                      <a href="https://affiliates.voilk.com/signin">affiliates</a>
                    </li>
                    <li className={matchPath(this.props.location.pathname, { path: "/faq" }) ? 'active' : ''}>
                      <a href="/faq">FAQs</a>
                    </li>
                    <li>
                      <a href="https://voilk.com/privacy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Siteheader);
