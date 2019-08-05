import React, { useEffect, useState, useRef } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const GITHUB_AUTH = gql`
  mutation GithubAuth($code: String!) {
    githubAuth(code: $code) {
      token
      user {
        id
        name
      }
    }
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  line-height: 1.499;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #73bcff;
    transition: opacity 0.2s;
  }
`;

function LoginButton(props) {
  const { requestCode } = props;
  return <Button onClick={() => requestCode()}>Login with Github</Button>;
}

export default function Login() {
  var mutation;

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      const code = window.location.search.replace("?code=", "");
      mutation({ variables: { code } });
    }
  });

  const requestCode = () => {
    window.location = `https://github.com/login/oauth/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }`;
  };

  const authComplete = () => {
    navigate("/", { replace: true });
  };

  return (
    <Mutation mutation={GITHUB_AUTH} update={authComplete}>
      {mutate => {
        mutation = mutate;
        return (
          <div>
            <LoginButton mutate={mutate} requestCode={requestCode} />
          </div>
        );
      }}
    </Mutation>
  );
}
