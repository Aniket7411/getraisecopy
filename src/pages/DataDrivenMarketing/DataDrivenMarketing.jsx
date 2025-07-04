import React from "react";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import './dataDrivenMarketing.css'
import handShake from '../../assets/handShake.svg'
import topRightArr from '../../assets/topRightArr.svg'
import TestimonialCarousel from "../../components/Feedback/Feedback";
import expertAvatar1 from '../../assets/expertOne.svg'
import expertAvatar2 from '../../assets/expertTwo.svg'
import expertAvatar3 from '../../assets/expertThree.svg'
import expertAvatar4 from '../../assets/expertFour.svg'
import expertAvatar5 from '../../assets/expertFive.svg'
import we from '../../assets/WE.svg'
import scale from '../../assets/SCALE.svg'
import ddm2 from '../../assets/ddm2.svg'
import ddm1 from '../../assets/ddm1.svg'
import { WhatWeDo } from "../../components/WhatWeDo/WhatWeDo";
import WhyChooseGr from "../../components/WhyChooseGr/WhyChooseGr";
import IndustriesWeServeDmPm from "../../components/IndustriesWeServeDmPm/IndustriesWeServeDmPm";
import { motion } from "framer-motion";
import OdometerCounter from "../../components/OdometerCounter/OdometerCounter";
import { useNavigate } from "react-router-dom";




const DataDrivenMarketing = () => {

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

    const Navigate = useNavigate();

    return (
        <>

            <div className="mx-auto p-6 lg:p-12 mt-[45px] md:mt-[50px]">
                {/* Header Section */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"> */}
                <motion.div
                    className="grid grid-cols-1 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
                >
                    <div className="mb-4">
                        <h2 className="text-center text-[3rem] md:text-[5rem] lg:text-[6rem] md:leading-[100px] font-semibold leading-tight">
                            Grow Smarter with Data-Driven Marketing
                        </h2>
                    </div>
                    <div className="text-center">
                        <p
                            className="lg:w-[70%] mx-auto text-center"
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#3A3A3A",
                            }}
                        >
                            At Getraise Technologies, we help you connect with the right audience through strategic digital and performance marketing that drives growth and ROI.
                        </p>
                    </div>
                </motion.div>

                {/* Image Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
                    {/* Left Section (70% on large screens, full width on small screens) */}
                    <div className="relative lg:row-span-2">
                        <img
                            src={ddm1}
                            className="w-full lg:h-[75vh] object-contain lg:object-cover rounded-lg"
                            alt="team meeting"
                        />
                    </div>


                    {/* Right Section (30% on large screens, full width on small screens) */}


                    <div className="grid grid-rows-2 md:h-[75vh] gap-6">
                        <img
                            src={ddm2}
                            className="w-full h-full object-cover rounded-lg"
                            alt="office workspace"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left - 75% width on larger screens, 100% on smaller */}
                            <div className="p-4 rounded-2xl flex flex-col justify-around h-full dataDriven w-full md:w-3/4">
                                {/* <div className=" w-full"> */}
                                {/* <div>
                                        <img src={handShake} alt="" />
                                        <span className="text-lg font-medium text-black-500">Great Tech Eco - System</span>
                                        <p className="text-black-400 text-sm">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <img src={topRightArr} alt="" /> */}
                                <button className="cursor-pointer w-full rounded-2xl text-[20px] py-5 bg-white hover:bg-[#000] hover:text-[#fff]" onClick={() => { Navigate("/contact-us") }} >Let’s Grow Your Brand</button>
                                <button className="cursor-pointer w-full rounded-2xl text-[20px] py-5 bg-[#FDEF9E99] hover:bg-[#000] hover:text-[#fff]" onClick={() => { Navigate("/contact-us") }}>Request a Free Audit</button>
                                {/* </div> */}
                            </div>


                        </div>


                    </div>


                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto'>
                    <div>
                        {/* <p className='presenceNumbers'>10<span className='plusColor'>+</span></p> */}
                        <p className='presenceNumbers'>
                            <OdometerCounter value={10} /><span className='plusColor'>+</span>
                        </p>
                        <p className='presenceNumbersText'>Yrs. of Exp.</p>
                    </div>
                    <div>
                        {/* <p className='presenceNumbers'>20<span className='plusColor'>+</span></p> */}
                        <p className='presenceNumbers'>
                            <OdometerCounter value={20} /><span className='plusColor'>+</span>
                        </p>
                        <p className='presenceNumbersText'>Global Countries <br />
                            Presence With Clients</p>
                    </div>
                    <div className='me-10'>
                        {/* <p className='presenceNumbers'>500<span className='plusColor'>+</span></p> */}
                        <p className='presenceNumbers'>
                            <OdometerCounter value={500} /><span className='plusColor'>+</span>
                        </p>
                        <p className='presenceNumbersText'>Successful Projects <br /> Delivered</p>
                    </div>

                    <div>
                        {/* <p className='presenceNumbers'>27<span className='plusColor'>+</span></p> */}
                        <p className='presenceNumbers'>
                            <OdometerCounter value={27} /><span className='plusColor'>+</span>
                        </p>
                        <p className='presenceNumbersText'>Awards and <br /> Recognitions Received</p>
                    </div>
                </div>
                <WhatWeDo />
                <div className=" flex justify-center mb-2 mx-auto">

                    <motion.div
                        className=""
                        initial={{ opacity: 0.4, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* <h1 className=" text-[40px] font-light">We Don’t Just Market
                            <span className="text-6xl font-medium text-[#FFB91A] ms-2">
                                We Scale
                            </span>
                        </h1> */}
                        <div className="flex items-center mx-auto w-[85%] gap-4">
                            <img src={we} alt="" className="w-[10%]" />
                            <img src={scale} alt="" className="w-[90%]" />
                        </div>

                    </motion.div>
                </div>
                <WhyChooseGr />
                <IndustriesWeServeDmPm />

            </div>
            <TestimonialCarousel />


        </>

    );
};

export default DataDrivenMarketing;
