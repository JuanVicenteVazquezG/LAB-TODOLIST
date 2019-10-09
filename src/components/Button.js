import React from "react";

function Button({ children, whatTodo, index }) {
  console.log(whatTodo);
  return (
    <button
      className="App-button"
      onClick={() => {
        whatTodo();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
