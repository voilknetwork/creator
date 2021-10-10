import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import UserCount from './UserCount';
import VersionComponent from './VersionComponent';
import WitnessCount from './WitnessCount';

require('isomorphic-fetch');

class StatsCounter extends Component {
    state = {}
    render() {
        return (
            <section className="section overfree">
                <div className="container">
                    <div class="row">
                        <UserCount />
                        <VersionComponent />
                        <WitnessCount />
                    </div>

                </div>
            </section>
        );
    }
}

export default StatsCounter;