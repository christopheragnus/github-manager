import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";

import { Button } from "antd";

const Alert = styled.div`
  border: 1px solid #ffa6a7;
  background-color: #ffa6a7;
  border-radius: 3px;
  font-size: 14px;
  padding: 8px 15px 8px 15px;
  margin: 1em;
`;

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
          {(unstarRepository, { loading, error }) => {
            if (loading) return "Loading";
            if (error) return <Alert>{`Error: ${error}`}</Alert>;

            return <Button onClick={unstarRepository}>Un-Star</Button>;
          }}
        </Mutation>
      ) : (
        <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
          {(starRepository, { loading, error }) => {
            if (loading) return "Loading";
            if (error) return <Alert>{`Error: ${error}`}</Alert>;
            return <Button onClick={starRepository}>Star</Button>;
          }}
        </Mutation>
      )}
    </Fragment>
  );
}
