import React, { useEffect, useState } from "react"
import './welcome.css'

export const WelcomeTitle = () => {
    const [user, set] = useState({})  // State variable for current user object
    //const { userId } = useParams()  // Variable storing the route parameter
    const loginName = 
        localStorage.getItem("planner_user")
    
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${loginName}`)
                .then(res => res.json())
                .then(set)
        },
        [ user.name]  // Above function runs when the value of userId change
    )

    return (
            <div className= "welcome"><span class="text">Welcome, {user.name}!</span></div>
    )
}

