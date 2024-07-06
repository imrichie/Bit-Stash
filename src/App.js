import React from "react";
import TopBar from "./components/TopBar";
import './styles/App.css'


function App() {
  return (
    <>
      <div className="App">
        <TopBar />
      </div>
      <main>
        <h1>Hello, World!</h1>
        <p>Welcome to Bit Stash, a simple way to manage your code snippets</p>
      </main>
    </>
  );
}

export default App;
