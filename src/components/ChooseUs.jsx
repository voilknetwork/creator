import React, { Component } from 'react';
import {text} from "../constants/text";
class ChooseUs extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <section class="section overfree">
			<div class="icon-center"><i class="fa fa-anchor"></i></div>
			<div class="container">
				<div class="section-title text-center">
		<h3>{text.choose_us[0]}</h3>
					<hr />
					<p class="lead">{text.choose_us[1]}  
                    <br />
                    </p>
					<hr />
				</div>

				<div class="row service-list text-center">
					<div class="col-md-4 col-sm-12 col-xs-12 first">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/050-network.png"} width="100px" alt="invest"/>

							<div class="service-details">
		<h4><a href="#" title="">{text.offerings[0].title}</a></h4>
								<p>{text.offerings[0].info}</p>
								<a href="/register" class="readmore">Generate Account</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/049-trophy.png"} width="100px" alt="invest"/>

							<div class="service-details">
		<h4><a href="#" title="">{text.offerings[1].title}</a></h4>
		<p>{text.offerings[1].info}</p>
								<a href="/register" class="readmore">Join Now</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12 last">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/015-connection.png"} width="100px" alt="invest"/>

							<div class="service-details">
		<h4><a href="#" title="">{text.offerings[2].title}</a></h4>
		<p>{text.offerings[2].info}</p>
								<a href="/register" class="readmore">Generate Account</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row service-list text-center">
					<div class="col-md-4 col-sm-12 col-xs-12 first">
						<div class="service-wrapper wow fadeIn">	
							<img src={process.env.PUBLIC_URL+"/images/009-elearning.png"} width="100px" alt="invest"/>
							<div class="service-details">
		<h4><a href="#" title="">{text.offerings[3].title}</a></h4>
		<p>{text.offerings[3].info}</p>
								<a href="https://invest.voilk.com" class="readmore">HYIP</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/017-presentation.png"} width="100px" alt="invest"/>

							<div class="service-details">
		<h4><a href="#" title="">{text.offerings[4].title}</a></h4>
								<p>{text.offerings[4].info}</p>
								<a href="https://ads.voilk.com" class="readmore">Adverts</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12 last">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/039-books.png"} width="100px" alt="invest"/>

							<div class="service-details">
								<h4><a href="#" title="">{text.offerings[5].title}</a></h4>
								<p>{text.offerings[5].info}</p>
								<a href="https://explorer.voilk.com" class="readmore">Explorer</a>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</section>
<section >		
			<div class="container">
				<div class="section-title text-center">
					<br/>
		<h3>{text.mission[0]}</h3>
		<small>{text.mission[1]}</small>
					<br/>
					<p class="lead">{text.mission[2]} 		
                    <br />
                    </p>
				</div>
			</div>
		</section>
		
		<section class="section overfree">
		
			<div class="container">
				<div class="section-title text-center">
					<br/>
		<h3>{text.mission_2[0]}</h3>
					<small>{text.mission_2[1]}</small>
					<hr />
					<p class="lead"> {text.mission_2[2]}		
                    <br />
                    </p>
					<hr />
				</div>
				<div class="row service-list text-center">
					<div class="col-md-4 col-sm-12 col-xs-12 first">
						<div class="service-wrapper wow fadeIn">	
							<img src={process.env.PUBLIC_URL+"/images/030-ebook.png"} width="100px" alt="invest"/>
							<div class="service-details">
		<h4><a href="#" title="">{text.offerings_2[0].title}</a></h4>
								<p>{text.offerings_2[0].info}</p>
								<a href="https://www.voilk.com/login.html" class="readmore">Create Posts</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/006-elearning.png"} width="100px" alt="invest"/>

							<div class="service-details">
								<h4><a href="#" title="">{text.offerings_2[1].title}</a></h4>
								<p>{text.offerings_2[1].info}</p>
								<a href="https://invest.voilk.com" class="readmore">Invest Now</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12 col-xs-12 last">
						<div class="service-wrapper wow fadeIn">	
						<img src={process.env.PUBLIC_URL+"/images/047-join.png"} width="100px" alt="invest"/>

							<div class="service-details">
								<h4><a href="#" title="">{text.offerings_2[2].title}</a></h4>
								<p>{text.offerings_2[2].info}</p>
								<a href="https://www.voilk.com/login.html" class="readmore">Login and VOTE</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<br/>
		<br/>
        </React.Fragment> );
    }
}
 
export default ChooseUs;
