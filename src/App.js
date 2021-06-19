import "./App.css";
import React from "react";

const App = () => {
  function inputHandler(e) {
    let data = e.target.value;
    localStorage.setItem("name", `${data}`);
  }

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          inputHandler(e);
        }}
      />
    </div>
  );
};

export default App;
