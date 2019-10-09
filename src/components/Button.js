import React from "react";


function Button({ children, whatTodo, index }) {
  
  return (
    <button
      className="App-button"
      onClick={()=>{console.log(typeof (whatTodo))}}
    >
      {children}
    </button>
  );
}

export default Button;
