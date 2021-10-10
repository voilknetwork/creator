import React, { Component, Fragment } from 'react';

class Paragraph extends Component {
    state = {  }
    render() { 
        return ( 
        <Fragment>
            <section class="section lb nopad spotlight style1">
                <div class="image col-md-4 hidden-sm hidden-xs">
                    <img src="upload/blog_alt_06.jpg" alt="" />
                </div>
                <div class="content">
                    <h2>Be the leader in the sector</h2>
                    <p>Cras arcu sapien, maximus a accumsan at, iaculis nec nunc. Nullam ac ultricies velit, ut tincidunt tellus. Nunc nec sem at ante imperdiet tempor. Ut eu vulputate augue. Maecenas ultrices, arcu vel condimentum pharetra, diam eros mattis lectus, nec gravida sem erat nec orci. In dapibus ex eget arcu feugiat, non rhoncus enimpien id ligula sollicitudin fringilla ut id lacus. </p>
                    <a href="#" class="btn btn-transparent">Learn More</a>
                </div>
            </section>
        </Fragment>
         );
    }
}
 
export default Paragraph;