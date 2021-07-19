import React from 'react';

const headerStyle = {
  height: "4em", 
  borderRadius: "1em", 
  paddingTop: "0.8em",
  textAlign: "center",
  marginTop: "1.5em"
}
const InputHeader = () => {
  return (
    <div className="ui raised very padded text container segment" style={headerStyle}>
        <h1>Todo-list App</h1>
    </div>
  );
}
 
export default InputHeader;