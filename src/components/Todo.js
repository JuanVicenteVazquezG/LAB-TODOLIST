import React from "react";
import Button from "./Button";
import AddTodo from "./AddTodo";

function Todo({ deleteFunction, doneFunction, addFunction, todo }) {


  return (
    <div>
      <Button children="Add TO-DO" />
      <AddTodo whatTodo={addFunction}/>
      <ul>
        {todo.map((thingsTodo, index) => {
          return (
            <li>
              <div key={`${index}`}>
                <span>{thingsTodo.thingTodo}</span>
                <Button whatTodo={deleteFunction} index={index}>
                  Delete
                </Button>
                <Button whatTodo={doneFunction} index={index}>
                  Done
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
