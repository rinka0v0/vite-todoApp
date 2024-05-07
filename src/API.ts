/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type Todo = {
  __typename: "Todo",
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type TableTodoFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  when?: TableStringFilterInput | null,
  where?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
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
  size?: ModelSizeInput | null,
};

export type TodoConnection = {
  __typename: "TodoConnection",
  items?:  Array<Todo | null > | null,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: TableTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "TodoConnection",
    items?:  Array< {
      __typename: "Todo",
      id?: string | null,
      name?: string | null,
      when?: string | null,
      where?: string | null,
      description?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
  description?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id?: string | null,
    name?: string | null,
    when?: string | null,
    where?: string | null,
    description?: string | null,
  } | null,
};
