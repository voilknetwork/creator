import React from 'react'
import {text} from "../constants/text"
function Deposit() {
    return (
        <section class="section bt">
            <div class="container">
                <div class="section-title text-center">
                <br/>
    <h3>{text.deposit_1[0]}</h3>
					<small>{text.deposit_1[1]}</small>
					<hr />
					<p class="lead"> {text.deposit_1[2]}		
                    <br />
                    </p>
					<hr />
                </div>

                <div class="row custom-features">
                <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-star"></i> {text.offerings_4[0].title} </h4>
                            <p>{text.offerings_4[0].info}</p> </div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-line-chart"></i>{text.offerings_4[1].title}</h4>
                            <p>{text.offerings_4[1].info}</p></div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-seo">
                            <h4><i class="fa fa-line-chart"></i>{text.offerings_4[2].title}</h4>
                            <p>{text.offerings_4[2].info}</p></div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Deposit
