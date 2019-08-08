import React, { useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";
import Star from "./Star";

import "./App.css";

const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  width: 30em;
  margin: 0.5em;
`;

const Col = styled.div`
  flex: 1;
`;

const CardBody = styled.div`
  flex: 2;
`;

const Li = styled.li`
  list-style: none;
`;

const CardCover = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  height: 100px;
  width: 100px;
  border: solid 1px black;
`;

const Container = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const STARRED_REPOS = gql`
  query($after: String) {
    viewer {
      starredRepositories(first: 24, after: $after) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }

        nodes {
          id
          name
          shortDescriptionHTML
          url
          viewerHasStarred
          openGraphImageUrl

          stargazers {
            totalCount
          }
          owner {
            login
          }
        }
      }
    }
  }
`;

function List() {
  return (
    <div>
      <h2>List of Your Starred Repositories</h2>
      <Container>
        <Query query={STARRED_REPOS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return "Error.";

            return data.viewer.starredRepositories.nodes.map((node, index) => (
              <ProfileCard key={index}>
                <Col>
                  <CardCover img={node.openGraphImageUrl} />
                </Col>

                <CardBody>
                  <ul>
                    <Li>Repository Name: {node.name}</Li>
                    <Li>Description: {node.shortDescriptionHTML} </Li>
                    <Li>No. of Stars: {node.stargazers.totalCount}</Li>
                    <Li>Repository Owner: {node.owner.login}</Li>
                    <Li>
                      <a href={node.url}>Link</a>
                    </Li>
                    <Li>
                      {
                        <Star
                          id={node.id}
                          viewerHasStarred={node.viewerHasStarred}
                        />
                      }
                    </Li>
                  </ul>
                </CardBody>
              </ProfileCard>
            ));
          }}
        </Query>
      </Container>
    </div>
  );
}

export default List;
