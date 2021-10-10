import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InfoItem from "../../components/InfoItem/InfoItem";

class WitnessCount extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            witness_count {
              count
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <InfoItem
                info={{
                  image: "images/icon_09.png",
                  value: 0,
                  title: "Witnesses"
                }}
              />
            );
          if (error) return <p>Error :(</p>;

          return (
            <InfoItem
                info={{
                  image: "images/icon_09.png",
                  value: data.witness_count.count,
                  title: "Witnesses"
                }}
              />
          );
        }}
      </Query>
    );
  }
}

export default WitnessCount;
