import React, { useState } from 'react'


import learning from "../../assets/learning.svg"
import construction from "../../assets/construction.svg"
import clinics from "../../assets/clinics.svg"
import services from "../../assets/services.svg"
import retail from "../../assets/retail.svg"
import startup from "../../assets/startup.svg"


const IndustriesWeServeDmPm = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    //   const naviagte = useNavigate()

    const assignments = [
        {
            text: "E-commerce & Retail",
            subline: "Enhancing online shopping experiences",
            info: "We help businesses build scalable platforms for seamless online transactions, personalized customer experiences, and optimized operations.",
            image: retail
        },
        {
            text: "Healthcare & Clinics",
            subline: "Empowering modern healthcare solutions",
            info: "We design applications for patient management, telemedicine, and healthcare analytics to improve care delivery and accessibility.",
            image: clinics
        },
        {
            text: "SaaS & Tech Startups",
            subline: "Driving innovation and growth",
            info: "We provide cutting-edge software solutions for startups, focusing on scalability, cloud integration, and market readiness.",
            image: startup
        },
        {
            text: "Real Estate & Construction",
            subline: "Transforming property management",
            info: "Our tools help streamline real estate operations, manage construction projects, and improve customer engagement with 3D visualization.",
            image: construction
        },
        {
            text: "Education & E-learning",
            subline: "Revolutionizing learning experiences",
            info: "We develop platforms for online courses, virtual classrooms, and collaborative tools to make education accessible to everyone.",
            image: learning
        },
        {
            text: "Local Businesses & Services",
            subline: "Supporting community enterprises",
            info: "Our solutions help local businesses establish their online presence, optimize services, and connect with their community effectively.",
            image: services
        }
    ];

    return (
        <>
            <section className="pt-8 text-black">
                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <h3 className="text-lg font-semibold text-gray-900 ml-2">Industries We Serve</h3>
                </div>
            </section>
            <div className="w-full mx-auto py-6">
                {/* <h2 className="text-xl font-semibold mb-4 px-16">What we offer</h2> */}
                {assignments.map((item, index) => (
                    <div
                        key={index}
                        className=" justify-between flex flex-wrap items-center border-b text-3xl  transition-all duration-500 hover:bg-[#FEEE99] cursor-pointer pl-2"
                        style={{ borderColor: "#B7B7B7" }}
                        onMouseEnter={() => setHoveredItem(item.image)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div>

                            <h3 className="lg:text-3xl text-xl font-serif lg:mt-0 mt-2">{item.text}</h3>
                            <p className="text-sm text-[#000]">{item.info}</p>
                        </div>
                        <img
                            src={item.image}
                            className={`border-amber-700 hidden lg:block transform w-64 h-44 mr-5 transition-opacity duration-700 rounded-lg ${hoveredItem === item.image ? "opacity-100" : "opacity-0"
                                }`}
                        />

                        <img
                            src={item.image}
                            className={`border-amber-700 lg:hidden  transform w-full my-4 h-44 mr-5 transition-opacity duration-700 rounded-lg `}
                        />



                    </div>
                ))}
            </div>
        </>

    )
}

export default IndustriesWeServeDmPm
