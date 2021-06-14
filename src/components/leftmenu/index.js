import React from "react";
import { Hidden, Typography, IconButton as Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import "./style.css";
const useStyles = makeStyles(theme =>({

    container: {
        position: "fixed",
        width: "calc(100%-90%)",
        backgroundColor: theme.palette.secondary.main
    }

}));


const iconView = ( <> <Button icon={AccessAlarm}> </Button> </>);
const iconAndText = ( <>   <Button icon={AccessAlarm}> <Typography container="span"> Access Alarm </Typography> </Button>  </>);
export default ()=>{

    const classes = useStyles();
   return ( <div className={classes.container}>

        <Hidden only={["lg", "md", "xl", "sm"]} implementation='css'>
            {iconView}
        </Hidden>
        <Hidden only={["xs"]} implementation='css'>

            {iconAndText}
        </Hidden>



    </div>);

};
