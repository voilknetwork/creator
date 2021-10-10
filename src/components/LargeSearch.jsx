import React, { Component } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import {text} from "../constants/text";

class LargeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "@voilk"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.value[0] === "@") {
      window.location = `https://www.voilk.com/${this.state.value}`;
    } else {
      window.location = `https://www.voilk.com/${this.state.value}`;
    }
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <section
          class="section transheader homepage parallax"
          data-stellar-background-ratio="0.5"
          style= {{ 'background-image': "url('upload/bg_01.jpg')"}}
        >
          <div class="container">
          
            <div class="row">
              <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
    <h2>{text.title}</h2>
                <p class="lead" style={{backgroundColor: "white", color: "black"}}>
                  {text.description}
                </p>
                <form class="calculateform" onSubmit={this.handleSubmit}>
                  <div class="item-box">
                    <div class="item-top form-inline">
                      <div class="form-group">
                        <div class="input-group2">
                          <span class="input-addon">
                            <i class="fa fa-link" />
                          </span>
                          <input
                            type="url"
                            class="form-control"
                            placeholder="Type blog address with an @symbol"
                            value={this.state.value}
                            onChange={this.handleChange}
                            id="urladres"
                            name="url"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        name="send"
                        value="Explore"
                        class="btn btn-default"
                        onClick={this.handleSubmit}
                      />
                      
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </section>
        
      </React.Fragment>
    );
  }
}

export default LargeSearch;
