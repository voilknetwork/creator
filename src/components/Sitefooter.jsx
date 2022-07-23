import React, { Component, Fragment } from 'react';

class Sitefooter extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
            <footer class="footer primary-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">voilk</h4>
                    		<div class="newsletter-widget">
                    			<p>Voilk is a decentral Social Network built on top of
        Voilk Blockchain, fueled by the VOILK and VSD
        cryptocurrencies, comes with an explorer,
        exchange market and an affiliates Network for
        promoters</p>
		                        
                    		</div>
                    	</div>
                    </div>
                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Links</h4>
                    		<ul>
                    			<li><a href="https://voilk.com/market">Internal Market</a></li>
                    			<li><a href="https://voilk.com/witnesses">Witnesses</a></li>
                    			<li><a href="https://voilk.com/read/trending">Trending</a></li>
                    			<li><a href="https://voilk.com/read/created">New Posts</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Cashier</h4>
                    		<ul>
							<li><a href="https://voilk.com/read/trending">Social Network</a></li>
							<li><a href="https://voilk.com/whitepaper.pdf">WhitePaper</a></li>
                    		   <li><a href="https://affiliates.voilk.com/deposit">Deposit</a></li>
                    		   <li><a href="https://affiliates.voilk.com/withdraw">Withdraw</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Tools</h4>
                    		<ul>
                    			<li><a href="https://graphql.voilk.com/graphql">GraphQL</a></li>
                    			<li><a href="https://explorer.voilk.com">Blockchain Explorer</a></li>
                    			<li><a href="https://github.com/voilknetwork">Github Repo</a></li>
								<li><a href="https://www.voilk.com/change_password">Change Password</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Talk to us</h4>
                    		<ul>
                    			<li><a href="https://discord.gg/SjyCp6TYYN">Discord</a></li>
                    		</ul>
                    	</div>
                    </div>
                </div>
           	</div>
		</footer>

		<footer class="footer secondary-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <p>2021 &copy;<a href="/">voilk.com</a> All rights reserved.</p>
                    </div>
                </div>
            </div>
		</footer>
            </Fragment>
         );
    }
}
 
export default Sitefooter;
