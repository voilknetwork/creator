import React, { Component } from 'react';

class Headerpanel extends Component {
    state = {  }
    render() { 
        return ( 		
        <section class="section transheader customtitle">
            <div class="container">
                <div class="row">	
                    <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
                        <h2><strong>voilk</strong> account generation!</h2>
                        <p class="lead">
                        Generate an account without any SMS or Email verification
                         <br /> hassle-free, instant <strong>account generation</strong> at your service.</p>
                    </div>
                </div>
            </div>
        </section> 
      );
    }
}
 
export default Headerpanel;