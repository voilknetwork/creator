import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InfoItem from "../../components/InfoItem/InfoItem";

class UserCount extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            accounts_count {
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
                  image: "images/icon_07.png",
                  value: 0,
                  title: "Users"
                }}
              />
            );
          if (error) return <p>Error :(</p>;

          return (
            <InfoItem
              info={{
                image: "images/icon_07.png",
                value: data.accounts_count.count,
                title: "Users"
              }}
            />
          );
        }}
      </Query>
    );
  }
}

UserCount.propTypes = {};

export default UserCount;
