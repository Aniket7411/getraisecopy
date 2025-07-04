import React from 'react'
import ReqAnal from '../../assets/ReqAnalysis.svg'
import seamlessInteg from '../../assets/seamlessInteg.svg'
import talentMatching from '../../assets/talentMatching.svg'
import continSupport from '../../assets/continuousSupport.svg'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'




const OurProcess = () => {

    const steps = [
        {
            id: 1,
            number: '1',
            title: 'Requirement Analysis',
            description: 'We work closely with you to understand your business objectives and assess the skill sets required.',
            image: ReqAnal,
        },
        {
            id: 2,
            number: '2',
            title: 'Talent Matching',
            description: 'Our team allocates the best-suited professionals from our highly skilled talent pool, ensuring perfect alignment with your project goals.',
            image: talentMatching,
        },
        {
            id: 3,
            number: '3',
            title: 'Seamless Integration',
            description: 'The selected professionals integrate smoothly with your in-house team, ensuring a cohesive and productive workflow.',
            image: seamlessInteg,
        },
        {
            id: 4,
            number: '4',
            title: 'Continuous Support',
            description: 'We provide ongoing support and performance tracking to ensure optimal results and seamless collaboration.',
            image: continSupport,
        },
    ];

    const Navigate = useNavigate();

    return (
        <div className=''>
            <div className='flex items-end justify-between mb-16'>
                <div>
                    <p className='text-3xl md:text-4xl lg:text-6xl xl:text-9xl font-medium'>
                        Our Process
                    </p>
                </div>
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className='md:text-2xl font-medium'>
                        – Seamless & Efficient
                    </p>

                </motion.div>

            </div>

            {steps.map((step) => (
                <div
                    key={step.id}
                    style={{ backgroundColor: '#EBEBEB' }}
                    className="flex p-4 md:p-8 rounded-lg mb-4"
                >
                    <div>
                        <div className="flex justify-between w-full gap-x-2  mb-8">
                            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium md:w-[54%] ">
                                {step.number}
                            </div>
                            <div className='md:w-[46%]'>
                                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
                                    {step.title}
                                </div>
                                <div className="mt-4">{step.description}</div>
                            </div>
                        </div>
                        <img src={step.image} className="rounded-lg" alt={step.title} />
                    </div>
                </div>
            ))}

            <button className="flex mx-auto cursor-pointer align-center px-4 text-[#FDEF9E] py-2 border bg-[#000] border-black rounded-full hover:bg-[#FDEF9E] hover:text-[#000] transition mt-10 mb-8" onClick={() => {
                Navigate("/contact-us")
            }}>
                Request Talent Now
            </button>

        </div>
    )
}

export default OurProcess
