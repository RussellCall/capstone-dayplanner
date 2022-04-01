import React from 'react';
import { Route } from 'react-router-dom';
import { CurrentWeek } from './Calendar/Calendar';



export const ApplicationViews = () => {
    return (
        <>
            <Route path = "/">
                <CurrentWeek />                
            </Route>

        </>
    )
}

