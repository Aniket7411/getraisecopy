import React from 'react'

import staffAug from '../../assets/staffAug.svg'
import li from '../../assets/li.svg'

const StaffAugmentation = () => {
    return (
        <div className="w-full pb-20 bg-white mt-16">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h3 className="text-2xl md:text-4xl font-bold ml-2 mb-0 augmenHeading">Staff Augmentation</h3>
            </div>

            <div className="z-10 flex flex-col md:flex-row items-center gap-5 m-auto  md:py-8">
                <div className="relative w-full md:w-[45%]">

                    <h3 className="text-2xl md:text-4xl text-gray-900  mb-0 augmenHeading">Bridge Skill Gaps, Expand Your Workforce Efficiently</h3>


                </div>

                <div className="w-full md:w-[55%]">
                    <p>Our Staff Augmentation services empower organizations to scale teams quickly, bridge skill gaps, and enhance project efficiency without the overhead of permanent hires. We provide highly skilled professionals who work as an extension of your team, ensuring smooth collaboration and faster project delivery.</p>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="z-10 flex flex-col md:flex-row items-center gap-12 m-auto min-h-[50vh]">
                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-[45%]">
                    {/* <div className="flex items-center space-x-2 mb-2">
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
                            </div> */}
                    <img
                        src={staffAug}
                        alt="About Us"
                        className="object-cover"
                    />

                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-[55%]">
                    {/* Bio Title */}


                    {/* Description */}
                    <div className='lg:bg-[#FDEF9E] h-[26px] px-1 relative mb-8 xl:mb-4'>
                        <h1 className='augmenHeading absolute -mt-5' style={{
                            fontSize: '24px',
                            fontWeight: '500',
                        }}>Key Benefits of Our Staff Augmentation:</h1>

                    </div>

                    <div>
                        {/* <div className='flex items-start mb-2'><span className='me-3'><img src={li} alt="" /></span> <strong>Scalability: </strong> Expand your workforce as needed without long-term commitments.</div>
                        <div className='flex items-start mb-2'><span className='me-3'><img src={li} alt="" /></span> <strong> Reduced Hiring Time: </strong>  onboard skilled professionals for immediate project needs.</div>
                        <div className='flex items-start mb-2'><span className='me-3'><img src={li} alt="" /></span> <span className='me-1'><strong>Cost Efficiency: </strong></span>Optimize budgets by avoiding full-time hiring costs.</div>
                        <div className='flex items-start mb-2'><span className='me-3'><img src={li} alt="" /></span> <span className='me-1'><strong> Specialized Skill Sets: </strong></span> Access domain-specific expertise to meet project demands.</div> */}

                        {/* <ul>
                            <li className='flex items-start'><span className='me-3'><img src={li} alt="" /></span> <strong>Scalability: </strong> Expand your workforce as needed without long-term commitments</li>
                            <li className='flex items-start'><span className='me-3'><img src={li} alt="" /></span> <strong>Reduced Hiring Time:</strong>Quickly onboard skilled professionals for immediate project needs.</li>
                            <li className='flex items-start'><span className='me-3'><img src={li} alt="" /></span> <strong>Cost Efficiency: </strong>Optimize budgets by avoiding full-time hiring costs.</li>
                            <li className='flex items-start'><span className='me-3'><img src={li} alt="" /></span> <strong>Specialized Skill Sets:</strong>Access domain-specific expertise to meet project demands.</li>
                        </ul> */}
                        <ul>

                        <li className='flex gap-4 items-start mb-2'><img className='mt-1' src={li} alt="" /><span><strong>Scalability: </strong> Expand your workforce as needed without long-term commitments</span></li>
                        <li className='flex gap-4 items-start mb-2'><img  className='mt-1' src={li} alt="" /><span><strong>Reduced Hiring Time:</strong> Quickly onboard skilled professionals for immediate project needs.</span></li>
                        <li className='flex gap-4 items-start mb-2'><img  className='mt-1' src={li} alt="" /><span><strong>Cost Efficiency: </strong>Optimize budgets by avoiding full-time hiring costs.</span></li>
                        <li className='flex gap-4 items-start mb-2'><img  className='mt-1' src={li} alt="" /><span><strong>Specialized Skill Sets: </strong>Access domain-specific expertise to meet project demands.</span></li>
                        </ul>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default StaffAugmentation
