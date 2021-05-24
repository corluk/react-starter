import React from "react";
import Header from "./Header";
import Test from "./Test";
import {Route, Switch, Link } from "react-router-dom"; 
import PrivateComponent from "./Private";
import PublicComponent from "./Public";
export default ()=>{


    return <>
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
    </>;

};
