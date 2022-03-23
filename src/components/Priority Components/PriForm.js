import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const PriList = () => {
    const [priorityItems, updatePri] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/priorityItems?_expand=task")
                .then(res => res.json())
                .then((data) => {
                    updatePri(data)
                })

        },
        []
    )

    
const history = useHistory()

const deletePri = (id) => {
    fetch(`http://localhost:8088/priorityItems/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        window.location.reload(true)
    })
    .then(() => {
        history.push("/priorityItems")        
    })    
}

    return (
        <>
            {
                priorityItems.map(
                    (pri) => {
                        return <div key={`priorityItems--${pri.id}`}>
                                
                                <p className={`priorityItem`}>{pri.task}</p>
                                <button onClick={() => {
                                    deletePri(pri.id)
                                    }}>Delete</button>
                                
                            </div>
                            
                    }
                )
            }
        </>
    )
}


export const PriorityForm = () => {
    const [priorityItems, updatePriority] = useState({
        task: "",
    });
    
    const history = useHistory()

    const savePriority = (event) => {
        event.preventDefault()
        const newPriority = {
            task: priorityItems.task,
            userId: parseInt(localStorage.getItem("planner_user")),
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPriority)
        }

        return fetch("http://localhost:8088/priorityItems", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                history.push("/priorityItems")
            })
    }

    return (


        <form className="priorityForm">            
            <h2 className="priorityForm__title">Add To Priority List</h2>
            <fieldset>
                <div className="form-group">
                <h2><PriList /></h2>
                    <label htmlFor="task">Task:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...priorityItems}
                                copy.task = event.target.value
                                updatePriority(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="task"
                        className="form-control"
                        placeholder="Brief description of task"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={savePriority}>
                Save
            </button>
        </form>
    )
}