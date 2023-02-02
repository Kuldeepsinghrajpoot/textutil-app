import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const changeContentToUpperCase = () => {
    // console.log("fire" + text);
    let changeToUpperCase = text.toUpperCase();
    setText(changeToUpperCase);
    props.messageArgument("success", "Converted to the Upper Case");
  };

  const changeContentLowerCase = () => {
    // console.log("fire" + text);
    props.messageArgument("success", "Converted to the Lower Case");
    let changeToUpperCase = text.toLowerCase();
    setText(changeToUpperCase);
  };
  const clearText = () => {
    // console.log("fire" + text);
    let changeToUpperCase = "";
    setText(changeToUpperCase);
  };

  const Copyclip = () => {
    let copyVariable = document.getElementById("exampleFormControlTextarea1");
    copyVariable.select();
    navigator.clipboard.writeText(copyVariable.value);
    document.getSelection().removeAllRanges();
  };

  const HandleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const valueChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h4>{props.heading}</h4>
        <div className="form-group">
          <textarea
            className={`form-control`}
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={valueChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <br></br>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={changeContentToUpperCase}  disabled={text.length===0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={changeContentLowerCase}
          disabled={text.length===0}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}  disabled={text.length===0}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Copyclip}  disabled={text.length===0}>
          Clip Bord
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={HandleExtraSpace}  disabled={text.length===0}
        >
          Extra Space
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((elements) => { return elements.length !== 0;}).length
}{" "}
          text and {text.length} word{" "}
        </p>
        <h2>Preview</h2>
        <p>{text === "" ? "Enter the text here for preview" : text}</p>
      </div>
    </>
  );
}
