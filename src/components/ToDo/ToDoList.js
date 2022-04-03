import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toggleComp, togglePri } from '../ApiManager';
import './todo.css'
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css"


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
    
    
    return (
        <>  
            <div id="tdlist">
                <div className= "todo-label">To-Do List</div>
            {
                toDoItems.map(
                    (toDoItem) => {
                        
                        return  <div >
                                    <div id="tdheader" key={`toDoItem--${toDoItem.id}`}>                                
                                    {toDoItem.userId === parseInt(localStorage.getItem("planner_user")) ?                       
                                    <><div className="todo" style={{ textDecoration: toDoItem.complete ? 'line-through' : 'none', }}>
                                        {toDoItem.priority ? "🔥" : ""} {toDoItem.task + "--" + toDoItem.category.description}
                                    </div>
                                        <Menu>
                                        <MenuButton className='actions'>Actions <span aria-hidden>▾</span></MenuButton>
                                            <MenuList className='slide-down'>
                                                <MenuItem className ='menu-highlight' onSelect={() => DeleteTask(toDoItem.id)}>delete</MenuItem>                                    
                                                <MenuItem className ='menu-highlight' onSelect={() => toggleComp(toDoItem) 
                                                    .then(() => {
                                                        return fetch("http://localhost:8088/toDoItems?_expand=category&_expand=description")
                                                    })
                                                    .then(res => res.json())
                                                    .then((data) => {
                                                    updateTasks(data)
                                                    })                                   
                                                    }>complete</MenuItem>
                                                <MenuItem className ='menu-highlight' onSelect={() => togglePri(toDoItem) 
                                                    .then(() => {
                                                        return fetch("http://localhost:8088/toDoItems?_expand=priority&_expand=category&_expand=description")
                                                        })
                                                    .then(res => res.json())
                                                    .then((data) => {
                                                    updateTasks(data)
                                                    })}>priority</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </> : ""}
                                    
                                    </div>
                                </div>
                                
                            
                    }
                )
            }
            </div>

        </>
    )

}
