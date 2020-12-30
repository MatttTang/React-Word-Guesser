import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Menu() {
    return(
        <motion.div className="M1"
            initial={{x: -800}}
            animate={{x: 0}}
            transition={{duration: 1}}>
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
                <button className="mainButtons">
                    Secret Move
                </button>
                <Link to='/LeaderBoard'>
                    <button className="mainButtons">
                        Leader Board
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}
