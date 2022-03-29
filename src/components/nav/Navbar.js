import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { PriorityForm } from "../Priority Components/PriForm"
import { NewToDo } from "../ToDo/AddToDo"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/priorityItems/create"><PriorityForm/></Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/toDoItems/create"><NewToDo/></Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("planner_user")
                    }
                }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}