import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

export default function Router() {   
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
        </BrowserRouter>
    )
}