
import React, { useState, useEffect } from "react"
import './priority.css'


export const PriDropDown = () => {
    const [priorityItems, updatePri] = useState([])

    useEffect(
        () => {
       fetch('http://localhost:8088/priorityItems')
       .then(res => res.json())
       .then((data) => {
        updatePri(data)
    })
        },
        []
    )
   
        return <div href="#" className="drop-down" key="priority-dropdown">
                <p className="priorityTitle">Top Priorities</p>
                
                <select className="dd-pributton">
                {
                    priorityItems.map((obj) => {
                        return<>
                        {obj.userId === parseInt(localStorage.getItem("planner_user")) ? <option className="dd-display" key={obj.id}>{obj.task}
                        </option> : ""}
                        </>
                    })
                }
                </select>
                </div>;
    
}

