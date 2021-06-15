import React, {useState , useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Button , TextField , NoSsr } from "@material-ui/core"; 
import {useToggle } from "ahooks";
import TopHeader from "./layouts/LayerTop";
import LeftMenu from "./components/leftmenu"
 
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: theme.palette.secondary.dark,
    padding: "10px"
  },
  gridItem: {
    backgroundColor: theme.palette.primary.light,
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

 

export default ()=>{
   const [dir, { toggle, setLeft, setRight } ] = useToggle( "horizontal", "vertical");
  const classes = useStyles();
const items = Array.from(Array(10).keys()).map( i => (<div key={i} className={classes.gridItem}>{i}</div>));

  console.log(toggle);
  console.log(dir);
  return <>
  
  <TopHeader>
      <div> This is a children </div>


  </TopHeader>
  </>;
  };
