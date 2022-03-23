import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import './todo.css'


//import { CatDropDown } from "./ToDoCatDrpDwn";



export const NewToDo = () => {
    const [categories, syncCat] = useState([])
    const [toDoItem, updateTask] = useState({
        task: "",
        priority: false,
        complete: false,
        categoryId: 1
    });
    
    const history = useHistory()

    const SaveToDo = (event) => {
        event.preventDefault()
        const newToDo = {
            task: toDoItem.task,
            priority: toDoItem.priority,
            complete: toDoItem.complete,
            userId: parseInt(localStorage.getItem("planner_user")),
            categoryId: toDoItem.categoryId
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newToDo)
        }
        
        return fetch("http://localhost:8088/toDoItems", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
                window.localStorage.getItem(toDoItem)
                history.push("/toDoItems")
            })

            

    }
    useEffect(
        () => {           
        fetch("http://localhost:8088/categories")
                .then(res => res.json())
                .then((data) => {
                    syncCat(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering
    )


    
    return (
        <form className="toDoForm">
            <h2 className="toDoForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Task:</label>
                    <input 
                        onChange={
                            (event) => {
                                const copy = {...toDoItem}
                                copy.task = event.target.value
                                updateTask(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="description"
                        className="form-control"
                        placeholder="Brief description of task"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Priority:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...toDoItem}
                                copy.priority = event.target.checked
                                updateTask(copy)
                            }
                        } />
                        
                </div>
                <div>
                <section className="todo_list">                
                <div className="todo__category">Category
                    <select
                        value={ toDoItem.categoryId }
                        defaultValue={"0"}
                        onChange={
                            (event) => {
                                const copy = {...toDoItem}
                                copy.categoryId = parseInt(event.target.value)
                                debugger
                                updateTask(copy)
                            }
                        }>
                        
                        <option value="0">Select Category</option>
                        {
                            categories.map(c => <option key={`category--${c.id}`} value={c.id}>{c.description}</option>) 
                            
                        }
                    </select>
                </div>
            </section>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={SaveToDo}>
                Submit
            </button>
        </form>
    )
}

