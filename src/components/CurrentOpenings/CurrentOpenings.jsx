import React, { useState } from 'react'


import learning from "../../assets/learning.svg"
import construction from "../../assets/construction.svg"
import clinics from "../../assets/clinics.svg"
import services from "../../assets/services.svg"
import retail from "../../assets/retail.svg"
import arup from "../../assets/arup.png"
import { useNavigate } from 'react-router-dom'


const CurrentOpenings = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    //   const naviagte = useNavigate()
    const Navigate = useNavigate();



    const assignments = [
        // { text: "Senior Developer", info: "In office - Full time", link: "senior-developer" },
        // { text: "Video Editor", info: "In office - Full time", link: "video-editor" },
        // { text: "Business Development Manager", info: "Remote / Office-Based", link: "business-development-manager" },
        { text: "Project Manager (AI)", info: "In office - Full time", link: "project-manager-ai" },
        { text: "Project Manager (UI)", info: "In office - Full time", link: "project-manager-ui" },
        { text: "Senior AI Developer", info: "Remote / Office-Based", link: "senior-ai-developer" },
        { text: "Senior Backend Developer", info: "Remote / Office-Based", link: "senior-backend-developer" },
        { text: "Senior Frontend Developer", info: "Remote / Office-Based", link: "senior-frontend-developer" },
        { text: "AI Developer", info: "In office - Full time", link: "ai-developer" },
        { text: "Frontend Developer", info: "In office - Full time", link: "frontend-developer" },
        { text: "Backend Developer", info: "In office - Full time", link: "backend-developer" },
        { text: "DevOps Lead", info: "Remote / Office-Based", link: "devops-lead" },
        { text: "Junior DevOps Developer", info: "In office - Full time", link: "junior-devops-developer" },
        { text: "UI/UX Head", info: "Remote / Office-Based", link: "ui-ux-head" },
        { text: "UI Designer", info: "In office - Full time", link: "ui-designer" },
        { text: "Quality Analyst Lead", info: "Remote / Office-Based", link: "quality-analyst-lead" },
        { text: "Quality Analyst", info: "In office - Full time", link: "quality-analyst" },
        { text: "Senior Data Analyst", info: "Remote / Office-Based", link: "senior-data-analyst" },
        { text: "Data Analyst", info: "In office - Full time", link: "data-analyst" },
        { text: "Customer Support Executive", info: "In office - Full time", link: "customer-support-executive" },
        { text: "Senior Blockchain Developer", info: "Remote / Office-Based", link: "senior-blockchain-developer" },
        { text: "Junior Blockchain Developer", info: "In office - Full time", link: "junior-blockchain-developer" }
    ];


    return (
        <>
            <div className="w-full mx-auto py-6">
                {/* <h2 className="text-xl font-semibold mb-4 px-16">What we offer</h2> */}
                {assignments.map((item, index) => (
                    <>
                        <hr className='my-2' />
                        <div
                            onClick={() => { Navigate(`/jobs/${item.link}`) }}
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4  text-3xl transition-all duration-500 hover:bg-[#FDEF9E66] cursor-pointer pl-2 py-2 items-center"
                            style={{ borderColor: "#B7B7B7" }}
                            onMouseEnter={() => setHoveredItem(item.image)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div>
                                <h3 className="lg:text-3xl text-xl font-serif lg:mt-0 mt-2">{item.text}</h3>
                            </div>
                            <div>
                                <p className="text-sm text-center text-[#000]">{item.info}</p>
                            </div>
                            <div className='flex items-center justify-end'>
                                <p className="text-sm text-[#000]">
                                    Show Details
                                </p>
                                <img src={arup} alt="" />

                            </div>




                        </div>
                    </>

                ))}
            </div>
        </>

    )
}

export default CurrentOpenings