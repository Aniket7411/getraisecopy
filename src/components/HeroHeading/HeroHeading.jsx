import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './HeroHeading.css'

const SlidingText = () => {
    const firstPart = "Raise";
    const secondPart = "Your";
    const thirdOptions = ["Possibilities", "Brand", "Business"];
    const finalText = ["The Future", "With Us"];

    const [index, setIndex] = useState(0);
    const [showFinal, setShowFinal] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < thirdOptions.length - 1) {
                setIndex((prev) => prev + 1);
            } else {
                setShowFinal(true);
                clearInterval(interval);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="flex font-bold text-white left-0 right-0 w-[80%] md:w-[88%] mx-auto text-center HeroHeadingStyle montserrat-text">
            {/* First Part */}
            <div className="relative overflow-hidden me-2 md:me-4">{firstPart}</div>

            {/* Second Part (Always visible) */}

            {/* Third Part (Sliding Effect) */}
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showFinal ? (
                        <div className="flex gap-2 md:gap-4">
                            <span className="">{secondPart}</span>


                            <motion.span
                                key={thirdOptions[index]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className=""
                            >
                                {thirdOptions[index]}
                            </motion.span>
                        </div>
                    ) : (
                        <motion.div
                            key="finalText"
                            className="flex w-[100%] gap-2 md:gap-4"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {finalText.map((word, i) => (
                                <span className="text-[#FFF2A5]" key={i}>{word}</span>
                            ))}
                        </motion.div>
                    )

                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SlidingText;
