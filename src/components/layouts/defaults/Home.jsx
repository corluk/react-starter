import React from "react";
import Header from "./Header";
import Test from "./Test";
import {Route, Switch, Link } from "react-router-dom"; 
import PrivateComponent from "./Private";
import PublicComponent from "./Public";
import { ThemeProvider } from "@material-ui/core/styles";


const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export default ()=>{


    return <ThemeProvider theme={theme}>
        <div>
            <div>
                <Header />
            </div>
            <nav>
                <Link to="/private" >Private</Link>
                <Link to="/public" > Public </Link>
            </nav>
            <div>
                <Route path="/private" component={PrivateComponent} />
                <Route path="/public" component={PublicComponent} />
            </div>

        </div>
    </ThemeProvider>;

};
