
import React from 'react';
import { Route } from 'react-router-dom';
import { WelcomeTitle } from './Users/Welcome';
import { DayList } from './Day Components/DayItems';
import { MyClock } from './Day Components/Time';
import { CurrentWeek } from './Calendar/Calendar';
import { ToDoList } from './ToDo/ToDoList';
import { PriDropDown } from './Priority Components/PriorityItems';
import { PriorityForm } from './Priority Components/PriForm';
import { BrowserRouter } from 'react-router-dom';


//import { DayEvent } from './Calendar/DayNotes';



export const ApplicationViews = () => {
    return (
        <>
            <Route>
                <WelcomeTitle/>
            </Route>
            
            <Route>
                <MyClock/>
            </Route>

            <Route >
                <PriDropDown />
            </Route>

            <Route>
                <DayList />
            </Route>

            <Route>
                <CurrentWeek />
            </Route>

            <Route>
                <ToDoList />
            </Route>

            <Route path="/priorityItems/create">
                <PriorityForm />
            </Route>
        </>
    )
}

