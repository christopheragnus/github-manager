/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState, useRef } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Mutation, Query } from "react-apollo";

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
    transition: opacity 0.1s;
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

function LoginButton(props) {
  const { requestCode } = props;
  return <Button onClick={() => requestCode()}>Login with Github</Button>;
}

// function Profile() {
//   return (
//     <Query query={}>
//       {({ loading, error, data }) => {
//         if (loading) return "Loading...";
//         if (error) return "Error.";

//         return (
//           data.me &&
//           [data.me].map((item, index) => (
//             <ProfileCard key={index}>
//               <CardCover>
//                 <img src={item.avatar} />
//               </CardCover>
//               <ul>
//                 <Li>Github Username: {item.githubLogin}</Li>
//                 <Li>Full Name: {item.name}</Li>
//               </ul>
//             </ProfileCard>
//           ))
//         );
//       }}
//     </Query>
//   );
// }

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
    }`;
  };

  return (
    <div>
      <LoginButton requestCode={requestCode} />
    </div>
  );
}
