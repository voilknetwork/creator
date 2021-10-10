import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="widget clearfix">
                <div class="newsletter-widget">
                   <form class="form-inline" role="search">
                        <div class="form-1">
                            <input type="text" class="form-control" placeholder="Enter email here.." />
                            <button type="submit" class="btn btn-primary"><i class="fa fa-envelope-o"></i></button>
                        </div>
                    </form> 
                </div>
            </div>
         );
    }
}
 
export default SearchBar;