import "./App.css";
import { Button } from "@/components/ui/button";
import { Amplify } from "aws-amplify";
import { config } from "../aws-exports";
import { generateClient } from "aws-amplify/api";
import { listTodos } from "@/graphql/queries";

const client = generateClient();

const test = async () => {
  const data = await client.graphql({
    query: listTodos,
  });
  return data;
};

Amplify.configure(config);

const App = () => {
  const clickButton = async () => {
    const data = await test();
    console.log(data);
  };

  return <Button onClick={clickButton}>test App</Button>;
};

export default App;
