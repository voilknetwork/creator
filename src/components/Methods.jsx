import React from 'react'
import {text} from "../constants/text";

function Methods() {
    return (
        <section class="section bt">
            <div class="container">
                <div class="section-title text-center">
                <br/>
    <h3>{text.methods[0]}</h3>
					<small>{text.methods[1]}</small>
					<hr />
                </div>
                <div className="container">
                <div className="row">
                        <div className="col-md-12">
                            <div class="container">
                                <div className="row">
                                    <div className="col-md-2">
								<img src={process.env.PUBLIC_URL+"/images/bitcoin.png"} height="50px" alt="bitcoin" />

                                    </div>
                                    <div className="col-md-2">
								<img src={process.env.PUBLIC_URL+"/images/bitcash.png"} height="50px" alt="bitcoin cash"/>

                                    </div>
                                    <div className="col-md-4">
								<img  src={process.env.PUBLIC_URL+"/images/perfect.png"} height="50px" alt="perfect money"/>

                                    </div>
                                    <div className="col-md-2">
								<img src={process.env.PUBLIC_URL+"/images/skrill.png"} height="50px" alt="skrill"/>

                                    </div>
                                    <div className="col-md-2">
								<img  src={process.env.PUBLIC_URL+"/images/webmoney.png"} height="50px" alt="webmoney"/>

                                    </div>
                                    
                                </div>
							</div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </section>
        
    )
}

export default Methods
