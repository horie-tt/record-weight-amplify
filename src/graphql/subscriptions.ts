/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWeight = /* GraphQL */ `
  subscription OnCreateWeight(
    $filter: ModelSubscriptionWeightFilterInput
    $owner: String
  ) {
    onCreateWeight(filter: $filter, owner: $owner) {
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
export const onUpdateWeight = /* GraphQL */ `
  subscription OnUpdateWeight(
    $filter: ModelSubscriptionWeightFilterInput
    $owner: String
  ) {
    onUpdateWeight(filter: $filter, owner: $owner) {
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
export const onDeleteWeight = /* GraphQL */ `
  subscription OnDeleteWeight(
    $filter: ModelSubscriptionWeightFilterInput
    $owner: String
  ) {
    onDeleteWeight(filter: $filter, owner: $owner) {
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
