import React from 'react'
import TestimonialCarousel from '../../components/Feedback/Feedback'
import customSalesforce from '../../assets/customSalesforce.mp4'
import { motion } from "framer-motion";
import customSalesMan from '../../assets/customSalesMan.svg'
import career from '../../assets/whyCloudImg.svg'
import wcuIcon1 from '../../assets/cloudIcon (1).svg'
import wcuIcon2 from '../../assets/cloudIcon (5).svg'
import wcuIcon3 from '../../assets/cloudIcon (4).svg'
import wcuIcon4 from '../../assets/cloudIcon (3).svg'
import wcuIcon5 from '../../assets/cloudIcon (2).svg'


import rightArr from '../../assets/rightArr.svg'
import sds1 from '../../assets/sds (1).svg'
import sds2 from '../../assets/sds (6).svg'
import sds3 from '../../assets/sds (5).svg'
import sds4 from '../../assets/sds (4).svg'
import sds5 from '../../assets/sds (3).svg'
import sds6 from '../../assets/sds (2).svg'

import pardot1 from '../../assets/pardot.svg'
import three from '../../assets/three.svg'

import pardot2 from '../../assets/pardot (6).svg'
import pardot3 from '../../assets/pardot (5).svg'
import pardot4 from '../../assets/pardot (4).svg'
import pardot5 from '../../assets/pardot (3).svg'
import pardot6 from '../../assets/pardot (2).svg'
import pardot7 from '../../assets/pardot (1).svg'

import restaurant from '../../assets/restaurant.svg'
import hospitalMgmt from '../../assets/hospitalMgmt.svg'
import eCommerce from '../../assets/e-commerce.svg'
import rightArBg from '../../assets/rightArBg.svg'
import { useNavigate } from 'react-router-dom';

const features = [
    {
        title: 'End-to-End Delivery',
        desc: 'From planning to launch to support, we manage it all.',
        icon: wcuIcon1,
    },
    {
        title: 'Industry-Tailored Solutions',
        desc: 'We customize workflows to match your business model.',
        icon: wcuIcon2,
    },
    {
        title: 'Seamless Integration',
        desc: 'Connect Salesforce to your apps, services, and databases.',
        icon: wcuIcon3,
    },
    {
        title: 'Results-Focused Approach',
        desc: 'We help you reduce manual effort, improve lead tracking, and boost revenue.',
        icon: wcuIcon4,
    },
    {
        title: 'Flexible Engagement Models',
        desc: 'Fixed price, monthly retainers, or resource-based support.',
        icon: wcuIcon5,
    },
];

const services = [
    {
        title: "Salesforce Implementation",
        image: sds1,
        para: "Seamless setup and configuration of Salesforce Cloud environments (Sales Cloud, Service Cloud, Marketing Cloud, etc.)"
    },
    {
        title: "Custom App Development",
        image: sds2,
        para: "We build Lightning-ready custom apps and components tailored to your business processes."
    },
    {
        title: "Salesforce Integration",
        image: sds3,
        para: "Integrate Salesforce with your existing tools and platforms—ERP, payment gateways, APIs, and third-party software."
    },
    {
        title: "Workflow Automation",
        image: sds4,
        para: "Create smart automation flows using Process Builder, Flow Builder, and Apex triggers for increased productivity."
    },
    {
        title: "MultiData Migration & Clean-Up",
        image: sds5,
        para: "Secure and structured migration from legacy CRMs to Salesforce with complete data mapping and accuracy."
    },
    {
        title: "Salesforce Support & Optimization",
        image: sds6,
        para: "Ongoing enhancements, bug fixes, user training, and performance tuning for long-term success."
    }
];

const CustomSalesforceSolutions = () => {

    const Navigate = useNavigate()
    return (

        <div className='mt-[65px]'>
            <div className=' overflow-hidden '>
                <div className="mb-14 relative w-screen min-h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    >
                        <source src={customSalesforce} type="video/mp4" />
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute left-0 w-full h-full bg-gradient-to-t from-[#ffffff00] via-white/20 to-white z-0" />


                    {/* Content */}
                    <motion.div
                        className="relative z-10 "
                        initial={{ opacity: 0.3, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h1 className='text-[#0000004D] text-[1.7rem] md:text-[3rem] leading-tight lg:leading-[70px] font-bold w-[90%] md:w-[80%] mx-auto'>
                            Transform Customer Experiences with

                        </h1>
                        <h1 className='text-[#0000004D] text-[2.2rem] md:text-[3.5rem] lg:text-[6rem] leading-tight lg:leading-[100px] mb-4 font-bold w-[90%] md:w-[70%] mx-auto'>
                            Custom Salesforce Solutions
                        </h1>
                        <p className='text-[16px] text-[#202020] md:text-[20px] font-medium md:w-[45%] mx-auto'>
                            At Getraise Technologies, we help businesses unlock the full potential of Salesforce—streamlining processes, improving team efficiency, and delivering seamless customer journeys through tailored CRM development.
                        </p>
                    </motion.div>
                    <div className='flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30'>
                        <button className='font-medium bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-black hover:text-white' style={{
                            border: '1px solid #FEEE99'
                        }}
                            onClick={() => { Navigate('/contact-us') }}

                        >Talk to a Salesforce Expert</button>
                        <button className='bg-[#FEEE99] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#FEEE99] cursor-pointer font-medium' onClick={() => { Navigate('/contact-us') }}>Request a Free Demo</button>

                    </div>
                </div>

            </div>




            <div className="px-6 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-2 m-auto min-h-[100vh]">
                {/* Right - Text Content */}
                <div className="w-full md:w-1/3 z-20">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                            Introduction
                        </h3>
                    </div>
                    <div className="flex items-center gap-x-2 mb-2">
                        {/* <div className="w-5 h-5 bg-yellow-500 rounded-full"></div> */}
                        <h3 className="text-[30px] lg:text-[40px] font-medium text-[#ACACAC] mb-0 augmenHeading">Empower Sales, Service, and Marketing—</h3>
                    </div>
                    <h2 className='text-[3.5rem] lg:text-[5rem] font-bold lg:leading-[100px]'>All in One Platform</h2>

                </div>

                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-1/3 z-20">
                    <img
                        src={customSalesMan}
                        alt="About Us"
                        className="w-full rounded-lg object-cover"
                    />
                </div>

                <p className='md:w-1/3 md:text-end'>Salesforce is more than just a CRM—it’s a scalable platform for managing every part of your customer lifecycle. We bring the expertise to help you design, develop, and optimize your Salesforce environment to align with your business goals, improve customer relationships, and drive ROI.</p>
            </div>

            <div className="flex justify-center items-center space-x-2 px-4 md:px-10">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                    Our Services
                </h3>
            </div>
            <h2 className='mb-5 px-4 md:px-10 text-center text-[30px] md:text-[40px] font-[600] text-[#363636]'>Our Salesforce Development Services</h2>

            <div className='px-4 md:px-10 '>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#FDEF9E] rounded-[20px] p-3">
                    {services.map((service, index) => (
                        <div key={index} className="text-black rounded-[20px] w-full md:min-h-[250px] min-h-[170px] mb-1 relative bg-white">
                            <img src={service.image} className='w-full' alt="" />

                            <div className=" px-4">

                                <h3 className="text-xl font-semibold mt-2 px-2">{service.title}</h3>
                                <p className='p-2 '>{service.para}</p>

                                {/* <button
                                    onClick={() => Navigate("/contact-us")}
                                    className="cursor-pointer bg-white text-black font-medium hover:bg-yellow-100 flex justify-between px-4 rounded-4xl py-2 w-full group transition-all duration-300"
                                >
                                    Book a Demo
                                    <img
                                        src={rightArr}
                                        alt=""
                                        className="transition-transform duration-500 group-hover:rotate-180"
                                    />
                                </button> */}

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=''>
                <div className="hidden lg:block">

                    <div className="relative w-full flex flex-col items-center justify-center">


                        <div className="relative w-full h-lvh mt-10">
                        <h2 className='text-[#C7C7C7] text-[4rem] md:text-[5rem] font-bold text-center px-4 md:px-12'>Platform Expertise</h2>

                            {/* Pardot */}
                            <div className="absolute left-[3%] top-[10%] z-40">
                                <img src={pardot1} className='h-[200px]' alt="Pardot" />
                            </div>

                            {/* Salesforce CPQ */}
                            <div className="absolute left-[22%] top-[12%] z-30">
                                <img src={pardot2} className='h-[200px]' alt="Salesforce CPQ" />
                            </div>

                            {/* Sales Cloud */}
                            <div className="absolute left-[44%] top-[13%] z-20">
                                <img src={three} className='h-[200px]' alt="Sales Cloud" />
                            </div>

                            {/* Marketing Cloud */}
                            <div className="absolute right-0 top-[15%] z-30">

                                <img src={pardot3} className='h-[200px]' alt="Service Cloud" />
                            </div>

                            {/* Salesforce Lightning */}
                            <div className="absolute left-0 top-[38%] z-20">
                                <img src={pardot4} className='h-[200px]' alt="Salesforce Lightning" />
                            </div>

                            {/* AppExchange */}
                            <div className="absolute left-[20%] top-[40%] z-30">
                                <img src={pardot6} className='h-[200px]' alt="AppExchange & Custom Dev" />
                            </div>

                            {/* Service Cloud */}
                            <div className="absolute left-[52%] top-[38%] z-20">
                                <img src={pardot7} className='h-[200px]' alt="Experience Cloud" />
                            </div>

                            {/* Experience Cloud */}
                            <div className="absolute left-[32%] top-[58%] z-30">
                                <img src={pardot5} className='h-[200px]' alt="Marketing Cloud" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden w-full">

                    <div className=" w-full  min-h-[600px] flex items-center justify-center">


                        <div className=" w-full mt-10">

                            {/* Pardot */}
                            <div className='flex justify-center'>
                                <img src={pardot1} className='h-[200px]' alt="Pardot" />
                            </div>

                            {/* Salesforce CPQ */}
                            <div className='flex justify-center'>
                                <img src={pardot2} className='h-[200px]' alt="Salesforce CPQ" />
                            </div>

                            {/* Sales Cloud */}
                            <div className='flex justify-center'>
                                <img src={three} className='h-[200px]' alt="Sales Cloud" />
                            </div>

                            {/* Marketing Cloud */}
                            <div className='flex justify-center'>

                                <img src={pardot3} className='h-[200px]' alt="Service Cloud" />
                            </div>

                            {/* Salesforce Lightning */}
                            <div className='flex justify-center'>
                                <img src={pardot4} className='h-[200px]' alt="Salesforce Lightning" />
                            </div>

                            {/* AppExchange */}
                            <div className='flex justify-center'>
                                <img src={pardot6} className='h-[200px]' alt="AppExchange & Custom Dev" />
                            </div>

                            {/* Service Cloud */}
                            <div className='flex justify-center'>
                                <img src={pardot7} className='h-[200px]' alt="Experience Cloud" />
                            </div>

                            {/* Experience Cloud */}
                            <div className='flex justify-center'>
                                <img src={pardot5} className='h-[200px]' alt="Marketing Cloud" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="relative w-full bg-white py-12 px-4 md:px-12">
                <div className="flex items-center space-x-2 mb-5">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                        Why Choose Us
                    </h3>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-start">Why Choose GetRaise Technologies?</h2>



                <div className="w-full rounded-xl overflow-hidden mb-6">
                    <img
                        src={career} // replace with your own image
                        alt="Team working"
                        className="w-full h-auto object-cover bg-no-repeat"
                    />
                </div>

                <div className="-mt-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                                style={{
                                    border: '1.5px solid #CECECE'
                                }}
                            >
                                <div className="bg-yellow-200 p-3 rounded-full mb-4">
                                    <img src={feature.icon} alt="" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <TestimonialCarousel />
        </div>
    )
}

export default CustomSalesforceSolutions
