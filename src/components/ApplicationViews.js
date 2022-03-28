
import React from 'react';
import { Route } from 'react-router-dom';
import { CurrentWeek } from './Calendar/Calendar';
import { PriorityForm } from './Priority Components/PriForm';



export const ApplicationViews = () => {
    return (
        <>
            <Route path = "/">
                <CurrentWeek />                
            </Route>

        </>
    )
}

