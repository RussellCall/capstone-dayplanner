import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/Navbar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const DayPlanner = () => (
    <>
    <Route
        render={() => {
        if (localStorage.getItem("planner_user")) {
            return (
            <>
                <NavBar />
                <ApplicationViews />
            </>
            );
        } else {
            return <Redirect to="/login" />;
        }
        }}
    />

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/register">
        <Register />
    </Route>
    </>
);