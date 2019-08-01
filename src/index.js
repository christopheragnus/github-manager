import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import App from "./components/App";

import "tachyons";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}` }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
