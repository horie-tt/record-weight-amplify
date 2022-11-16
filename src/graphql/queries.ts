/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWeight = /* GraphQL */ `
  query GetWeight($id: ID!) {
    getWeight(id: $id) {
      id
      date
      weight
      bmi
      bodyFatPer
      muscleMass
      visceralFat
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWeights = /* GraphQL */ `
  query ListWeights(
    $filter: ModelWeightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        weight
        bmi
        bodyFatPer
        muscleMass
        visceralFat
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
