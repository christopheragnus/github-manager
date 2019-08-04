import React from "react";
import styled from "styled-components";

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

export default function Login() {
  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${
          process.env.REACT_APP_CLIENT_ID
        }`}
      >
        <Button>Login with Github</Button>
      </a>
    </div>
  );
}
