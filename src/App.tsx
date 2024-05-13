import "./App.css";
import { Button } from "@/components/ui/button";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";
import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";

Amplify.configure(outputs);
const client = generateClient<Schema>();

const App = () => {
  const [data, setData] = useState<Schema["Todo"]["type"][]>();
  const [taskName, setTaskName] = useState<string>("");

  const newTodo = async (taskName: string) => {
    if (!taskName) return;
    setTaskName("");

    await client.models.Todo.create({
      name: taskName,
      when: "night",
      where: "japan",
      description: "テストタスク",
    });
  };

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setData([...items]);
      },
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <div className="mb-12">
        <Input value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <Button onClick={() => newTodo(taskName)}>create Todo</Button>
      </div>

      <h1 className="text-3xl bold mb-6">タスク一覧</h1>

      {data && data.map((item) => <div key={item?.id}>{item?.name}</div>)}
    </>
  );
};

export default App;
