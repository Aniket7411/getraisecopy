import React, { useEffect, useRef } from "react";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import './businessSection.css'
import handShake from '../../assets/handShake.svg'
import topRightArr from '../../assets/topRightArr.svg'
import TestimonialCarousel from "../../components/Feedback/Feedback";
import expertAvatar1 from '../../assets/expertOne.svg'
import expertAvatar2 from '../../assets/expertTwo.svg'
import expertAvatar3 from '../../assets/expertThree.svg'
import expertAvatar4 from '../../assets/expertFour.svg'
import expertAvatar5 from '../../assets/expertFive.svg'
import meetOne from '../../assets/meetOne.svg'
import meetTwo from '../../assets/RectangleMeetRoom.png'
import { motion } from "framer-motion";
// import OdometerCounter from "../../components/OdometerCounter/OdometerCounter";
import { useInView } from "react-intersection-observer";
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';





const BusinessSection = () => {

    const expertImages = [
        expertAvatar1,
        expertAvatar2,
        expertAvatar3,
        expertAvatar4,
        expertAvatar5
    ];

    const images = {
        expertAvatars: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    };
    const value = "1200"
    const ref = useRef(null);
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const combinedRef = (node) => {
        ref.current = node;
        inViewRef(node);
    };

    useEffect(() => {
        if (inView) {
            const od = new Odometer({
                el: ref.current,
                value: 0,
                duration: 2000,
                format: '(,ddd)',
            });

            od.update(value);
        }
    }, [inView, value]);


    return (
        <>

            <div className="mx-auto p-6 lg:p-12 mt-[50px]"

            >
                {/* Header Section */}
                <motion.div
                    className="grid mb-8 justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                         <h2 className="text-[3rem] md:text-[5rem] lg:text-[6rem] text-center font-[700]"
                         style={{
                            lineHeight:'110px'
                         }}
                         >
                            Transforming Businesses with Scalable, Custom-Built Solutions.
                        </h2>
                     {/* <div className="flex flex-col">
                        <div className="flex justify-end items-center space-x-2 ">
                            <div className="flex mr-2">
                                {expertImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className="w-[59px] h-[59px] rounded-full border-2 border-white -ml-8"
                                        alt={`expert-${index + 1}`}
                                    />
                                ))}
                            </div>

                            <div
                                className="text-4xl font-bold"
                                style={{ lineHeight: "25px" }}
                            >
                                80+ <br />
                                <span className="text-[24px] font-semibold">Experts</span>
                            </div>
                        </div>

                        <p
                            className="text-end text-[15px] mt-2 md:text-[20px] font-semibold text[#3A3A3A]"

                        >
                            Explore our diverse range of technology <br /> solutions, built to accelerate growth,
                            enhance <br /> efficiency, and drive innovation.
                        </p>
                    </div> */}
                </motion.div>

                {/* Image Grid Section */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
                    <div className="grid grid-rows-2 gap-6">
                        <img
                            src={meetOne}
                            className="w-full h-[200px] md:h-[350px] object-cover rounded-lg"
                            alt="office workspace"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                             <div className="bg-gray-100 p-4 rounded-2xl flex flex-col justify-end ecoSystem w-full md:w-3/4">
                                <div className="flex w-full justify-between">
                                    <div>
                                        <img src={handShake} alt="" />
                                        <span className="text-lg font-medium text-black-500">Great Tech Eco - System</span>
                                        <p className="text-black-400 text-sm">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <img src={topRightArr} alt="" />
                                </div>
                            </div>

                             <div className="bg-yellow-100 p-4 rounded-2xl flex flex-col justify-end w-full md:w-1/4">
                                 <div className="flex items-center">
                                    <div ref={combinedRef} className="text-[3rem] font-bold" >0
                                    </div>
                                    <span className='mb-4' style={{
                                        fontSize: "3rem",
                                        fontWeight: 800,
                                    }}>+</span>
                                </div>
                                 <p className="text-sm font-medium text-black-600">Happy Businesses and Companies</p>
                            </div>
                        </div>


                    </div>

                     <div className="relative lg:row-span-2">
                        <img
                            src={meetTwo}
                            className="w-full h-[200px] md:h-[350px] object-cover rounded-lg"
                            alt="team meeting"
                        />
                    </div>
                </div> */}


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 md:h-[80vh] ">
                    {/* Big Image */}
                    {/* <div className="col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden">
                        <img
                            src={meetTwo}
                            alt="team-1"
                            className="object-cover w-full h-full"
                        />
                    </div> */}

                    {/* Top Right Image */}
                     <div className="col-span-2 md:col-span-1 overflow-hidden w-full h-full">
                        {/* <img
                              src={img3}
                              alt="team-3"
                              className="object-cover w-full h-full"
                            /> */}

                        <div className="md:col-span-1 h-full flex flex-col justify-end w-full py-4">
                            <div className="flex flex-col">
                                <div className="flex justify-start items-center space-x-2 min-h-[85px]">
                                    {/* Dummy avatars */}
                                    <div className="flex ml-8 mr-2">
                                        {expertImages.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                className="w-[59px] h-[59px] md:w-[45px] md:h-[45px] lg:w-[59px] lg:h-[59px] rounded-full border-2 border-white -ml-8"
                                                alt={`expert-${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div
                                        className="text-[40px] md:text-[24px] lg:text-[40px] font-semibold"
                                        style={{ lineHeight: "25px" }}
                                    >
                                        80+ <br />
                                        <span className="text-[24px] font-semibold">Experts</span>
                                    </div>
                                </div>

                                <p
                                    className="text-start text-[15px] mt-2 lg:text-[20px] font-semibold text[#3A3A3A]"

                                >
                                    Explore our diverse range of technology solutions, built to accelerate growth, enhance efficiency, and drive innovation.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="col-span-2 rounded-xl overflow-hidden h-full">
                        <img
                            src={meetOne}
                            alt="team-2"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Bottom Small Images */}
                   
                    <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden">
                        <img
                            src={meetTwo}
                            alt="team-1"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-gray-100 p-4 rounded-2xl h-full flex flex-col justify-end ecoSystem w-full overflow-hidden">
                        <div className="flex w-full justify-between items-end">
                            <div>
                                <img src={handShake} alt="" />
                                <span className="text-lg font-medium text-black-500">Great Tech Eco - System</span>
                                <p className="text-black-400 text-sm">Future-ready, secure, and scalable digital solutions.</p>
                            </div>
                            {/* <img src={topRightArr} height={50} width={50} alt="" /> */}
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden">
                        <div className="bg-yellow-100 p-4 rounded-2xl flex flex-col justify-end w-full h-full">
                            {/* <span className="text-4xl font-bold">120+</span> */}
                            <div className="flex items-center">
                                <div ref={combinedRef} className="text-[3rem] font-bold" >0
                                </div>
                                <span className='mb-4' style={{
                                    fontSize: "3rem",
                                    fontWeight: 800,
                                }}>+</span>
                            </div>
                            {/* <OdometerCounter value={120} /><span className='plusColor'>+</span> */}
                            <p className="text-lg font-medium text-black-500">Happy Businesses and Companies</p>
                        </div>
                    </div>
                </div>

                <ServicesSection />
            </div>
            <TestimonialCarousel />


        </>

    );
};

export default BusinessSection;
