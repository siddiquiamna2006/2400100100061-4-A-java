<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
>>>>>>> d7760d25c6e20ca855b2c442247159dd9043a019
