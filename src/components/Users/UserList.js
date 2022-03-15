import React, { useEffect, useState } from "react"
import { getAllUsers } from "../ApiManager"

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [totalUserMessage, updateMessage] = useState("")

    useEffect(
        () => {
            console.log("Initial useEffect")
            getAllUsers()
                .then((data) => {
                    setUsers(data)
                })
        },
        []
    )

    useEffect(
        
        () => {
            console.log("Users state changed", users)
            if (users.lenth === 1) {
                updateMessage("You have 1 new user")

            }
            else {
                updateMessage(`You have ${users.length} users`)
            }
        },
        [users]
    )

    return (
        <>
            <div>{totalUserMessage}</div>
            {
                users.slice(0, 5).map(
                    (userObject) => {
                        return <p key={`user--${userObject.id}`}> {userObject.name}</p>
                    }
                )
            }
        </>
    )
}