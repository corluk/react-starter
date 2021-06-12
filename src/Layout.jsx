import React, {useState , useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Button , TextField } from "@material-ui/core"; 
import {useToggle } from "ahooks";
 
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  console.log(toggle);
  console.log(dir);
  return <>
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
     
     
 
  </>;}