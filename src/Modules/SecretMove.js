import React from 'react'
import Video from '../assets/vid.mp4';
import '../styler/video.css';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import PV from './pageVariants';

export default function SecretMove() {
    return (
        <motion.div style={{textAlign: 'center'}}
            initial="initial"
            animate="in"
            exit="out"
            variants={PV}>
            <motion.video id="video" className="vid" autoPlay loop
                initial={{y: -1000, x: -1000}}
                animate={{y: 0, x: -200}}>
                <source src={Video} />
            </motion.video>

            <Link to="/">
                <button className="mainButtons">
                    Return
                </button>
            </Link>
        </motion.div>
    )
}
