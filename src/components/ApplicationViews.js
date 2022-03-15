
import React from 'react';
import { Route } from 'react-router-dom';
import { WelcomeTitle } from './Users/Welcome';
import { DayList } from './Day Components/DayItems';
import { MyClock } from './Day Components/Time';
import Calendar from './Calender/Calender';



export const ApplicationViews = () => {
    return (
        <>
            <Route>
                <WelcomeTitle/>
            </Route>
            
            <Route>
                <MyClock/>
            </Route>

            <Route>
                <DayList />
            </Route>

            <Route>
                <Calendar />
            </Route>
        </>
    )
}

