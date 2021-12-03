import React from "react";

function InputBox(props) {
  return (
    <div>
      <input
        style={{ margin: 10 }}
        type="text"
        className="form-control"
        name={props.name}
        maxLength={props.length}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default InputBox;
