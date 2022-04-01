import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { PriorityForm } from "../Priority Components/PriForm"
import { NewToDo } from "../ToDo/AddToDo"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item active">
                <Link className="navbar__link_priority" to="/priorityItems/create"><PriorityForm/></Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link_todo" to="/toDoItems/create"><NewToDo/></Link>
            </li>

            <div><li className="navbar__item active">
                <Link className="navbar__link_logout" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("planner_user")
                    }
                }>
                    Logout
                </Link>
            </li></div>
        </ul>
    )
}