import React, { useState, useEffect } from "react";
import Animate from "rc-animate";
import {
  formItemLayout,
  tailFormItemLayout
} from "../constants/formConstraints";

import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { Button, Form, Input } from "antd";

import "./App.css";

const PositionCard = styled.div`
  border: solid 1px black;
  border-radius: 3px;
  padding: 1em;
  margin: 0.5em 0.5em 0.5em 0;
  width: 500px;

  &:hover {
    transform: scale(1.05) translateZ(0);
    -webkit-box-shadow: 10px 10px 22px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 22px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 22px -8px rgba(0, 0, 0, 0.75);
    color: #40a9ff;
    border-color: #40a9ff;
    font-color: ;
  }
`;

const PostForm = styled.div`
  border: solid 1px grey;
  border-radius: 3px;
  padding: 1.5em;
  margin: 1em;
`;

export default function Positions(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    props.refresh();
  });
  return (
    <Query query={POSITIONS} update>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return <div>Loading ...</div>;
        }

        if (error) {
          return <div>An unexpected error occured.</div>;
        }

        return (
          <div>
            {data.positions ? (
              data.positions.map(item => (
                <PositionCard key={item.id}>
                  <p className="positionTitle">{item.title}</p>
                  <p>{item.year}</p>
                  <p>{item.description}</p>
                  <Mutation mutation={DELETE_POSITION}>
                    {(mutate, { data }) => (
                      <Button
                        type="danger"
                        onClick={() =>
                          mutate({
                            variables: { id: item.id },
                            refetchQueries: [{ query: POSITIONS }]
                          })
                        }
                      >
                        Delete
                      </Button>
                    )}
                  </Mutation>
                </PositionCard>
              ))
            ) : (
              <div>No positions found</div>
            )}
            {show ? <PositionForm /> : null}
            <Button onClick={() => setShow(!show)}>Add New Position</Button>
          </div>
        );
      }}
    </Query>
  );
}

function PositionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  return (
    <Animate transitionName="fade" transitionAppear>
      <PostForm>
        <Mutation mutation={CREATE_POSITION}>
          {(mutate, { data }) => {
            return (
              <Form
                {...formItemLayout}
                onSubmit={async e => {
                  e.preventDefault();
                  await mutate({
                    variables: { title, description, year },
                    refetchQueries: [{ query: POSITIONS }]
                  });
                }}
              >
                <Form.Item label="Title">
                  <Input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                  />
                </Form.Item>

                <Form.Item label="Description">
                  <Input
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                  />
                </Form.Item>
                <Form.Item label="Year">
                  <Input
                    type="number"
                    min="1999"
                    max="2100"
                    onChange={e => setYear(+e.target.value)}
                    value={year}
                  />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            );
          }}
        </Mutation>
      </PostForm>
    </Animate>
  );
}

const POSITIONS = gql`
  query getPositions {
    positions {
      id
      title
      description
      year
    }
  }
`;

const CREATE_POSITION = gql`
  mutation createPosition($title: String!, $description: String!, $year: Int!) {
    createPosition(title: $title, description: $description, year: $year) {
      id
      title
      description
      year
    }
  }
`;

const DELETE_POSITION = gql`
  mutation deletePosition($id: ID!) {
    deletePosition(id: $id) {
      id
    }
  }
`;
