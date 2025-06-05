import React from 'react';
import { animate , motion } from 'framer-motion';


const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%","0%"]
    },
};


// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}
const Stairs = () => {
  return (
    <>
        {/* render o motion divs, eoch representing o step of the stairs. 
        Each div will hove the some onimotion defined by the stoirsAnimation object. 
        The delay for each div is colculoted sinamicolly based on it's reversed index, 
        creating a staggered effect with decreasing delay for each subsequent step.*/}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.5,
                    delay: reverseIndex(index) * 0.1, // staggered delay
                    ease: "easeInOut",
                }}
                className="h-full w-full bg-white relative"  
            />
            );
        })}
    </>
  );
  
};

export default Stairs;