import React from 'react'
import TestimonialCarousel from '../../components/Feedback/Feedback'
import customSoftVid from '../../assets/customSoftVid.mp4'
import { motion } from "framer-motion";
import customSoftVision from '../../assets/customSoftVision.svg'
import fourAnime from '../../assets/customSoftFour.svg'
import bgCoverImg from '../../assets/customSoftServicesBack.svg'

import { useNavigate } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

import sds1 from '../../assets/customSoftIcons (1).svg'
import sds2 from '../../assets/customSoftIcons (2).svg'
import sds3 from '../../assets/customSoftIcons (3).svg'
import sds4 from '../../assets/customSoftIcons (4).svg'
import sds5 from '../../assets/customSoftIcons (5).svg'
import sds6 from '../../assets/customSoftIcons (6).svg'

import Ellipse1 from '../../assets/Ellipse (1).svg'
import Ellipse2 from '../../assets/Ellipse (6).svg'
import Ellipse3 from '../../assets/Ellipse (5).svg'
import Ellipse4 from '../../assets/Ellipse (4).svg'
import Ellipse5 from '../../assets/Ellipse (3).svg'
import Ellipse6 from '../../assets/Ellipse (2).svg'
import CustomSoftMarque from '../../components/CustomSoftMarque/CustomSoftMarque';




const CustomSofts = () => {
    const Navigate = useNavigate();

    const services = [
        {
            title: "Custom Web Applications",
            image: sds1,
            para: "Built for performance, accessibility, and full browser compatibility—no templates, just purpose-built platforms."
        },
        {
            title: "Enterprise Software Development",
            image: sds2,
            para: "Robust, secure, and scalable software for large organizations managing complex operations."
        },
        {
            title: "B2B SaaS Product Development",
            image: sds3,
            para: "From MVP to full-fledged SaaS platforms, we help you bring product ideas to market fast."
        },
        {
            title: "Workflow Automation Tools",
            image: sds4,
            para: "Digitize and automate internal tasks to improve accuracy, speed, and team efficiency."
        },
        {
            title: "Internal Dashboards & Portals",
            image: sds5,
            para: "Custom dashboards and admin panels for real-time control over business operations."
        },
        {
            title: "Legacy Software Modernization",
            image: sds6,
            para: "Upgrade or rebuild outdated systems for modern usability, security, and cloud integration."
        }
    ];

    const steps = [
        {
            title: "Discovery & Consultation",
            desc: "Understand your operations, goals, and gaps.",
            img: Ellipse1,
        },
        {
            title: "Planning & Wireframing",
            desc: "Create user flows, interface ideas, and architecture strategy.",
            img: Ellipse2,
        },
        {
            title: "Design & Prototyping",
            desc: "Craft visually consistent, intuitive UI/UX design systems.",
            img: Ellipse3,
        },
        {
            title: "Launch & Support",
            desc: "Deploy, monitor, and continuously optimize your solution.",
            img: Ellipse6,
        },
        {
            title: "Testing & QA",
            desc: "Functional, load, and security testing on all devices.",
            img: Ellipse5,
        },
        {
            title: "Agile Development",
            desc: "Modular build-outs using sprints and client feedback loops.",
            img: Ellipse4,
        },
    ];

    const stepsTwo = [
        {
            title: "Discovery & Consultation",
            desc: "Understand your operations, goals, and gaps.",
            img: Ellipse1,
        },
        {
            title: "Planning & Wireframing",
            desc: "Create user flows, interface ideas, and architecture strategy.",
            img: Ellipse2,
        },
        {
            title: "Design & Prototyping",
            desc: "Craft visually consistent, intuitive UI/UX design systems.",
            img: Ellipse3,
        },
        {
            title: "Agile Development",
            desc: "Modular build-outs using sprints and client feedback loops.",
            img: Ellipse4,
        },
        {
            title: "Testing & QA",
            desc: "Functional, load, and security testing on all devices.",
            img: Ellipse5,
        },
        {
            title: "Launch & Support",
            desc: "Deploy, monitor, and continuously optimize your solution.",
            img: Ellipse6,
        },

    ];


    return (
        <div className='mt-[65px]'>
            <div className=' overflow-hidden'>
                <div className="mb-14 relative w-screen min-h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                        style={{
                            opacity: '0.2'
                        }}
                    >
                        <source src={customSoftVid} type="video/mp4" />
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
                        <h1 className='text-[#00000] text-[2.2rem] md:text-[3.5rem] lg:text-[6rem] leading-tight lg:leading-[100px] mb-4 font-bold w-[90%] md:w-[70%] mx-auto'>
                            Custom Software

                        </h1>
                        <h1 className='text-[#00000] text-[1.7rem] md:text-[3rem] leading-tight lg:leading-[70px] font-bold w-[90%] md:w-[60%] mx-auto'>
                            Built Around Your Business

                        </h1>
                        <p className='text-[16px] text-[#202020] md:text-[20px] font-medium md:w-[45%] mx-auto'>
                            At GetRaise Technologies, we design and develop tailor-made software solutions that solve real problems, streamline operations, and scale with your growth—no off-the-shelf limitations.
                        </p>
                    </motion.div>
                    <div className='flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30'>
                        <button className='font-medium bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-[#FFD05E] hover:border-[#FFD05E] border' style={{
                            
                        }}
                            onClick={() => { Navigate('/contact-us') }}

                        >Request a Free Consultation</button>
                        <button className='bg-[#FFD05E] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#FEEE99] cursor-pointer font-medium' onClick={() => { Navigate('/contact-us') }}>Discuss Your Project</button>

                    </div>
                    <img className='absolute md:static bottom-0 left-0 right-0 md:-mt-12 mx-auto' src={fourAnime} alt="" />
                </div>

            </div>




            <div className="px-6 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 m-auto min-h-[100vh]">
                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 z-20">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                            Introduction
                        </h3>
                    </div>

                    <h2 className='text-[3rem] lg:text-[3.5rem] font-medium leading-[60px] mb-3'>Your Vision. Our Code.</h2>
                    <p className='text-[20px] md:w-[80%]'>
                        Off-the-shelf tools often fall short. That’s why GetRaise Technologies builds custom software designed to match your workflows, users, and business goals—no fluff, just function. Whether you need an internal operations tool, a B2B SaaS platform, or a data-driven customer portal, we deliver technology that works the way you need it to.
                    </p>

                </div>

                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-1/2 z-20">
                    <img
                        src={customSoftVision}
                        alt="About Us"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            </div>


            <div className='overflow-hidden '>
                <div className="mb-14 relative w-screen min-h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col px-4 md:px-10">


                    {/* Background Video */}
                    <img
                        src={bgCoverImg}
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"

                    />

                    <div className="flex items-center space-x-2 mb-2 mt-16">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                            Our Services
                        </h3>
                    </div>
                    <h2 className='text-[2.5rem] font-semibold mb-6'>Our Custom Software Services</h2>


                    <div className=''>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2  rounded-[20px]">
                            {services.map((service, index) => (
                                <div key={index} className="text-black rounded-[20px] w-full md:min-h-[250px] min-h-[170px] mb-1 relative"
                                    style={{
                                        background: (index % 2 === 0)
                                            ? "radial-gradient(157.79% 157.79% at 50% 50%, #FFFFFF 0%, #FFFCEB 100%)"
                                            : "#FFFCEB",
                                        border: (index % 2 === 0) ? "2px solid #FFF9D8" : "none",
                                    }}
                                >
                                    <div className='flex justify-between mx-auto p-4'>

                                        <p className='text-[30px] md:text-[40px] font-semibold text-[#CDCDCD]'>{index + 1}</p>
                                        <img src={service.image} className='h-[220px] w-[85%]' alt="" />
                                    </div>

                                    <div className=" px-4">

                                        <h3 className="text-xl font-semibold mt-2 px-2">{service.title}</h3>
                                        <p className='p-2 '>{service.para}</p>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                </div>
            </div>
            <CustomSoftMarque />

            <div className="px-4 py-10 lg:px-10 bg-white">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                        Our Development Process
                    </h3>
                </div>
                <h2 className='text-[2.5rem] font-semibold mb-6'>How We Build Software That Works</h2>
                <div className='hidden md:block'>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {steps.map((step, index) => (
                            <React.Fragment key={index} className="">
                                <div className={`${index === 2 ? 'flex flex-col' : 'flex'}`}>

                                    <div className="flex flex-col items-center text-center p-4">
                                        <img src={step.img} alt={step.title} className="mb-4 w-24 h-24" />
                                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.desc}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:flex justify-center items-center">
                                            <FaPlay className=
                                                {`${index === 2 ? 'text-yellow-500 text-sm mt-[10%] rotate-90' : index === 3 ? 'text-yellow-500 text-sm rotate-180' : index === 4 ? 'text-yellow-500 text-sm rotate-180' : 'text-yellow-500 text-sm mt-[40%]'}`}

                                            />
                                        </div>
                                    )}
                                </div>

                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* Mobile version arrows */}
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    {stepsTwo.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center text-center p-4">
                                <img src={step.img} alt={step.title} className="mb-4 w-24 h-24" />
                                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <FaPlay className="text-yellow-500 text-sm rotate-90" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>


            <TestimonialCarousel />
        </div>
    )
}

export default CustomSofts
