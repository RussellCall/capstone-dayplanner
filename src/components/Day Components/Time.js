//import React, { Component } from "react";

import React, { useEffect, useState } from "react"


export const MyClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let TimeId = setInterval(() => setTime(new Date()), 1000);
        return () => {
        clearInterval(TimeId);
        };
        });

        return <div> {
            time.toLocaleTimeString()
    } </div>;
};

