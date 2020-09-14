import React, { Component } from "react";


class Topbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 hidden-xs">
                <nav className="topbar-menu">
                  <ul className="list-inline">
                    <li>
                      <a className="btn btn-transparent" href="https://discord.gg/QNryJsJ">
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-md-6 col-sm-6">
                <nav className="topbar-menu">
                  <ul className="list-inline text-right navbar-right">
                    <li className="hidden-xs">
                      <i className="fa fa-mail" /> Email us
                    </li>
                    <li>
                      <i className="fa fa-envelope" /> support@voilk.com
                    </li>
                    <li>
                    <a className="btn btn-transparent" href="https://voilk.com/login.html">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-transparent" href="/register">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Topbar;
