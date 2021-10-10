import React, { Component, Fragment } from 'react'
import LargeSearch from "../../components/LargeSearch";
import InfoPanel from "../../components/InfoPanel";
import ChooseUs from "../../components/ChooseUs";
import Paragraph from '../../components/Paragraph';
import Packs from '../../components/Packs';
import Partners from '../../components/Partners';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import Working from '../../components/Working';
import Deposit from '../../components/Deposit';
import Methods from '../../components/Methods';

class Welcome extends Component {
    state = {  }
    render() { 
        return (
            <Fragment> 
                <LargeSearch />
                <InfoPanel />
                <StatsCounter />
                <ChooseUs />
                <Packs />
                <Working />
                <Deposit />
                <Methods />
            </Fragment> );
    }
}
 
export default Welcome;