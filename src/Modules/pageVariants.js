const pageVariants = {
    initial: {
        opacity: 0,
        transition:{
            delay: 1
        }
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0,
        transition:{
            duration: 0.5
        }
    }
}

export default pageVariants;