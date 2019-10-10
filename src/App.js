import React, { Component } from "react";
import "./App.css";
import { min, securePass } from "./helpers";
import Users from "./data/users";

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
    passwordView: "password",
    buttonPasswordisabled: false,
    visibleLogin: true,
    visibleButtonTodo: true,
    users: [...Users],
    todo: [],
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
    console.log( users.filter(user => {
        return user.username === username;
      }).password);
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
      console.log('all is correct')
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

  // handlerDoneTodo = () => {
  //   console.log('y llego hasta aqui')
  //   const { todo } = this.state;
  //   const phrase = faker.lorem.sentence(5);
  //   console.log("hello", phrase);
  //   const newTodo = [...todo, [phrase, true]];
  //   this.setState = { todo: newTodo };
  // };

  render() {
    const {
      values: { username, password },
      errors: { username: errorUsername, password: errorPassword },
      passwordView,
      buttonPasswordisabled,
      visibleLogin,
      visibleButtonTodo
    } = this.state;

    return (
      <div className="App">
        {this.state.todo}
        <header className="App-header">
          <h1>TO-DO LIST</h1>
          <p className={this.state.errorUser && "error"}>
            {this.state.errorMessage}
          </p>
          {visibleLogin && (
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
            </form>
          )}

          {visibleButtonTodo && (
            <>
              {/* <Button whatTodo={this.handlerAddClick}>Add To-do</Button> */}
              <br />

              <div>
                {/* <Todo
                  functionDelete={this.handlerDeleteTodo}
                  functionDone={this.handlerDoneTodo}
                  todo={this.state.todo}
                ></Todo> */}
              </div>
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
