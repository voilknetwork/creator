import React, { Component } from 'react'
import Packs from '../../components/Packs';
import PackHeader from './PackHeader';

class Packages extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <PackHeader />
              <Packs {...this.props}/>
            </React.Fragment>
         );
    }
}
 
export default Packages;