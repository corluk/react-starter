import React, {useState , useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Button , TextField } from "@material-ui/core"; 
import {useToggle } from "ahooks";
import "./css/index.css";
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
  <div className={classes.gridContainer}>
    {items}
  </div>
    <div>

      <Button> Click Me! </Button>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      Hello World
    </div>
  </>;
  };
