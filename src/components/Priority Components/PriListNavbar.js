import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const PriNavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/priorityItems/create">Manage Priority List</Link>
            </li>
        </ul>
    )
}