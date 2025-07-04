import React from 'react'
import ra3 from '../../assets/RA3.svg'
import RA3People from '../../assets/RA3People.svg'
import yellowBottomTriangle from '../../assets/yellowBottomTriangle.svg'
import yellowTopTriangle from '../../assets/yellowTopTriangle.svg'
import invertedComma from '../../assets/invertedCommaLeft.svg'
import invertedCommaEnd from '../../assets/commaEnd.svg'




import './ResourceAllocSecOne.css'

const ResourceAllocSecOne = () => {
    return (
        <div className="w-full bg-white my-6">
            {/* Background Text */}

            {/* Content Wrapper */}
            <div className="z-10 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]">
                {/* Right - Text Content */}
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-x-2 mb-2">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h3 className="text-xl md:text-4xl font-bold ml-2 mb-0 augmenHeading">Resource Allocation</h3>
                    </div>
                    <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',

                        }}
                    >
                        We specialize in delivering flexible, scalable, and efficient resource allocation and staff augmentation solutions that empower businesses to access the right expertise precisely when needed. Whether you're seeking short-term project-based talent, long-term support, or dedicated teams, our tailored workforce solutions ensure seamless integration and optimized performance to keep you ahead in a competitive market.
                    </p>
                </div>

                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src={ra3}
                        alt="About Us"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className='md:relative'>
                <img src={yellowTopTriangle} className='lg:mt-[-5rem] hidden md:block' alt="" />
                <img src={RA3People} alt="" className='hidden md:block' />
                <img src={yellowBottomTriangle} alt="" className='hidden md:block' />
                <div className='md:absolute top-8 left-0 right-0'>

                    <p className='text-lg md:text-[30px] px-6 md:px-16 font-light'>
                        <span>
                            <img src={invertedComma} alt="" />
                        </span>
                        Our approach focuses on reducing hiring time, optimizing costs, and enhancing operational efficiency through seamless collaboration, enabling your business to scale effortlessly...
                        <span>
                            <img src={invertedCommaEnd} alt="" />
                        </span>
                    </p>


                </div>

            </div>

        </div>
    )
}

export default ResourceAllocSecOne
