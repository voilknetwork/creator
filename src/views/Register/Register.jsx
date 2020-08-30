import React, { Component } from 'react'
import Headerpanel from '../../components/Headerpanel';
import SignupForm from '../../components/SignupForm';

class Register extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <Headerpanel/>
              <SignupForm {...this.props}/>
            </React.Fragment>
         );
    }
}
 
export default Register;