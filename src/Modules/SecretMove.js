import React from 'react'
import Video from '../assets/vid.mp4';
import '../styler/video.css';
import {motion} from 'framer-motion';

export default function SecretMove() {
    return (
        <div>
            <motion.video className="vid" autoPlay loop
                initial={{y: -1000, x: -1000}}
                animate={{y: 0, x: -200}}>
                <source src={Video} />
            </motion.video>
        </div>
    )
}
