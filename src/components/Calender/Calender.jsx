import React, {Component} from 'react';

// DayPilot Lite
import {DayPilotCalendar} from "@daypilot/daypilot-lite-react";


class Calendar extends Component {
    render() {
        return (
            <DayPilotCalendar 
              viewType="Week"
              ref={component => {
                this.calendar = component && component.control;
              }}
              />
        );
    }
}

export default Calendar;

