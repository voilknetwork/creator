
import React, { Component } from 'react';
import Question from './Question';
import {faq} from "../constants/faq";

class Questions extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section class="section normalhead">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
                                <h2>FAQS</h2>
                                <p class="lead">Here is a list of frequently asked questions. If your question isn't listed here feel free to contact us</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 mb30">
                                <div class="faqs-template">
                                    <div class="panel-group" id="accordion">
                                    {faq.map((f, index) => {
                                        console.log(index)
                                        return (<Question question={f} index={index}/>)
                                    } )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row contactv2 text-center">
                            <div class="col-md-4">
                                <div class="small-box">
                                    <i class="flaticon-chat"></i>
                                    <h4>Chat Group</h4>
                                    <p><a href="https://discord.gg/QNryJsJ">voilk Discord</a></p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="small-box">
                                    <i class="flaticon-message"></i>
                                    <h4>Email us</h4>
                                    <p><a href="#">support@voilk.com</a></p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="small-box">
                                    <i class="flaticon-chat"></i>
                                    <h4>Facebook</h4>
                                    <p><a href="https://facebook.com/voilknetwork">Facebook Chat</a></p>
                                </div> 
                            </div>
                        </div>
                        <div class="section-button clearfix text-center">
                            <h4>Your answer not here? for more answers Click below..</h4>
                            <br />
                            <a href="https://discord.gg/QNryJsJ" class="btn btn-transparent">Chat With Us</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>);
    }
}

export default Questions;
