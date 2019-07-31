import React from "react";

import { Router, Link } from "@reach/router";

import { Layout, Menu } from "antd";

import Resume from "./Resume";
import NewResume from "./NewResume";

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
              <Link to="/">List Resumes</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/new">New Resume</Link>
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
              <Resume path="/" />
              <NewResume path="/new" />
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Resume-O-Tron by Christopher Lam
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
