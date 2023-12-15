import React, {useState} from "react";

function Toggle() {
  const [isOn, setOn]= useState(true)
  console.log(isOn)
  
  return <button style= {{background: isOn? "red" :"white"}} onClick={handleClick}>{isOn? "ON" : "OFF"}</button>;

  function handleClick(){
    setOn((isOn)=> !isOn);
  }
}

export default Toggle;
