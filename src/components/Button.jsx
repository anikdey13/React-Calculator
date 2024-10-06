import React from "react";
import "../App.css";

const Button = (props) => {
  const handleClick = (e) => {
    const numValue = e.target.getAttribute("data-num");
  
    if (props.operator === "C") {
      // Clear the input
      props.setNumValue("");
    } else if (props.operator === "=") {
      // Evaluate the expression
      try {
        props.setNumValue((prevValue) => eval(prevValue).toString());
      } catch (error) {
        props.setNumValue("Error");
      }
    } else {
      // For other buttons, append the value
      props.setNumValue((prevValue) => prevValue + numValue);
    }
  };
  
  return (
    <>
      <button
        type="button"
        className="btn btn-yellow"
        data-num={props.dataNum}
        onClick={handleClick}
      >
        {props.operator}
      </button>
    </>
  );
};

export default Button;
