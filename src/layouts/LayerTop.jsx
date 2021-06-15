import React from "react"; 
import {makeStyles} from "@material-ui/core/styles";
import { Input , TextField  } from "@material-ui/core"
import red from "@material-ui/core/colors/red"
import blue from "@material-ui/core/colors/blue"
import clsx from "clsx"
const useStyles = makeStyles(theme =>({

    root : {
        zIndex: 5000,
        backgroundColor :red[100]
    },
    header : props => ({
        position: "absolute",
        width : "100%",
        height: props.height,
        top : 0,
        left :0,
        backgroundColor: blue[200],
        
    }),
    container : props =>({
        display : "flex", 
        flexDirection: "row",
        flexWrap : "nowrap",
        justifyContent: "spacebetween",
        alignItems: "center",
        height:"100%", 
        width : "95%"
        
    }),
    left : props =>({
        flexGrow:1
    }),
    middle : props =>({
        flexGrow:4
    }),
    rigth : props =>({
        flexGrow:1
    })
}))




export default (props)=>{


    const handleChange = (event)=>{

        console.log(event.target);
    }
    const classes = useStyles({height:"100px"})
    console.log(classes);
    return (<div className={classes.header}> 
    
            <div className={classes.container}> 
                <div className={classes.left}> LEFT </div>

                <div className={classes.middle}> 
                    <TextField InputLabelProps={{
            shrink: true,
          }}  onChange={handleChange}/>
                 </div>
            <div className={classes.rigth}> RIGHT </div>
        </div>
    
    </div>)
}