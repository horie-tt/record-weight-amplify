/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateWeightInput = {
  id?: string | null,
  date: string,
  weight: number,
  bmi: number,
  bodyFatPer: number,
  muscleMass: number,
  visceralFat: number,
};

export type ModelWeightConditionInput = {
  date?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  bmi?: ModelFloatInput | null,
  bodyFatPer?: ModelFloatInput | null,
  muscleMass?: ModelFloatInput | null,
  visceralFat?: ModelFloatInput | null,
  and?: Array< ModelWeightConditionInput | null > | null,
  or?: Array< ModelWeightConditionInput | null > | null,
  not?: ModelWeightConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Weight = {
  __typename: "Weight",
  id: string,
  date: string,
  weight: number,
  bmi: number,
  bodyFatPer: number,
  muscleMass: number,
  visceralFat: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateWeightInput = {
  id: string,
  date?: string | null,
  weight?: number | null,
  bmi?: number | null,
  bodyFatPer?: number | null,
  muscleMass?: number | null,
  visceralFat?: number | null,
};

export type DeleteWeightInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelWeightFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  bmi?: ModelFloatInput | null,
  bodyFatPer?: ModelFloatInput | null,
  muscleMass?: ModelFloatInput | null,
  visceralFat?: ModelFloatInput | null,
  and?: Array< ModelWeightFilterInput | null > | null,
  or?: Array< ModelWeightFilterInput | null > | null,
  not?: ModelWeightFilterInput | null,
};

export type ModelWeightConnection = {
  __typename: "ModelWeightConnection",
  items:  Array<Weight | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWeightFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  bmi?: ModelSubscriptionFloatInput | null,
  bodyFatPer?: ModelSubscriptionFloatInput | null,
  muscleMass?: ModelSubscriptionFloatInput | null,
  visceralFat?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionWeightFilterInput | null > | null,
  or?: Array< ModelSubscriptionWeightFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateWeightMutationVariables = {
  input: CreateWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type CreateWeightMutation = {
  createWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWeightMutationVariables = {
  input: UpdateWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type UpdateWeightMutation = {
  updateWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWeightMutationVariables = {
  input: DeleteWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type DeleteWeightMutation = {
  deleteWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWeightQueryVariables = {
  id: string,
};

export type GetWeightQuery = {
  getWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWeightsQueryVariables = {
  filter?: ModelWeightFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeightsQuery = {
  listWeights?:  {
    __typename: "ModelWeightConnection",
    items:  Array< {
      __typename: "Weight",
      id: string,
      date: string,
      weight: number,
      bmi: number,
      bodyFatPer: number,
      muscleMass: number,
      visceralFat: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateWeightSubscriptionVariables = {
  filter?: ModelSubscriptionWeightFilterInput | null,
  owner?: string | null,
};

export type OnCreateWeightSubscription = {
  onCreateWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWeightSubscriptionVariables = {
  filter?: ModelSubscriptionWeightFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWeightSubscription = {
  onUpdateWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWeightSubscriptionVariables = {
  filter?: ModelSubscriptionWeightFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWeightSubscription = {
  onDeleteWeight?:  {
    __typename: "Weight",
    id: string,
    date: string,
    weight: number,
    bmi: number,
    bodyFatPer: number,
    muscleMass: number,
    visceralFat: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
