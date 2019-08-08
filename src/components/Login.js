/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { FaGithub } from "react-icons/fa";

const Button = styled.button`
  color: #fff;
  background-color: ${props => (props.danger ? "#ff4d4f;" : "#1890ff;")}
  border-color: ${props => (props.danger ? "#ff4d4f;" : "#1890ff;")}
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
    background-color: ${props => (props.danger ? "#ffa6a7;" : "#73bcff;")}
    transition: opacity 0.1s;
    cursor: pointer;
  }
`;

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

const Li = styled.li`
  list-style: none;
`;

const CardCover = styled.div`
  height: 100px;
  width: 100px;
`;

const Container = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Alert = styled.div`
  border: 1px solid #b7eb8f;
  background-color: #f6ffed;
  border-radius: 3px;
  font-size: 14px;
  padding: 8px 15px 8px 15px;
  margin: 1em;
`;

function LoginButton(props) {
  const { requestCode } = props;

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <div>
      {localStorage.getItem("token") ? (
        <Button danger onClick={() => Logout()}>
          Logout
        </Button>
      ) : (
        <Button onClick={() => requestCode()}>
          Login with Github <FaGithub />
        </Button>
      )}
    </div>
  );
}

const PROFILE_QUERY = gql`
  query {
    viewer {
      login
      name
      bio
      avatarUrl
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }
`;

function Profile() {
  return (
    <div>
      <h2>Your Profile</h2>
      <Query query={PROFILE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error.";

          return [data.viewer].map((item, index) => (
            <ProfileCard key={index}>
              <CardCover>
                <img src={item.avatarUrl} />
              </CardCover>
              <ul>
                <Li>Github Username: {item.login}</Li>
                <Li>Full Name: {item.name}</Li>
                <Li>Bio: {item.bio}</Li>
                <Li>No. of repositories: {item.repositories.totalCount}</Li>
                <Li>No. of followers: {item.followers.totalCount}</Li>
              </ul>
            </ProfileCard>
          ));
        }}
      </Query>
    </div>
  );
}

export default function Login() {
  const [authData, setAuthData] = useState(null);

  function backendMutation(code) {
    const url = "http://localhost:4000";
    const mutation = JSON.stringify({
      query: `mutation {
          githubAuth(code: "${code}") {
            token
            user {
              id
              name
            }
          }
        }
      `
    });

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: mutation
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(res => setAuthData(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      const code = window.location.search.replace("?code=", "");
      backendMutation(code);

      function authComplete() {
        if (authData) {
          let token = authData.githubAuth.token;
          localStorage.setItem("token", token);
          navigate("/", { replace: true });
        }
        return null;
      }

      authComplete();
    }
  }, [authData]);

  const requestCode = () => {
    window.location = `https://github.com/login/oauth/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&scope=user public_repo gist`;
  };

  return (
    <Container>
      {localStorage.getItem("token") ? (
        <Profile />
      ) : (
        <Alert>{"Not logged in yet."}</Alert>
      )}

      <LoginButton requestCode={requestCode} />
    </Container>
  );
}
