import React from "react";

import { Router, Link, navigate } from "@reach/router";
import { Layout, Menu } from "antd";

import List from "./List";
import Login from "./Login";
import Callback from "./Callback";
import SearchPage from "./Search";
//import NewResume from "./NewResume";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/list">List Repositories</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/search">Find Repositories</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 100 }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 380,
              marginTop: "16px"
            }}
          >
            <Router>
              <List path="/list" />
              <Login path="/" />
              <Callback path="/callback" />
              <SearchPage path="/search" />
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Github Manager by Christopher Lam
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
