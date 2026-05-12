import React from "react";
function Question() {
  function handleClick(number){
    console.log("clicked answer " + number)
  }
  return (
    <>
        <h1> QUESTION HERE </h1>
        <button onClick={() => handleClick(1)}> Answer 1</button>
        <button onClick={() => handleClick(2)}> Answer 2</button>
        <button onClick={() => handleClick(3)}> Answer 3</button>
        <button onClick={() => handleClick(4)}> Answer 4</button>
    </>
  );
}
export default Question;