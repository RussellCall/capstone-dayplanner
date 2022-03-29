import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const getAllUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(res => res.json())
}


export const toggleChecked = (toDoItem) => {
    
    const fetchOption = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ complete: !toDoItem.complete })
    }
    
    return fetch(`http://localhost:8088/toDoItems/${toDoItem.id}`, fetchOption)

}


export const DayOneList = () => {
    const [dayItemsOne, setDayOne] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems1?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDayOne(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems1/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems1")        
        })    
    }

    return (
        <>
            {
                dayItemsOne.map(
                    (dayItemOne) => {
                        return <>
                        {dayItemOne.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemOne.id}`}>{dayItemOne.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemOne.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}


export const DayTwoList = () => {
    const [dayItemsTwo, setDayTwo] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems2?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDayTwo(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems2/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems2")        
        })    
    }

    return (
        <>
            {
                dayItemsTwo.map(
                    (dayItemTwo) => {
                        return <>
                        {dayItemTwo.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemTwo.id}`}>{dayItemTwo.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemTwo.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}


export const DayThreeList = () => {
    const [dayItemsThree, setDayThree] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems3?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDayThree(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems3/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems3")        
        })    
    }

    return (
        <>
            {
                dayItemsThree.map(
                    (dayItemThree) => {
                        return <>
                        {dayItemThree.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemThree.id}`}>{dayItemThree.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemThree.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}

export const DayFourList = () => {
    const [dayItemsFour, setDayFour] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems4?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDayFour(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems4/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems4")        
        })    
    }

    return (
        <>
            {
                dayItemsFour.map(
                    (dayItemFour) => {
                        return <>
                        {dayItemFour.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemFour.id}`}>{dayItemFour.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemFour.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}


export const DayFiveList = () => {
    const [dayItemsFive, setDayFive] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems5?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDayFive(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems5/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems5")        
        })    
    }

    return (
        <>
            {
                dayItemsFive.map(
                    (dayItemFive) => {
                        return <>
                        {dayItemFive.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemFive.id}`}>{dayItemFive.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemFive.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}


export const DaySixList = () => {
    const [dayItemsSix, setDaySix] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems6?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDaySix(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems6/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems6")        
        })    
    }

    return (
        <>
            {
                dayItemsSix.map(
                    (dayItemSix) => {
                        return <>
                        {dayItemSix.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemSix.id}`}>{dayItemSix.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemSix.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}

export const DaySevenList = () => {
    const [dayItemsSeven, setDaySeven] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/dayItems7?_expand=highlightNotes")
            .then(res => res.json())
                .then((data) => {
                    setDaySeven(data)
                })
        },
        []
    )
    const DeleteTask = (id) => {
        fetch(`http://localhost:8088/dayItems7/${id}`, {
            method: "DELETE"
            //.get to refresh data
        })
        .then(() => {
            window.location.reload(true)
        })
        .then(() => {            
            history.push("/dayItems7")        
        })    
    }

    return (
        <>
            {
                dayItemsSeven.map(
                    (dayItemSeven) => {
                        return <>
                        {dayItemSeven.userId === parseInt(localStorage.getItem("planner_user")) ?
                        <><p key={`dayItem--${dayItemSeven.id}`}>{dayItemSeven.highlightNotes}</p><button className='delete' onClick={() => {
                                    DeleteTask(dayItemSeven.id)
                                } }>Delete
                                </button></> : ""}
                        </>
                    }
                )
            }
        </>
    )
}

