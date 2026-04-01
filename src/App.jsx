import React, { useState } from "react";

function App() {

  // State for text change
  const [message, setMessage] = useState("Please click the button");

  // 1. Normal function
  function handleClick() {
    alert("Button clicked successfully!");
  }

  // 2. Change text
  function changeText() {
    setMessage("Text Changed Successfully!");
  }

  // 3. Arrow function with argument
  const showMessage = (name) => {
    alert("Hello " + name);
  };

  // 4. Multiple arguments function
  function add(a, b) {
    alert("Sum = " + (a + b));
  }

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>React Button Click Examples</h1>

      {/* 1. Simple Click */}
      <h2>1. Simple Button Click</h2>
      <button onClick={handleClick}>Click Me</button>

      <hr />

      {/* 2. Text Change */}
      <h2>2. Text Change using useState</h2>
      <p>{message}</p>
      <button onClick={changeText}>Change Text</button>

      <hr />

      {/* 3. Arrow Function */}
      <h2>3. Arrow Function</h2>
      <button onClick={() => alert("Hello from Arrow Function")}>
        Click Me
      </button>

      <hr />

      {/* 4. Arrow Function with Argument */}
      <h2>4. Arrow Function with Argument</h2>
      <button onClick={() => showMessage("Amna")}>
        Click Me
      </button>

      <hr />

      {/* 5. Multiple Arguments */}
      <h2>5. Multiple Arguments</h2>
      <button onClick={() => add(5, 3)}>Add 5 + 3</button>
      <button onClick={() => add(10, 7)} style={{ marginLeft: "10px" }}>
        Add 10 + 7
      </button>

    </div>
  );
}

export default App;