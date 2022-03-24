import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

export const HighlightsForm1 = () => {
    const [dayItems1, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems1?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems1.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems1", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems1")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems1}
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
}

export const HighlightsForm2 = () => {
    const [dayItems2, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems2?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems2.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems2", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems2")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems2}
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
    
}

export const HighlightsForm3 = () => {
    const [dayItems3, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems3?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems3.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems3", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems3")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems3}
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
    
}

export const HighlightsForm4 = () => {
    const [dayItems4, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems4?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems4.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems4", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems4")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems4}
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
    
}

export const HighlightsForm5 = () => {
    const [dayItems5, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems5?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems5.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems5", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems5")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems5}
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
    
}

export const HighlightsForm6 = () => {
    const [dayItems6, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems6?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems6.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems6", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems6")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems6}
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
    
}

export const HighlightsForm7 = () => {
    const [dayItems7, updateNote] = useState({
        highlightNotes: "",
    });    
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/dayItems7?_expand=highlightNotes")
                .then(res => res.json())
                .then((data) => {
                    updateNote(data)
                })
        },
        []
    )
    const saveNote = (event) => {
        event.preventDefault()
        const newNote = {
            highlightNotes: dayItems7.highlightNotes,
            userId: parseInt(localStorage.getItem("planner_user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }
        return fetch("http://localhost:8088/dayItems7", fetchOption)
            .then(res => res.json()) 
            .then(() => {
                window.location.reload(true)
            })
            .then(() => {
                history.push("/dayItems7")
            })
    }
    return <form className="dayForm">
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (event) => {
                                const copy = {...dayItems7}
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
    
}