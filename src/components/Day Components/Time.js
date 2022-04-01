import React, { useEffect, useState } from "react"
import './dayTime.css'


export const MyClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let TimeId = setInterval(() => setTime(new Date()), 1000);
        return () => {
        clearInterval(TimeId);
        };
        });

        return <div className="clock" style={{flex:1,justifyContent: "center",alignItems: "center"}}> {
            time.toLocaleTimeString()
    } </div>;
};

