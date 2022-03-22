import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import { NewToDo } from './AddToDo';



 

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
            history.push("/toDoItems")        
        })    
    }

    
    return (
        <>
            <section>
            {
                toDoItems.map(
                    (toDoItem) => {
                        return <div key={`toDoItem--${toDoItem.id}`}>
                                <label htmlFor="name">To Do List</label>                           
                                <p>{toDoItem.priority ? "❗" : ""} {toDoItem.task} {toDoItem.category.description} </p>
                                <button className='delete' onClick={() => {
                                DeleteTask(toDoItem.id)
                                }}>Delete</button>                                
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


  

                                
                                
