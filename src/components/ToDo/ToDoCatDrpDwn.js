import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const CatDropDown = () => {
    const [toDoItem, assignCats] = useState({})  // State variable for current ticket object
      // State variable for array of catagories
    const { toDoId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    // Fetch the individual ticket when the parameter value changes
    useEffect(
        () => {
            return fetch(`http://localhost:8088/toDoItems/${toDoId}?_expand=category`)
                .then(response => response.json())
                .then((data) => {
                    assignCats(data)
                })

        },
        [ toDoId ]  // Above function runs when the value of ticketId change
    )

    // Fetch all employees


    // Function to invoke when an employee is chosen from <select> element
    const AssignCategories = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedToDo = {
            customerId: parseInt(localStorage.getItem("planner_user")),
            categoryId: parseInt(evt.target.value),
            task: toDoItem.task,
            priority: toDoItem.emergency,
            complete: toDoItem.complete
        }

        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/toDoItems/${toDoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedToDo)
        })
            .then(() => {
                history.push("/toDoItems")
            })
    }

    return (
        <>
            <section className="todo_list">                
                <div className="todo__category">Category
                    <select
                        value={ toDoItem.categoryId }
                        onChange={ AssignCategories }>
                        {
                            categories.map(c => <option key={`category--${c.id}`} value={c.id}>{c.description}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}