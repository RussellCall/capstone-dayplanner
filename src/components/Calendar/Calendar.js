import React from 'react';
import { DaySixList, DaySevenList, DayOneList, DayTwoList, DayThreeList, DayFourList, DayFiveList } from '../ApiManager';
import './calendar.css'
import { HighlightsForm1, HighlightsForm2, HighlightsForm3, HighlightsForm4, HighlightsForm5, HighlightsForm6, HighlightsForm7 } from './DayNotes';
import { MyClock } from '../Day Components/Time';
import { PriDropDown } from '../Priority Components/PriorityItems';
import { WelcomeTitle } from '../Users/Welcome';
import { DayList } from '../Day Components/DayDisplay';
import { ToDoList } from '../ToDo/ToDoList';
import { PriorityForm } from '../Priority Components/PriForm';
import { Route } from 'react-router-dom';



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
            <div><DayOneList /></div> 
            <div className='notes'><HighlightsForm1 /></div>
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
            </div>
            <div><DayTwoList /></div>
            <div className='notes'><HighlightsForm2 /></div>
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
            </div>
            <div><DayThreeList /></div>
            <div className='notes'><HighlightsForm3 /></div>
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
            </div>
            <div><DayFourList /></div>
            <div className='notes'><HighlightsForm4 /></div>
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
            </div>
            <div><DayFiveList/></div>
            <div className='notes'><HighlightsForm5/></div>
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
            </div>
            <div><DaySixList /></div>
            <div className='notes'><HighlightsForm6 /></div>
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
            </div>
            <div><DaySevenList/></div>
            <div className='notes'><HighlightsForm7/></div>
        </>
    )
    
}

return (
    <>
        <div><WelcomeTitle /></div>
        <div><DayList /></div>
        <div><MyClock /></div>
        <div className='dropdown'><PriDropDown /></div>
        <div className='flex_container'>
            <div className='weekflex'>
                <h1 className='week_label'>Current Week</h1>
                <h3 className="week_day">{Today()}</h3>
                <h3 className="week_day">{TodayPlus1()}</h3>
                <h3 className="week_day">{TodayPlus2()}</h3>
                <h3 className="week_day">{TodayPlus3()}</h3>
                <h3 className="week_day">{TodayPlus4()}</h3>
                <h3 className="week_day">{TodayPlus5()}</h3>
                <h3 className="week_day">{TodayPlus6()}</h3>
            </div>
            <div draggable="true" className= 'todoflex'>
                <h3 className='todoCard'><ToDoList /></h3>
            </div>
        </div>
        <div>
        <Route path="/priorityItems/create">
                <PriorityForm />
        </Route>
        </div>

    </>
)

}

