import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Work hard at Office !!",
        completed: false
      },
      {
        id: 2,
        title: "Work hard at Home !!",
        completed: false
      },
      {
        id: 3,
        title: "Enjoy ONLY after !!",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
