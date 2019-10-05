import React, { Component } from "react";
import "./App.css";
import faker from "faker";
import Button from "./components/Button";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todo: []
  };

  handlerAddClick = () => {
    const { todo } = this.state;
    const phrase = faker.company.catchPhrase.toString();
    const newTodo = [...todo, [phrase, true]];
    this.setState = { todo: newTodo };
  };

  handlerDeleteTodo = () => {};

  handlerDoneTodo = () => {};

  render() {
    return (
      <div className="App">
        {this.state.todo}
        <header className="App-header">
          <h1>TO-DO LIST</h1>
          <Button whatTodo={this.handlerAddClick}>Add To-do</Button>
          <br />
          <div>
            <Todo
              functionDelete={this.handlerDeleteTodo}
              functionDone={this.handlerDoneTodo}
              todo={this.state.todo}
            ></Todo>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
