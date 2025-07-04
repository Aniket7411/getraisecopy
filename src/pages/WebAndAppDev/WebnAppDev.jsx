import React, { useState } from 'react'
import './webnAppDev.css'
import { motion } from "framer-motion";
import webnappVideo from '../../assets/webnappbgVideo.mp4'
import objects from '../../assets/objects.svg'
import downArr from '../../assets/downArr.svg'
import TechStackAnimation from '../../components/TechStackAnimation/TechStackAnimation';




const WebnAppDev = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        {
            question: "Custom-Built Solutions",
            answer:
                "We don’t believe in one-size-fits-all. Every solution is designed around your business goals.",
        },
        {
            question: "Full-Cycle Development",
            answer: "From discovery to deployment and support, we handle every stage of your software journey in-house.",
        },
        {
            question: "Cross-Platform Expertise",
            answer: "We build for web, mobile, and cloud—ensuring seamless experiences across all devices and platforms.",
        },
        {
            question: "Scalable & Secure",
            answer: "Our solutions are built to grow with your business while keeping your data protected at every level.",
        },
        {
            question: "Agile Approach",
            answer: "We follow agile methodologies to deliver fast, flexible, and feedback-driven development at every step.",
        },

    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='mt-[65px]'>
            <div className=' overflow-hidden '>
                {/* <div className='relative webnAndAppBg w-screen h-[100vh] bg-no-repeat bg-cover bg-center text-center lg:mb-20'> */}
                <div className='mb-14 relative w-screen md:h-[102vh] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden'>

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    >
                        <source src={webnappVideo} type="video/mp4" />

                    </video>
                    {/* <p className='text-[#FDEF9E] mb-2 md:mb-3 mt-15px' style={{
                        fontSize: '20px',
                        fontWeight: '400',
                    }}>Resource Allocation and Staff Augmentation</p> */}

                    <motion.div
                        className="w-[85%]"
                        initial={{ opacity: 0.3, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <h1 className='text-black text-[3rem] md:text-[4rem] lg:text-[6rem] leading-tight lg:leading-[100px] mb-4' style={{
                            fontWeight: '700',
                        }}>Innovative Digital Solutions for <span className='text-[#E2B10F]'>
                                Tomorrow’s Businesses
                            </span>
                        </h1>
                        <p className='text-[20px] w-[80%] mx-auto'>At Getraise Technologies, we specialize in building high-performance websites and mobile applications that are tailored to help businesses scale and succeed. From custom web platforms to sleek, intuitive mobile apps — we turn your ideas into powerful digital experiences.</p>
                    </motion.div>
                </div>

            </div>
            <div className='px-12'>
                <div className='flex gap-2 mb-2'>
                    <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                    <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                    <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                    <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>

                </div>
                <h2 className='md:w-[58%] text-[40px] font-semibold mb-4' style={{
                    fontFamily: 'poppins'
                }}>Why Choose GetRaise for Web & App Development?</h2>

                <div className=" flex flex-col md:flex-row gap-12" style={{
                    // marginTop:'-25rem',

                }}>
                    {/* Right - Text Content */}
                    <div className="w-full md:w-1/2 z-20 min-h-[85vh] flex items-center">
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 px-2 py-4 shadow-md rounded-md ${activeIndex === index ? "bg-gray-100 shadow-md" : "bg-white"
                                        }`}
                                >
                                    <button
                                        className={`w-full text-left text-md font-medium ${activeIndex === index ? "text-sky-400" : "text-gray-800"
                                            } flex justify-between items-center cursor-pointer`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {faq.question}
                                        <span
                                            className={`ml-2 me-2 transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                                } transition-transform duration-300`}
                                        >
                                            <img src={downArr} alt="" />
                                        </span>
                                    </button>
                                    {/* {activeIndex === index && (
                                        <p className="mt-2 text-gray-700">{faq.answer}</p>
                                    )} */}

                                    <div
                                        className={`overflow-hidden transition-all duration-600 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>

                                </div>
                            ))}
                            {filteredFaqs.length === 0 && (
                                <p className="text-gray-500">No FAQs match your search query.</p>
                            )}
                        </div>

                    </div>

                    {/* Left - Image Carousel */}
                    <div className="relative w-full md:w-1/2 z-20 flex items-center justify-center">
                        <img
                            src={objects}
                            alt="webnApp"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>




            <TechStackAnimation />
        </div>
    )
}

export default WebnAppDev
