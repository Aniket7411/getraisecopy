import React, { useEffect, useRef, useState } from 'react'
import './aboutus.css'
import rect30 from '../../assets/KV.svg'
import li from '../../assets/li.svg'
import intelli from '../../assets/intelli.svg'
import automation from '../../assets/automation.svg'
import resources from '../../assets/resources.svg'
import solutions from '../../assets/solutions.svg'
// import expBoard from '../../assets/expBoard.svg'
import Line7 from '../../assets/Line 7.svg'
import toprightjoin from '../../assets/topRight.svg'
import bottomleftjoin from '../../assets/bottomLeft.svg'
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useNavigate } from 'react-router-dom'
import videoToP from '../../assets/website.mp4'
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import walkingGirl from '../../assets/walkinglady.png'
import workingBoys from '../../assets/workingboys.png'
import discussingladies from '../../assets/discussingladies.png'
import workinglady from '../../assets/workinglady.png'
import gtThumbnail from '../../assets/gtThumbnail.png'









const AboutUs = () => {
    const [customerVisits, setCustomerVisits] = useState(0);
    const [satisfactionRate, setSatisfactionRate] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);
    const Navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 50% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setCustomerVisits(12000); // Target: 1200K+
                setSatisfactionRate(92); // Target: 92%
                setAverageRating(4.5);   // Target: 4.5
            }, 500); // Delay for smoother animation
        }
    }, [isVisible]);

    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };


    return (
        <div className='mb-16 '>
            <div className='aboutUsBg bg-no-repeat bg-cover bg-center text-center lg:mb-25 min-h-[100vh] md:min-h-[85vh]'>
                <h1 className='text-[3rem] md:text-[5rem] lg:text-[6rem]' style={{
                    fontWeight: '700',

                }}>About Us</h1>
                <p className='mb-5 mx-auto w-[75%] md:w-[60%]' style={{
                    fontSize: '1.25rem',
                    fontWeight: '400',

                }}>Getraise Technology creates digital experiences that advance businesses, not simply technology.
                    We are a full-stack IT powerhouse that is motivated by effect on the real world, creativity, and innovation. We are here to engineer your growth, whether you are an organization ready to scale or a startup with a spark.</p>
                <div className='flex justify-center gap-4 mb-10'>
                    <button className='bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-black hover:text-white' style={{
                        border: '1px solid black'
                    }}
                        onClick={() => { Navigate('/services') }}

                    >Explore Our Services</button>
                    <button className='bg-black px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-white hover:bg-transparent hover:text-black border border-black cursor-pointer' onClick={() => { Navigate('/contact-us') }}>Get In Touch</button>

                </div>




            </div>
            <div className='hidden lg:block w-[100%] -mt-[12rem] mb-12' style={{
                padding: '0 3rem'
            }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  growGrid" style={{
                    // minHeight:'30vh'
                }}>
                    <div className='flex flex-col items-center'
                        style={{
                            // backgroundColor: '#D9D9D9'
                        }}
                    >
                        <img src={walkingGirl} className='h-[240px] w-[270px]' alt="" />

                    </div>

                    <div className='flex flex-col items-center'
                        style={{
                            // backgroundColor: '#D9D9D9'
                        }}
                    >
                        <img src={workingBoys} alt="" className='h-[300px] w-[280px]' />

                    </div>

                    <div className='flex flex-col items-center'
                        style={{
                            // backgroundColor: '#D9D9D9'
                        }}
                    >
                        <img src={discussingladies} alt="" className='h-[240px] w-[270px]' />

                    </div>



                    <div className='flex flex-col items-center'
                        style={{
                            // backgroundColor: '#D9D9D9'
                        }}
                    >
                        <img src={workinglady} alt="" className='h-[300px] w-[280px]' />

                    </div>

                </div>

            </div>
            <div className="block w-full lg:hidden">
                <div
                    className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 place-items-center"
                >
                    <div className="flex flex-col items-center justify-center rounded-2xl max-w-xs p-4  ">
                        <img src={walkingGirl} alt="Walking Girl" className="w-full h-auto object-contain" />
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl max-w-xs p-4  ">
                        <img src={workingBoys} alt="Working Boys" className="w-full h-auto object-contain" />
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl max-w-xs p-4  ">
                        <img src={discussingladies} alt="Discussing Ladies" className="w-full h-auto object-contain" />
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl max-w-xs p-4">
                        <img src={workinglady} alt="Working Lady" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>



            <h1 className='weMakeSureAbout text-center mx-auto mb-4 md:w-[80%]'>We make sure your idea & creation delivered properly</h1>
            <p className='atgettech mb-10 text-center mx-auto md:w-[60%]'>At Getraise Technologies, we blend innovation with expertise to build cutting-edge digital solutions. From AI-driven platforms to scalable business solutions, we empower companies to thrive in an ever-evolving digital landscape.</p>

            <div className="w-full pb-20 bg-white whoWeAre">
                {/* Background Text */}

                {/* Content Wrapper */}
                <div className="z-10 flex flex-col md:flex-row items-center gap-12 m-auto min-h-[50vh]">
                    <div className="relative w-full md:w-1/2">

                        <img
                            src={rect30}
                            alt="About Us"
                            className="w-full rounded-lg object-cover"
                        />
                        <div className='absolute bottom-[-10px] left-0 right-0 bg-white w-[85%] m-auto rounded-t-3xl p-5 text-center' style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            fontStyle: 'italic'
                        }}>
                            We don’t just create software—we <br /> engineer success.

                        </div>

                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full md:w-1/2">
                        {/* Bio Title */}


                        {/* Description */}

                        <h1 className='text-[2rem] font-[500]'>Who We Are</h1>
                        <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"

                        >
                            We are a technology-driven company committed to empowering
                            businesses with scalable solutions, expert-driven innovation, and
                            seamless digital transformation. From custom software development to
                            tailored business solutions, we provide the expertise and technology
                            that help brands grow, adapt, and lead in an ever-evolving market.
                        </p>
                        <div>
                            <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Offer flexible resource allocation for businesses</div>
                            <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Build custom web, mobile, and SaaS solutions</div>
                            <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Develop AI & automation platforms</div>
                            <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Provide scalable e-commerce solutions</div>
                            <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Deliver ready-to-launch white-label solutions</div>

                        </div>
                    </div>
                </div>
            </div>
            <h1 className='weHelpBusinessTo my-12'>We help bussiness to <br /> grow faster and bigger</h1>
            <div className='mb-12' style={{
                padding: '0 3rem'
            }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center growGrid" style={{
                }}>
                    <div className='flex flex-col items-center justify-center'>
                        <div
                            className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                            style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                        >
                            <img src={intelli} alt="Image 1" />
                        </div>
                        <p className='text-center'>Deliver <span className='font-bold'>
                            scalable and <br /> intelligent solutions
                        </span>
                            for businesses.</p>

                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div
                            className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                            style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                        >
                            <img src={automation} alt="Image 2" />
                        </div>
                        <p className='text-center'>Help companies leverage <span className='font-bold'>
                            AI, automation, and digital transformation.
                        </span>
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>


                        <div
                            className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                            style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                        >
                            <img src={resources} alt="Image 3" />
                        </div>
                        <p className='text-center'>Provide <span className='font-bold'>
                            expert resources <br />
                        </span>through flexible allocation models.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>

                        <div
                            className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                            style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                        >
                            <img src={solutions} alt="Image 4" />
                        </div>
                        <p className='text-center'>Offer <span className='font-bold'>
                            white-label <br /> solutions
                        </span> to accelerate <br /> business growth.</p>
                    </div>

                </div>

            </div>

            <div className='backg p-8'
                ref={statsRef}
            >
                <h1
                    className='lg:mb-[-2rem] text-3xl md:text-5xl md:font-bold'
                >Experienced <br /> experts are giving <br /> advices.</h1>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:place-items-center'>
                    <div><p className='mb-5 mt-4'>
                        Get expert guidance you can rely on. Our seasoned professionals bring years of experience and deep industry knowledge to provide practical advice tailored to your needs. Whether you're navigating challenges or planning your next steps, trust us to deliver insights that drive results and empower your success.                    </p>
                        {/* <button className='bg-black p-4 rounded-2xl text-white'>Learn More</button> */}
                    </div>
                    <div className='h-auto border-gray relative'>
                        <video
                            ref={videoRef}
                            src={videoToP}
                            poster={gtThumbnail}
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-auto rounded-3xl"
                        />
                        <button
                            onClick={toggleMute}
                            className="cursor-pointer absolute bottom-2 right-2 bg-black text-white px-4 py-1 rounded-full text-sm"
                        >
                            {isMuted ? <IoVolumeMuteOutline />
                                : <GoUnmute />
                            }
                        </button>
                    </div>
                    <div className='flex gap-4'>
                        <img src={Line7} alt="" />
                        <div className="flex flex-col gap-2 ">
                            <div className="expNumbersDiv text-center">
                                <span className=" text-xl md:text-4xl font-bold text-gray-800">
                                    <Odometer value={customerVisits} format="d" duration={2000} />
                                </span>
                                <span className=" text-xl md:text-4xl font-bold text-gray-800">+</span>
                                <p className="font-bold text-[#896E33] text-lg">Customer Visits</p>
                            </div>

                            <div className="expNumbersDiv text-center">
                                <span className=" text-xl md:text-4xl font-bold text-gray-800">
                                    <Odometer value={satisfactionRate} format="d" duration={2000} />
                                </span>
                                <span className="text-4xl font-bold text-gray-800">%</span>
                                <p className="font-bold text-[#896E33] text-lg">Satisfaction Rate</p>
                            </div>

                            <div className="expNumbersDiv text-center">
                                <span className="text-4xl font-bold text-gray-800">
                                    <Odometer value={averageRating} format="d" duration={2000} />
                                </span>
                                <p className="font-bold text-[#896E33] text-lg">Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-12 mt-16' style={{
                // padding: '4rem 3rem 0 3rem',
                height: '70vh'
            }}>
                <div className='relative bg-[#222222] rounded-b-3xl rounded-l-3xl flex flex-col items-center justify-center text-center min-h-[60vh] text-white px-2'>
                    <h1 className='text-5xl font-bold mb-5 z-10'>Join Our Team</h1>
                    <p className='mb-5'>We’re always looking for talented individuals to join our expert network and build cutting-edge solutions.</p>
                    <button onClick={() => { Navigate("/career") }} className='border border-white hover:border-[#FDEF9E] hover:bg-[#FDEF9E] hover:text-black py-5 px-8 rounded-3xl z-10' style={{
                        cursor: 'pointer'
                    }}>
                        Explore Careers
                    </button>

                    <div className='absolute top-0 right-0'>
                        <img src={toprightjoin} alt="" />
                    </div>
                    <div className='absolute bottom-0 left-0'>
                        <img src={bottomleftjoin} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
