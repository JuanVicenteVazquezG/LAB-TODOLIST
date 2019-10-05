import React from "react";
import Button from "./Button";

function Todo({ functionDelete, functionDone, todo }) {
  return (
    <div>
      {todo.map((thingsTodo, index) => {
        return (
          <div key={`${index}`}>
            <span>{thingsTodo.phrase}</span>
            <Button whatTodo={functionDelete} index={index}>
              Delete
            </Button>
            <Button whatTodo={functionDone} index={index}>
              Done
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;