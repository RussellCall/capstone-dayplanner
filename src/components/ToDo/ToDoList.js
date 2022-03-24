import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import { NewToDo } from './AddToDo';
import { toggleChecked } from '../ApiManager';


export const ToDoList = () => {
    
    const history = useHistory()
const [toDoItems, updateTasks] = useState([])



    useEffect(
        () => {
            fetch("http://localhost:8088/toDoItems?_expand=category&_expand=description")
                .then(res => res.json())
                .then((data) => {
                    updateTasks(data)
                })

        },
        []
    )



    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/toDoItems/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {
            history.push("/todoItems")        
        })  
    }

    
/*
    return fetch("http://localhost:8088/toDoItems?_expand=category&_expand=description")
            .then(res => res.json())
            .then((data) => {
            updateTasks(data)

    const toggleChecked = () => {
        ("http://localhost:8088/toDoItems?_expand=complete")
        let toDoItem = !toDoItem.complete
        return toDoItem
    }*/
    
    
    return (
        <>
            <section>
            {
                toDoItems.map(
                    (toDoItem) => {
                        
                        return  <div key={`toDoItem--${toDoItem.id}`}> 
                                {toDoItem.userId === parseInt(localStorage.getItem("planner_user")) ?                       
                                <><p className="todo" style={{ textDecoration: toDoItem.complete ? 'line-through' : 'none', }}>
                                    {toDoItem.priority ? "❗" : ""} {toDoItem.task} {toDoItem.category.description}
                                </p><button className='delete' onClick={() => DeleteTask(toDoItem.id)}>Delete</button><label htmlFor="name">complete</label>
                                <input
                                type="checkbox"
                                onChange={() => toggleChecked(toDoItem) 
                                    .then(() => {
                                        return fetch("http://localhost:8088/toDoItems?_expand=category&_expand=description")
                                    })
                                    .then(res => res.json())
                                    .then((data) => {
                                    updateTasks(data)
                                    })                                   
                                    }
                                /></> : ""}                             
                                </div>
                            
                    }
                )
            }
            </section>
            <section>
                <div>
                    <NewToDo />
                </div>

            </section>
        </>
    )

}

