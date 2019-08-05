import React, { useState } from "react";
import { Spin } from "antd";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";

import Positions from "./Positions";

import "./App.css";

const id = "cjygq721k7l180b06l874sg65";

const Container = styled.div`
  padding: 1em;
  display: flex;
  row-direction: column;
  justify-content: flex-start;
`;

export default function Repositories() {
  return (
    {/* <Query query={STARRED_REPOS} variables={{ id }}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div className="flex w-100 h-100 items-center justify-center pt7">
              <Spin tip="Loading..." />
            </div>
          );
        }
        {
          console.log(data);
        }
        return (
          <Container>
            <div>
              <h1>List of Starred Repositories</h1>
            </div>
            <div>
              <ul>
                {data.viewer.starredRepositories.edges.map(row => {
                  return <li>{row.node.name}</li>;
                })}
              </ul>
            </div>
          </Container>
        );
      }}
    </Query> */}
  );
}

const STARRED_REPOS = gql`
  query {
    viewer {
      login
      name
      starredRepositories(first: 3) {
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  }
`;
