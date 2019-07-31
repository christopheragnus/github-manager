import React from "react";
import { Spin } from "antd";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";

import Positions from "./Positions";

import "./App.css";

const id = "cjygq721k7l180b06l874sg65";

const ResumeContainer = styled.div`
  padding: 1em;
  display: flex;
  row-direction: column;
  justify-content: flex-start;
`;

export default function Resume() {
  return (
    <Query query={RESUME} variables={{ id }}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div className="flex w-100 h-100 items-center justify-center pt7">
              <Spin tip="Loading..." />
            </div>
          );
        }
        return (
          <ResumeContainer>
            {data.resume && (
              <div>
                <h1>
                  <span role="img"> 🌞 </span> {data.resume.name}
                </h1>
                <h3>Email: {data.resume.email}</h3>
                <h3>Address: {data.resume.address}</h3>

                <h2>Past Positions</h2>
                <Positions refresh={() => refetch()} />
              </div>
            )}
          </ResumeContainer>
        );
      }}
    </Query>
  );
}

const RESUME = gql`
  query getResume($id: String!) {
    resume(id: $id) {
      name
      email
      address
    }
  }
`;
