import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    tasktodo: "",
    datetodo: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { whatTodo } = this.props;
    console.log(this.state.tasktodo, this.state.datetodo)
    whatTodo(this.state.tasktodo, this.state.datetodo);
  };

  render() {
    const { tasktodo, datetodo } = this.state;
    
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="tasktodo">Description Task</label>
          <input
            className=""
            type="text"
            name="tasktodo"
            id="tasktodo"
            value={tasktodo}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="">
          <label htmlFor="datetodo">Date Task</label>
          <input
            className=""
            type="text"
            name="datetodo"
            id="datetodo"
            value={datetodo}
            onChange={this.handleChange}
          ></input>
        </div>
        <button
          className="button"
          type="submit"
          children="Add TODO"
          value="submit"
        />
      </form>
    );
  }
}

export default AddTodo;
