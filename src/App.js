import React, { Component } from "react";
import "./App.css";
import { min, securePass } from "./helpers";
import Users from "./data/users";
import Button from "./components/Button";
import Todo from "./components/Todo";
import todo from "./data/todo.json";

const validations = {
  username: min,
  password: securePass
};

class App extends Component {
  state = {
    values: {
      username: "",
      password: ""
    },
    errors: {
      /*Control error*/
      username: false,
      password: false
    },
    // passwordView: "password",
    // buttonPasswordisabled: false,
    // visibleLogin: true,
    visibleButtonTodo: true,
    users: [...Users],
    todo: [...todo],
    errorUser: false,
    errorMessage: ""
  };

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: !validations[e.target.name](e.target.value)
      }
    });
  };

  verifyLoginNPassword() {
    const {
      values: { username, password },
      users
    } = this.state;
    console.log(
      users.filter(user => {
        return user.username === username;
      }).password
    );
    return false;
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.verifyLoginNPassword()) {
      console.log("login or password are not correct");
      this.setState({
        errorUser: true,
        errorMessage: "User name or password are no correct"
      });
    } else {
      console.log("all is correct");
      this.setState({
        visibleLogin: !this.visibleLogin,
        visibleButtonTodo: !this.visibleButtonTodo
      });
    }
  };

  handlePasswordView = () => {
    this.setState({ passwordView: "text", buttonPasswordisabled: true });
    const controlPasswordView = setTimeout(() => {
      this.setState({ passwordView: "password", buttonPasswordisabled: false });
      clearTimeout(controlPasswordView);
    }, 3000);
  };

  handleDeleteTask = () => {};

  handleAddTask = (tasktodo, datetodo) => {
    todo.push({"thingTodo":tasktodo,
    "data": datetodo});
  };

  handleDoneTask = () => {};

  render() {
    const {
      values: { username, password },
      errors: { username: errorUsername, password: errorPassword }
      // passwordView,
      // buttonPasswordisabled,
      // visibleLogin
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>TO-DO LIST</h1>
          {/* <p className={this.state.errorUser && "error"}>
            {this.state.errorMessage}
          </p>
       
            <form className="wrapper" onSubmit={this.handleSubmit}>
              <div className="form-wrapper">
                <label htmlFor="username">User name</label>
                <input
                  className={errorUsername && "error"}
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  className={errorPassword && "error"}
                  type={passwordView}
                  name="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                ></input>
              </div>
              <button
                className="button"
                type="submit"
                children="Login"
                value="submit"
              />
              <button
                title="Pasword reveal only 3 seconds"
                disabled={buttonPasswordisabled}
                onClick={this.handlePasswordView}
              >
                👁
              </button>
            </form> */}
          <Todo
            todo={this.state.todo}
            deleteFunction={this.handleDeleteTask}
            addFunction={this.handleAddTask}
            doneFunction={this.handleDoneTask}
          />
          
        </header>
      </div>
    );
  }
}

export default App;
