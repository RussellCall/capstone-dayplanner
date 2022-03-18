import React from 'react';
//import './index.css';
//import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom"

export const DayList = () => {
    const d = new Date();
    const weekdays = ["Sunday","Monday", "Tueday", "Wedneday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = weekdays[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <div className="Date">
            <h1 className="Date__day">{day}</h1>
            <h5 className="Date__full-date">{`${month} ${date}, ${year}`}</h5>
        </div>
    )
}
 