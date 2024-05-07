import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

type EagerTodoModel = {
  readonly description?: string | null;
  readonly id?: string | null;
  readonly name?: string | null;
  readonly when?: string | null;
  readonly where?: string | null;
};

type LazyTodoModel = {
  readonly description?: string | null;
  readonly id?: string | null;
  readonly name?: string | null;
  readonly when?: string | null;
  readonly where?: string | null;
};

export declare type TodoModel = LazyLoading extends LazyLoadingDisabled
  ? EagerTodoModel
  : LazyTodoModel;

export declare const TodoModel: new (init: ModelInit<TodoModel>) => TodoModel;

type EagerTodoConnectionModel = {
  readonly items?: (Todo | null)[] | null;
  readonly nextToken?: string | null;
};

type LazyTodoConnectionModel = {
  readonly items?: (Todo | null)[] | null;
  readonly nextToken?: string | null;
};

export declare type TodoConnectionModel =
  LazyLoading extends LazyLoadingDisabled
    ? EagerTodoConnectionModel
    : LazyTodoConnectionModel;

export declare const TodoConnectionModel: new (
  init: ModelInit<TodoConnectionModel>
) => TodoConnectionModel;

const { Todo, TodoConnection } = initSchema(schema) as {
  Todo: PersistentModelConstructor<TodoModel>;
  TodoConnection: PersistentModelConstructor<TodoConnectionModel>;
};

export {};
