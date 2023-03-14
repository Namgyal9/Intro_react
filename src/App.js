import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <Header setCount={setCount} />
      <Counter count={count} />
    </div>
  );
}

export default App;
