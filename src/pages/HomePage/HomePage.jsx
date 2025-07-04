import React, { useEffect, useState } from 'react'
import FireRingAnimation from '../../components/NewHero/NewHero'
import linkedIn from '../../../src/assets/Frame 5.svg'
import insta from '../../../src/assets/Frame 6.svg'
import x from '../../../src/assets/Frame 7.svg'
import whatsapp from '../../../src/assets/Frame 8.svg'
import fb from '../../../src/assets/Frame 9.svg'
import SlidingText from '../../components/HeroHeading/HeroHeading'
import AboutSection from '../../components/AboutUs/AboutUs'
import SuccessStories from '../../components/SuccessStories/SuccessStories'
import TestimonialCarousel from '../../components/Feedback/Feedback'
import Marquee from '../../components/Marquee'
import Ourpresence from '../OurPresence/Ourpresence'
import ScrollCarousel from '../../components/ScrollCarousel/Scrollcarousel'
import VerticalScrollSlider from '../../components/ServicesWeOffer/ServicesWeOffer'
import HoverCards from '../../components/IndustriesWeOffer/IndustriesWeOffer'
import marq1 from '../../../src/assets/marq1.jpeg'
import marq2 from '../../../src/assets/marq2.png'
import marq3 from '../../../src/assets/marq3.webp'
import marq4 from '../../../src/assets/marq4.jpeg'
import marq5 from '../../../src/assets/marq5.jpeg'
import marq6 from '../../../src/assets/marq6.jpeg'
import marq7 from '../../../src/assets/marq7.jpeg'
import marq8 from '../../../src/assets/marq8.jpeg'
import marq9 from '../../../src/assets/marq9.jpeg'
import marq10 from '../../../src/assets/mrq10.png'



import MobileSlider from '../../components/MobileSlider/MobileSlider'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MarqueeComp from '../../components/Marq/Marq'



const HomePage = () => {
    const randomWordsList = ["Innovation with Code",
        "Automation for Growth",
        "Data and Design",
        "Cloud for Speed",
        "Tech and Trust",
    ];
    const [isMobile, setIsMobile] = useState(false);
    // const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [displayText, setDisplayText] = useState('');
    const [finalShown, setFinalShown] = useState(false);

    useEffect(() => {
        if (inView && !finalShown) {
            let counter = 0;
            const interval = setInterval(() => {
                if (counter < randomWordsList.length) {
                    setDisplayText(randomWordsList[counter]);
                    counter++;
                } else {
                    clearInterval(interval);
                    setDisplayText("Shaping The Future");
                    setFinalShown(true);
                }
            }, 130);
        }
    }, [inView, finalShown]);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const images1 = [
        marq1,
        marq2,
        marq3,
        marq4,
        marq10,
    ]

    const images2 = [
        marq5,
        marq6,
        marq7,
        marq8,
        marq9,
    ]

    return (
        <div className='mt-[65px]'>
            <FireRingAnimation />
            <div className="hidden lg:block">
                <div className="absolute right-5 bottom-5 flex gap-3">
                    <img src={linkedIn} alt="" className="cursor-pointer" />
                    <img src={insta} alt="" className="cursor-pointer" />
                    <img src={x} alt="" className="cursor-pointer" />
                    <img src={whatsapp} alt="" className="cursor-pointer" />
                    <img src={fb} alt="" className="cursor-pointer" />
                </div>

            </div>
            <AboutSection />

            <Marquee images={images1} />
            {
                isMobile ? <MobileSlider /> : <VerticalScrollSlider />
            }
            {/* <VerticalScrollSlider />
            <MobileSlider /> */}
            <Ourpresence />
            <Marquee images={images2} />
            <HoverCards />

            <div className='px-6 lg:px-16'>
                <div className='flex justify-between'>
                    <div className='flex w-[30%] justify-between text-3xl'>
                        <div>+</div>
                        <div>+</div>
                    </div>
                    <div className='flex w-[30%] justify-between text-3xl'>
                        <div>+</div>
                        <div>+</div>
                    </div>
                </div>
                <motion.div
                    className=""
                    initial={{ opacity: 0.4, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <p className='text-end text-3xl md:text-5xl lg:text-8xl font-light mt-4'>At The Core of <br /> Innovation</p>
                </motion.div>
            </div>


                {/* <MarqueeComp /> */}

            <div className='px-6 lg:px-16'>

                {/* <p className='text-end text-3xl md:text-5xl lg:text-9xl font-bold mt-24 mb-16'>Shaping The Future</p> */}
                <motion.p
                    ref={ref}
                    className='text-end text-3xl md:text-5xl lg:text-9xl font-bold mt-24'
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {displayText}
                </motion.p>
                <div className='flex justify-between mb-20 mt-4'>
                    <div className='flex w-[30%] justify-between text-3xl'>
                        <div>+</div>
                        <div>+</div>
                    </div>
                    <div className='flex w-[30%] justify-between text-3xl'>
                        <div>+</div>
                        <div>+</div>
                    </div>
                </div>
            </div>

            <ScrollCarousel />
            {/* <SuccessStories /> */}
            <TestimonialCarousel />
        </div>
    )
}

export default HomePage
