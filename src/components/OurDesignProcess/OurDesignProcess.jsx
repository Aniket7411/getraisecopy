// import React, { useRef } from 'react';
// import vidOne from '../../assets/vidOne.mp4';
// import { motion, useInView } from 'framer-motion';

// const steps = [
//   { title: "Discover", video: vidOne, text: "Understand your business, your users, and your goals." },
//   { title: "Define", video: vidOne, text: "Translate insights into ideas and structured flows." },
//   { title: "Design", video: vidOne, text: "Create intuitive and engaging user experiences." },
//   { title: "Develop", video: vidOne, text: "Turn designs into fully functional products." },
//   { title: "Deploy", video: vidOne, text: "Launch, monitor, and iterate for impact." },
// ];

// const OurDesignProcess = () => {
//   const sectionRefs = useRef([]);
//   const inViewStates = steps.map((_, i) => {
//     const ref = sectionRefs.current[i] ?? React.createRef();
//     sectionRefs.current[i] = ref;
//     return useInView(ref, { amount: 0.6 });
//   });

//   // Get the index of the first visible section
//   const inViewIndex = inViewStates.findIndex((visible) => visible);

//   return (
//     <div className="relative h-screen flex bg-black text-white overflow-hidden">
//       {/* Left fixed titles */}
//       <div className="w-[28%] pl-12 py-16 space-y-10 sticky top-0 h-screen flex flex-col justify-center">
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className={`text-[2rem] font-semibold transition-colors duration-300 ${
//               inViewIndex === i ? 'text-yellow-300' : 'text-white'
//             }`}
//           >
//             {`0${i + 1}`} <span className="text-[1.6rem]">{step.title}</span>
//           </div>
//         ))}
//       </div>

//       {/* Right scrollable content */}
//       <div className="w-[72%] overflow-y-scroll h-screen snap-y snap-mandatory">
//         {steps.map((step, i) => (
//           <section
//             key={i}
//             ref={sectionRefs.current[i]}
//             className="h-screen w-full snap-start flex items-center justify-center gap-8 px-12"
//           >
//             <motion.video
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               src={step.video}
//               className="max-w-md"
//               autoPlay
//               muted
//               loop
//             />
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               className="text-white w-[30%] text-[1.2rem]"
//             >
//               {step.text}
//             </motion.p>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurDesignProcess;




import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import vidOne from '../../assets/vidOne.mp4';
import vid2 from '../../assets/vid2.mp4';
import vid3 from '../../assets/vid3.mp4';
import vid4 from '../../assets/vid4.mp4';
import vid5 from '../../assets/vid5.mp4';

import { motion } from 'framer-motion';

const slides = [
    { id: 1, number: "01", video: vidOne, heading: "Discover", text: "Understand your business, your users, and your goals." },
    { id: 2, number: "02", video: vid2, heading: "Define", text: "Translate insights into ideas and structured flows." },
    { id: 3, number: "03", video: vid3, heading: "Design", text: "Create wireframes, prototypes, and polished UI screens." },
    { id: 4, number: "04", video: vid4, heading: "Deliver", text: "Hand off fully responsive, dev-ready assets with support." },
    { id: 5, number: "05", video: vid5, heading: "Test & Improve", text: "Monitor real-world user feedback and iterate continuously." },
];

export default function VerticalScrollSlider() {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isScrollingRef = useRef(false);
    const Navigate = useNavigate();

    useEffect(() => {
        let touchStartY = 0;

        const handleWheel = (e) => {
            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

            const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

            if (inSection) {
                if (
                    (e.deltaY > 0 && currentSlide < slides.length - 1) ||
                    (e.deltaY < 0 && currentSlide > 0)
                ) {
                    e.preventDefault();

                    if (isScrollingRef.current) return;
                    isScrollingRef.current = true;

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 800);

                    if (e.deltaY > 0) setCurrentSlide((prev) => prev + 1);
                    else setCurrentSlide((prev) => prev - 1);
                }
            }
        };

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

            const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

            if (inSection) {
                if (
                    (deltaY > 30 && currentSlide < slides.length - 1) ||
                    (deltaY < -30 && currentSlide > 0)
                ) {
                    if (isScrollingRef.current) return;
                    isScrollingRef.current = true;

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 800);

                    if (deltaY > 30) setCurrentSlide((prev) => prev + 1);
                    else setCurrentSlide((prev) => prev - 1);
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentSlide]);

    return (
        <div ref={sectionRef} className="relative" style={{ height: `${slides.length * 32}lvh` }}>

            <div className="sticky top-[65px] h-lvh w-full bg-white overflow-hidden">
                {slides.map((slide, index) => {
                    const isVisible = index <= currentSlide;
                    const numberColor = "#ababab"
                    const bgColor = "#000";
                    const textColor = "#fff"

                    return (
                        <div
                            key={index}
                            className="absolute top-0 h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 transition-transform duration-700"
                            style={{
                                zIndex: index,
                                backgroundColor: bgColor,
                                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                            }}
                            onClick={() => setCurrentSlide(index)}
                        >
                            <div className="lg:w-[35%] text-[2rem] md:text-[3.2rem] font-medium text-center lg:text-left mb-4 md:mb-0" style={{ color: numberColor }}>
                                {slide.number}{" "}
                                <span className="text-[1.9rem] md:text-[2.5rem] block md:inline">
                                    {slide.heading}
                                </span>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    className="text-[1.2rem] md:text-[1.4rem]"
                                    style={{ color: textColor }}
                                >
                                    {slide.text}
                                </motion.p>

                            </div>

                            <div className=" flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-[65%]">
                                <motion.video
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    src={slide.video}
                                    className="w-full  "
                                    autoPlay
                                    muted
                                    loop
                                />
                                {/* <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    className="lg:absolute lg:right-3 lg:items-center lg:w-[20%] text-[1rem] lg:text-[1.2rem] text-center lg:text-left"
                                    style={{ color: textColor }}
                                >
                                    {slide.text}
                                </motion.p> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
