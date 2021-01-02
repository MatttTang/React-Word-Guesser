import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

export default function Timer() {
    const [Time, setTime] = useState(0);
    useEffect(() =>{
        const interval = setInterval(() =>{
            if (Time < 60){
                setTime(Time => Time + 1);;
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    return(
        <div className="timer">
            <motion.h3
                animate={{color: '#FF0000'}}
                transition={{duration: 60}}>
                {Time}
            </motion.h3>
        </div>

    )
}
