import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import { Button } from "antd";

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export default function Star({ id, viewerHasStarred }) {
  return (
    <Fragment>
      {viewerHasStarred ? (
        <Mutation mutation={UNSTAR_REPOSITORY} variables={{ id }}>
          {(unstarRepository, { data, loading, error }) => {
            if (loading) return "Loading";
            if (error) return `Error: ${error}`;

            return <Button onClick={unstarRepository}>Un-Star</Button>;
          }}
        </Mutation>
      ) : (
        <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
          {(starRepository, { data, loading, error }) => {
            if (loading) return "Loading";
            if (error) return `Error: ${error}`;
            return <Button onClick={starRepository}>Star</Button>;
          }}
        </Mutation>
      )}
    </Fragment>
  );
}
