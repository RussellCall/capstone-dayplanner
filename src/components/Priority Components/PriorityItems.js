
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";




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
   
        return <div className="drop-down">
                <p>Top Priorities</p>
                <select>
                {
                    priorityItems.map((obj) => {
                        return<>
                        <option value={obj.id}>{obj.task}
                        </option>
                        </>
                    })
                }
                </select>
            </div>;
    
}

