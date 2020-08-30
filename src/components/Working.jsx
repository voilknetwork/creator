import React, { Component } from 'react';
import {text} from "../constants/text";


class Working extends Component {
    state = {}
    render() {
        return (
            <>
        <section class="section bt">
            <div class="container">
                <div class="section-title text-center">
                <br/>
        <h3>{text.mission_3[0]}</h3>
					<small>{text.mission_3[1]}</small>
					<hr />
					<p class="lead"> {text.mission_3[2]}	
                    <br />
                    </p>
					<hr />
                </div>

                <div class="row custom-features">
                    <div class="col-md-4">
                        <div class="feature-seo">
        <h4><i class="fa fa-user"></i> {text.offerings_3[0].title}</h4>
                            <p>{text.offerings_3[0].info}</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-user-secret"></i> {text.offerings_3[1].title}</h4>
                            <p>{text.offerings_3[1].info}</p></div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-folder-open-o"></i> {text.offerings_3[2].title}</h4>
                            <p>{text.offerings_3[2].info}</p> </div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-mobile"></i> {text.offerings_3[3].title}</h4>
                            <p>{text.offerings_3[3].info}</p></div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-star"></i> {text.offerings_3[4].title}</h4>
                            <p>{text.offerings_3[4].info}</p></div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-line-chart"></i>{text.offerings_3[5].title}</h4>
                            <p>{text.offerings_3[5].info}</p></div>
                    </div>
                </div>
            </div>
        </section>
        </>
        );
    }
}

export default Working;