import React from "react";
import { AppBar, Button } from "@material-ui/core";
import MyAppBar from "./MyAppBar";

const onClick = ()=>{

    console.log(`clicked`);
};

export default ()=>{

    return <>
    <MyAppBar />
</>;
};

