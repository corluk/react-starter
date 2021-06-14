import React, {useState , useRef} from "react";
import { Button, DatePicker, version } from "antd";
 
import {useToggle } from "ahooks";
 
 
export default ()=>{
   const [dir, { toggle, setLeft, setRight } ] = useToggle( "horizontal", "vertical");
  
  console.log(toggle);
  console.log(dir);
  return <>
    <div>
      <Button> Click Me! </Button>
      <DatePicker></DatePicker>
      Hello World 
    </div> 
     
     
 
  </>

  ;
};
