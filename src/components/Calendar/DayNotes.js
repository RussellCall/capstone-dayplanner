import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const HighlightsForm = () => {
    const [dayItems, updateNote] = useState({
        highlightNotes: "",
    });
    
    const history = useHistory()

    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }

        return fetch("http://localhost:8088/dayItems", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                history.push("/dayItems")
            })
    }

    return (
        <form className="dayForm">
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="highlightNotes">Description:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems}
                                copy.highlightNotes = event.target.value
                                updateNote(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="highlightNotes"
                        className="form-control"
                        placeholder="Brief Note"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveNote}>
                Save
            </button>
        </form>
    )
}