import React from 'react'
// import './whyrac.css'
import wcgt1 from '../../assets/wcgt1.svg';
import wcgt2 from '../../assets/wcgt2.svg';
import wcgt3 from '../../assets/wcgt3.svg';
import wcgt4 from '../../assets/wcgt4.svg';
import wcgt5 from '../../assets/wcgt5.svg';




const WhyChooseGrTwo = () => {
    return (
        <div className='text-start'>
            <h1 className='text-4xl font-bold'>Why Choose Getraise Technologies?</h1>
            <div class="flex flex-wrap justify-center gap-6 py-4">
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white shadow-sm rounded-xl p-6 relative overflow-hidden" style={{
                        border: '1px solid #E5E5E5'
                    }}

                >


                    <div className="z-10 text-center h-[200px]">
                        <img src={wcgt1} className="mx-auto mb-4 h-[200px]" alt="On-Demand Talent" />

                    </div>
                    <h2 className="mt-3 text-xl m-auto text-center font-bold text-black mb-4">100+ Solutions Deployed</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src={wcgt2} className="mx-auto mb-4 h-[200px]" alt="Flexible Engagement Models" />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4  m-auto">Global Clients in 12+ Countries</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src={wcgt3} className="mx-auto mb-4 h-[200px]" alt="Cost-Effective Workforce Solutions" />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">95% Client Retention Rate</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src={wcgt4} className="mx-auto mb-4 h-[200px]" alt="Flexible Engagement Models" />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">Security-First Development</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src={wcgt5} className="mx-auto mb-4 h-[200px]" alt="Flexible Engagement Models" />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">Innovation with User at the Core</h2>
                </div>

            </div>
            {/* <button  className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-4 mb-10">
                Explore Our Talent Pool
            </button> */}

        </div>
    )
}

export default WhyChooseGrTwo
