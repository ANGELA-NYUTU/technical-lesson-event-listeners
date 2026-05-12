import React from "react";
function Question() {
  function handleClick(number){
    console.log("clicked answer " + number)
  }
  return (
    <>
        <h1> Whats on your bucket list? </h1>
        <button onClick={() => handleClick(1)}> Learning how to code </button>
        <button onClick={() => handleClick(2)}> Travel to Maldives </button>
        <button onClick={() => handleClick(3)}> Adventure to New Zealand </button>
        <button onClick={() => handleClick(4)}> Relaxation and Wellness in Hawaii </button>
    </>
  );
}
export default Question;