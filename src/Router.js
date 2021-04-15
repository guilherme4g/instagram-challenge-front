import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function Router() {   
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/privacy" exact component={PrivacyPolicy} />
        </BrowserRouter>
    )
}