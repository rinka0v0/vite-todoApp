/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $id: ID
  $name: String
  $when: String
  $where: String
  $description: String
) {
  onCreateTodo(
    id: $id
    name: $name
    when: $when
    where: $where
    description: $description
  ) {
    id
    name
    when
    where
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $id: ID
  $name: String
  $when: String
  $where: String
  $description: String
) {
  onUpdateTodo(
    id: $id
    name: $name
    when: $when
    where: $where
    description: $description
  ) {
    id
    name
    when
    where
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $id: ID
  $name: String
  $when: String
  $where: String
  $description: String
) {
  onDeleteTodo(
    id: $id
    name: $name
    when: $when
    where: $where
    description: $description
  ) {
    id
    name
    when
    where
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
