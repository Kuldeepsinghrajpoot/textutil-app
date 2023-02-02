import React from "react";

export default function Alert(props) {
  const letter = (word) => {
    let first_UpperCase = word.toLowerCase();
    return first_UpperCase.charAt(0).toUpperCase() + first_UpperCase.slice(1);
  };
  return (
    <div  style={{height:"50px"}}>
    {props.alert && 
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{letter(props.alert.type)}:</strong>
          {props.alert.Msg}
        </div>
      </div>}
      </div>
  );
}
