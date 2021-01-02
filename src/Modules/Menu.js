import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import PV from './pageVariants';

export default function Menu() {
    return(
        <motion.div className="M1"
            variants={PV}
            initial="initial"
            animate="in"
            exit="out">
            <div className="content">
                <Link to='/Play'>
                    <button className="mainButtons">
                        Play
                    </button>
                </Link>
                <Link to="/Instructions">
                    <button className="mainButtons">
                        Instuctions
                    </button>
                </Link>
                <Link to="/Secret">
                    <button className="mainButtons">
                        Secret Move
                    </button>
                </Link>
                <Link to='/LeaderBoard'>
                    <button className="mainButtons">
                        Leader Board
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}
