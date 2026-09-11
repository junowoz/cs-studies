import { useState } from "react";

function UseStateHook() {
  //1 array é o state, e o segundo vai ser uma funcao que atualiza o state
  //o primeiro é o estado atual, e o segundo permite mudar o estado
  //ou seja, o count aqui é o estado
  const [count, setCount] = useState(0);

  //this is a function that is only run once, when the component is first rendered
  const [example, setExample] = useState(() => {
    console.log("run function");
  });

  function decrementCount() {
    setCount((count) => count - 1);
  }

  function incrementCount() {
    setCount((count) => count + 1);
  }

  ////////////////////////////////////////////////
  const [name, setName] = useState("");
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      <hr />

      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="digite seu nome"
      />

      <p>seu nome é {name}</p>

      <button
        onClick={() => {
          localStorage.setItem("name", name);
        }}
      />
      
      </ button>
    </>
  );
}

export default UseStateHook;
