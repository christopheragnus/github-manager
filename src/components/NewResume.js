import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import {
  formItemLayout,
  tailFormItemLayout
} from "../constants/formConstraints";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const id = "cjygq721k7l180b06l874sg65";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Alert = styled.div`
  border: 1px solid #b7eb8f;
  background-color: #f6ffed;
  border-radius: 3px;
  font-size: 14px;
  padding: 8px 15px 8px 15px;
`;

function NewResume(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Mutation mutation={UPSERT_RESUME}>
      {(mutate, { data }) => (
        <Container>
          <Form
            {...formItemLayout}
            onSubmit={async e => {
              e.preventDefault();
              await mutate({
                variables: { id, name, address, email }
              });
              await setShow(true);
            }}
          >
            <Form.Item label="Name">
              <Input onChange={e => setName(e.target.value)} value={name} />
            </Form.Item>

            <Form.Item label="Address">
              <Input
                onChange={e => setAddress(e.target.value)}
                value={address}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input onChange={e => setEmail(e.target.value)} value={email} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {show ? <Alert>Form successfully submitted!</Alert> : null}
        </Container>
      )}
    </Mutation>
  );
}

const UPSERT_RESUME = gql`
  mutation upsertResume(
    $id: ID!
    $name: String!
    $address: String!
    $email: String!
  ) {
    upsertResume(id: $id, name: $name, address: $address, email: $email) {
      id
      name
      address
    }
  }
`;

export default Form.create()(NewResume);
