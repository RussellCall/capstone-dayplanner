import React from 'react';

import './calendar.css'
import { HighlightsForm } from './DayNotes';

export const CurrentWeek = () => {
const Today = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
                
            </div>
            <div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus1 = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay() + 1];
    const date = (d.getDate() + 1);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus2 = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay() + 2];
    const date = (d.getDate() + 2);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus3 = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay() + 3];
    const date = (d.getDate() + 3);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus4 = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay() + 4];
    const date = (d.getDate() + 4);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus5 = () => {
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay() + 5];
    const date = (d.getDate() + 5);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
}

const TodayPlus6 = () => {
    
    const d = new Date();
    const weekdays = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = weekdays[d.getDay()+6];
    const date = (d.getDate() + 6);
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <>
            <div className="Date">
                <h5 className="Date__full-date">{`${month} ${day}, ${date}`}</h5>
            </div><div><HighlightsForm /></div>
        </>
    )
    
}

return (
    <>
        
        <h1>Current Week</h1>
            <h3 className="week_day">{Today()}</h3>
            <h3 className="week_day">{TodayPlus1()}</h3>
            <h3 className="week_day">{TodayPlus2()}</h3>
            <h3 className="week_day">{TodayPlus3()}</h3>
            <h3 className="week_day">{TodayPlus4()}</h3>
            <h3 className="week_day">{TodayPlus5()}</h3>
            <h3 className="week_day">{TodayPlus6()}</h3>
    </>
)

}

