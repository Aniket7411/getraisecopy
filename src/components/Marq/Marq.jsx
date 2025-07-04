import { motion } from "framer-motion";
import parshv from '../../assets/parshv.jpeg'
import styles from '../../../src/assets/styles.jpeg'
import pawan from '../../../src/assets/pawan.jpeg'
import neu from '../../../src/assets/neu.jpeg'
import heaven from '../../../src/assets/heaven.jpeg'
import bharat from '../../../src/assets/bharat.jpeg'
import seva from '../../../src/assets/seva.jpeg'
import shivala from '../../../src/assets/shivala.jpeg'
import rj from '../../../src/assets/rajk.svg'
import sailing from '../../../src/assets/sailing.svg'
import tree from '../../../src/assets/tree.svg'
import chobthai from '../../../src/assets/chobthai.svg'
import woninteen from '../../../src/assets/woninteen.svg'
import eazypro from '../../../src/assets/eazypro.svg'
import lionhead from '../../../src/assets/lionhead.svg'
import wlaret from '../../../src/assets/wlaret.svg'
import rolling from '../../../src/assets/rolling.svg'
import falcone from '../../../src/assets/falcone.svg'
import energy from '../../../src/assets/energy.svg'
import aarambh from '../../../src/assets/aarambh.svg'
import nsc from '../../../src/assets/nsc.svg'
import ferrart from '../../../src/assets/ferrart.svg'
import raj from '../../../src/assets/raj.svg'


import './marq.css'

const MarqueeComp = () => {
    const images = [
        woninteen,
        falcone,
        eazypro,
        wlaret,
        styles,
        rolling,
        shivala,
        energy,
        aarambh,
        nsc,
        raj,
        rj,
        sailing,
        ferrart,
        parshv,
        pawan,
        neu,
        heaven,
        bharat,
        seva,
        tree,
        chobthai,
        lionhead,
    ];

    return (
        <>
            {/* <div className="flex items-center space-x-2 w-[80%] mx-auto px-6 lg:px-16">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <h3 className="text-lg font-semibold text-gray-900 ml-2 RFDewiExtended">Trusted By Many Companies</h3>
                </div> */}
                <div className="flex items-center space-x-2 mb-8 w-[80%] mx-auto lg:px-16 mt-8">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h3 className="text-[20px] font-normal text-gray-900 RFDewiExtended"
                >Trusted By Many Companies</h3>
            </div>
        <div className="overflow-hidden w-full py-3 mb-24 ">
            {/* <h2 className="text-center text-4xl font-semibold mb-8">Trusted By Many Companies</h2> */}
            <div className="bgimar relative h-[350px] overflow-hidden">
                {/* Background text */}
                <div className="absolute left-0 right-0 h-full text-center m-auto z-10 pointer-events-none">
                    <div className="flex items-center justify-center h-full text-[#434343] text-7xl md:text-9xl font-bold">
                       OUR CLIENTS
                    </div>
                </div>

                {/* Vertical marquee animation */}
                {/* <motion.div
                    className="flex flex-col items-center gap-20 absolute top-0 left-0 right-0 z-20"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...images, ...images].map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`Marquee Item ${i + 1}`}
                            className="w-44 h-44 rounded-4xl object-cover flex-shrink-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </motion.div> */}

                <motion.div
                    className="grid absolute top-0 left-0 right-0 z-20 gap-8
             grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    animate={{ y: ["20%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
                >
                    {[...images, ...images].map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center"
                        >
                            <img
                                src={src}
                                alt={`Marquee Item ${i + 1}`}
                                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-3xl"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>

        </>
    );
};

export default MarqueeComp;
