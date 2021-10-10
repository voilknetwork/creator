import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InfoItem from "../../components/InfoItem/InfoItem";

class VersionComponent extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            version {
              blockchain_version
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <InfoItem
                info={{
                  image: "images/icon_08.png",
                  value: 0,
                  title: "Version"
                }}
              />
            );
          if (error) return <p>Error :(</p>;

          return (
            <InfoItem
                info={{
                  image: "images/icon_08.png",
                  value: data.version.blockchain_version,
                  title: "BlockChain Version"
                }}
              />
          );
        }}
      </Query>
    );
  }
}

export default VersionComponent;
