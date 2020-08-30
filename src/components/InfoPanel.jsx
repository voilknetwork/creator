import React, { Component } from "react";
import {text} from "../constants/text";

class InfoPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="section nopad">
          <div class="container-fluid">
            <div class="row text-center">
              <div class="col-md-3 col-sm-6 nopad first">
                <div class="home-service c1">
                  <i class="flaticon-competition" />
    <p>{text.infopanel[0]}</p>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 nopad">
                <div class="home-service c2">
                  <i class="flaticon-chat" />
                  <p>{text.infopanel[1]}</p>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 nopad">
                <div class="home-service c3">
                  <i class="flaticon-domain" />
                  <p>{text.infopanel[2]}</p>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 nopad last">
                <div class="home-service c4">
                  <i class="flaticon-medal" />
                  <p>{text.infopanel[3]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default InfoPanel;
