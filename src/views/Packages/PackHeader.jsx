import React, { Component } from 'react';

class PackHeader extends Component {
    state = {  }
    render() { 
        return ( 		
        <section class="section transheader customtitle">
        <div class="container">
            <div class="row">	
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
                    <h2>Exciting <strong>SP Packages</strong></h2>
                    <p class="lead">Choose a package that fulfills your needs.  
                    <br/>Activate any package instantly, with a click of a button.</p>
                </div>
            </div>
        </div>
    </section>
    );
    }
}
 
export default PackHeader;