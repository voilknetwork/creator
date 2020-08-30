import React, { Component } from 'react'
import Headerpanel from '../../components/Headerpanel';
import FaqPanel from '../../components/FaqPanel';

class Faq extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <FaqPanel {...this.props}/>
            </React.Fragment>
         );
    }
}
 
export default Faq;