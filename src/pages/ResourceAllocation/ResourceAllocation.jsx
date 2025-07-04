import React from 'react'
import './resourceAllocation.css'
import StaffAugmentation from '../../components/StaffArgumentation/StaffAugmentation'
import WhyRac from '../../components/whyRAC/WhyRac'
import OurProcess from '../../components/OurProcess/OurProcess'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import ResourceAllocSecOne from '../../components/ResourceAllocSecOne/ResourceAllocSecOne'
import { motion } from "framer-motion";


const ResourceAllocation = () => {
    return (
        <div>
            <div className='mb-16 overflow-hidden'>
                <div className='relative resourcesBg w-screen h-[100vh] bg-no-repeat bg-cover bg-center text-center lg:mb-20'>
                    <p className='text-[#FDEF9E] mb-2 md:mb-3 mt-15px' style={{
                        fontSize: '20px',
                        fontWeight: '400',
                    }}>Resource Allocation and Staff Augmentation</p>

                    <motion.div
                        className="w-[85%]"
                        initial={{ opacity: 0.3, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <h1 className='text-white text-[3rem] md:text-[4rem] lg:text-[6rem] leading-tight lg:leading-[100px]' style={{
                            fontWeight: '700',
                        }}>Empower Your Business with the Right Talent at the Right Time</h1>
                    </motion.div>
                </div>
                <div className='whoWeAreStaffArg'>
                    <ResourceAllocSecOne />
                    <WhyRac />
                    <StaffAugmentation />
                    <OurProcess />
                </div>
                <IndustriesWeServe />

            </div>
        </div>

    )
}

export default ResourceAllocation
