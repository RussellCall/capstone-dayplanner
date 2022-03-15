
import React from 'react';
import { Route } from 'react-router-dom';
import { WelcomeTitle } from './Users/Welcome';
import { DayList } from './Day Components/DayItems';
import { MyClock } from './Day Components/Time';



export const ApplicationViews = () => {
    return (
        <>
            <Route>
                <WelcomeTitle/> // Not displaying user name.
            </Route>
            
            <Route>
                <MyClock/>
            </Route>

            <Route>
                <DayList />
            </Route>
        </>
    )
}

