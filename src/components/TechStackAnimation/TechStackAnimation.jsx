import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/Rectangle 4893.jpg'
import img2 from '../../assets/Rectangle 4894.png';
import img3 from '../../assets/Rectangle 4895.png';

import icon1 from '../../assets/respWebIcon.svg';
import icon2 from '../../assets/custDevIcon.svg';
import icon3 from '../../assets/cms_icon.svg';
import icon4 from '../../assets/apiIcon.svg';

import icon5 from '../../assets/androidnIos.svg';
import icon6 from '../../assets/crossPlatform.svg';
import icon7 from '../../assets/customBusiness.svg';
import icon8 from '../../assets/appMaintenance.svg';
import icon9 from '../../assets/frontend.svg';
import icon10 from '../../assets/backend.svg';
import icon11 from '../../assets/flutter.svg';
import icon12 from '../../assets/wordpress.svg';

import vid3 from '../../assets/vid3.mp4';
import vid4 from '../../assets/vid4.mp4';
import vid5 from '../../assets/vid5.mp4';

import { motion } from 'framer-motion';

const slides = [
    { id: 1, number: "01", heading: "Web Development", image: img1, iconOne:icon1, iconTwo:icon2, iconThree:icon3, iconFour:icon4, bgCol: "bg-[#101010]", text1: "Responsive Website Design", text2: "Custom Web App Development", text3: "CMS & E-commerce Solutions", text4: "API Integrations & Backend Systems" },

    { id: 2, number: "02", heading: "Mobile App Development", image: img2, iconOne:icon5, iconTwo:icon6, iconThree:icon7, iconFour:icon8, bgCol: "bg-[#212536]", text1: "Android & iOS Native App Development ", text2: "Cross-Platform Apps using Flutter & React", text3: "Custom Business Apps", text4: "App Maintenance & Upgrades" },

    { id: 3, number: "03", heading: "Technology Stack", image: img3, iconOne:icon9, iconTwo:icon10, iconThree:icon11, iconFour:icon12, bgCol: "bg-[#677D8D]", text1: "Frontend: React.js, Angular, Vue.js", text2: "Backend: Node.js, Python, PHP, Laravel", text3: "Mobile: Flutter, React Native, Swift, Kotlin", text4: "CMS: Wordpress, Shopify, Magento" },

    { id: 4, number: "04", heading: "Deliver", image: "/assets/Rectangle 4893.png", text1: "Responsive Website Design", text2: "Custom Web App Development", text3: "CMS & E-commerce Solutions", text4: "CMS: Wordpress, Shopify, Magento" },
];

export default function TechStackAnimation() {
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
        // <div ref={sectionRef} className="relative" style={{ height: `${slides.length * 32}vh` }}>

        //     <div className="sticky top-0 h-screen w-full bg-white overflow-hidden py-10 border">
        //         {slides.map((slide, index) => {
        //             const isVisible = index <= currentSlide;
        //             const numberColor = "#ababab"
        //             const bgColor = "#fff";
        //             const textColor = "#fff"

        //             return (
        //                 <div
        //                     key={index}
        //                     className=" text-white absolute top-0 h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 transition-transform duration-700"
        //                     style={{
        //                         zIndex: index,
        //                         backgroundColor: bgColor,
        //                         transform: isVisible ? "translateY(0)" : "translateY(100%)",
        //                     }}
        //                     onClick={() => setCurrentSlide(index)}
        //                 >

        //                     <motion.div
        //                         className="h-screen w-full px-6 py-10 bg-white flex flex-col items-center justify-center gap-6"
        //                         initial={{ y: 200, opacity: 0 }}
        //                         animate={{ y: 0, opacity: 1 }}
        //                         transition={{ duration: 1, ease: "easeOut" }}
        //                     >
        //                         {/* Full Width Card */}
        //                         {/* <div className="relative w-full h-1/2 bg-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold"> */}
        //                         <div
        //                             className="relative w-full h-[45vh] text-white rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold bg-cover bg-center"
        //                             style={{
        //                                 backgroundImage: `url(${slide.image})`,
        //                             }}
        //                         >
        //                             <h2 className="absolute left-3 bottom-2">{slide.heading}</h2>
        //                         </div>

        //                         {/* 3 Cards in Row */}
        //                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">

        //                             <div className="bg-black p-6 h-[170px] rounded-xl shadow-md text-start flex items-end text-xl font-semibold">
        //                                 {slide.text1}
        //                             </div>
        //                             <div className="bg-black p-6 h-[170px] rounded-xl shadow-md text-start flex items-end text-xl font-semibold">
        //                                 {slide.text2}

        //                             </div>
        //                             <div className="bg-black p-6 h-[170px] rounded-xl shadow-md text-start flex items-end text-xl font-semibold">
        //                                 {slide.text3}
        //                             </div>

        //                         </div>
        //                     </motion.div>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </div>


        <div ref={sectionRef} className="relative" style={{ height: `${(slides.length + 1) * 32}vh` }}>

            <div className="sticky top-[45px] h-screen w-full bg-white overflow-hidden py-10">

                {/* Intro Slide (static, comes first) */}
                <div
                    className={`absolute top-0 h-full w-full flex items-center justify-center px-6 md:px-12 transition-opacity duration-700 ${currentSlide === 0 ? 'opacity-100 z-[10]' : 'opacity-0 z-0'}`}
                >
                    <motion.div
                        className="w-[85%] mx-auto"
                        initial={{ opacity: 0.3, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className='text-black text-[2.5rem] text-center md:text-[4rem] lg:text-[6rem] leading-tight lg:leading-[100px] font-semibold'>
                            Our Web & App Development Services
                        </h1>
                    </motion.div>
                </div>

                {/* Slides (start from index 1 to 3) */}
                {slides.map((slide, index) => {
                    const isVisible = currentSlide === index + 1;

                    return (
                        <div
                            key={index}
                            className="text-white absolute top-0 h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 transition-transform duration-700"
                            style={{
                                zIndex: isVisible ? 9 : 1,
                                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                            }}
                        >
                            <motion.div
                                className="h-screen w-full px-6 py-10 bg-white flex flex-col items-center justify-center gap-6"
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {/* Full Width Image Card */}
                                <div
                                    className="relative w-full h-[40vh] md:h-[45vh] text-white rounded-2xl shadow-inner flex items-center justify-center text-3xl font-bold bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize:'cover',
                                    }}
                                >
                                <div className="w-full h-full bg-[#01010150] rounded-2xl">

                                </div>
                                    <h2 className="absolute left-4 bottom-4 md:left-10 md:bottom-10 w-[60%] text-[10vh] font-medium">{slide.heading}</h2>
                                </div>

                                {/* 3 Cards in Row */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-4">
                                    <div className={`${slide.bgCol} relative p-6 md:h-[170px] rounded-xl shadow-md text-start flex items-end text-[20px] font-normal`}>
                                        <div className="hidden md:block absolute top-6 left-6">
                                            <img src={slide.iconOne} style={{
                                                height:'50px',
                                                width:'50px'
                                            }} alt="" />
                                        </div>
                                        {slide.text1}

                                    </div>
                                    <div className={`${slide.bgCol} relative p-6 md:h-[170px] rounded-xl shadow-md text-start flex items-end text-[20px] font-normal`}>
                                    <div className="hidden md:block absolute top-6 left-6">
                                            <img src={slide.iconTwo} style={{
                                                height:'50px',
                                                width:'50px'
                                            }} alt="" />
                                        </div>
                                        {slide.text2}
                                    </div>
                                    <div className={`${slide.bgCol} relative p-6 md:h-[170px] rounded-xl shadow-md text-start flex items-end text-[20px] font-normal`}>
                                    <div className="hidden md:block absolute top-6 left-6">
                                            <img src={slide.iconThree} style={{
                                                height:'50px',
                                                width:'50px'
                                            }} alt="" />
                                        </div>
                                        {slide.text3}
                                    </div>
                                    <div className={`${slide.bgCol} relative p-6 md:h-[170px] rounded-xl shadow-md text-start flex items-end text-[20px] font-normal`}>
                                    <div className="hidden md:block absolute top-6 left-6">
                                            <img src={slide.iconFour} style={{
                                                height:'50px',
                                                width:'50px'
                                            }} alt="" />
                                        </div>
                                        {slide.text4}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}
