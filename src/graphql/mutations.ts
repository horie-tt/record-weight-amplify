/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWeight = /* GraphQL */ `
  mutation CreateWeight(
    $input: CreateWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    createWeight(input: $input, condition: $condition) {
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
export const updateWeight = /* GraphQL */ `
  mutation UpdateWeight(
    $input: UpdateWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    updateWeight(input: $input, condition: $condition) {
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
export const deleteWeight = /* GraphQL */ `
  mutation DeleteWeight(
    $input: DeleteWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    deleteWeight(input: $input, condition: $condition) {
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
