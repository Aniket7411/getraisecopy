



// ServicesSection.js
// import React from 'react';
// import { ServicesSection } from '../../components/CloudServices/CloudServices';
// import CloudCard from '../../components/Clouds/Clouds';

// const CloudServicesPage = () => {
//   return (
//     <div className="flex flex-wrap justify-center items-center px-4 py-10 relative">
//       {ServicesSection.map((cloud, index) => (
//         <CloudCard
//           key={index}
//           svgPath={cloud.svgPath}
//           icon={cloud.icon}
//           title={cloud.title}
//           description={cloud.description}
//           style={cloud.style}
//         />
//       ))}
//     </div>
//   );
// };

// export default CloudServicesPage;


import React from "react";
// import CloudCard from "./CloudCard";
import { FaCloud, FaLock, FaTools, FaServer, FaSync, FaChartLine } from "react-icons/fa";

import cloud1 from "../../assets/cloud (1).svg";
import cloud2 from "../../assets/cloud (2).svg";
import cloud3 from "../../assets/cloud (3).svg";
import cloud4 from "../../assets/cloud (4).svg";
import cloud5 from "../../assets/cloud (5).svg";
import cloud6 from "../../assets/cloud (6).svg";
import CloudCard from "../../components/CloudServices/CloudServices";
import cloudsVideo from '../../assets/cloudsVideo.mp4'
import { motion } from "framer-motion";
import cloudMan from '../../assets/cloudMan.svg'

import career from '../../assets/career1.png'
import wcuIcon1 from '../../assets/cl01.svg'
import wcuIcon2 from '../../assets/cl (1).svg'
import wcuIcon3 from '../../assets/cl (4).svg'
import wcuIcon4 from '../../assets/cl (3).svg'
import wcuIcon5 from '../../assets/cl (2).svg'


import impact01 from '../../assets/impact01.svg'
import impact02 from '../../assets/impact02.svg'
import impact03 from '../../assets/impact03.svg'
import impact04 from '../../assets/impact04.svg'
import impact05 from '../../assets/impact05.svg'
import TestimonialCarousel from "../../components/Feedback/Feedback";

import cloudCons from '../../assets/cloudCons.svg'
import devOpsAuto from '../../assets/devOpsAuto.svg'
import cloudSec from '../../assets/cloudSec.svg'
import managCloudServices from '../../assets/managCloudServices.svg'
import cloudNativeApp from '../../assets/cloudNativeApp.svg'
import cloudMigration from '../../assets/cloudMigration.svg'
import { useNavigate } from "react-router-dom";


const features = [
  {
    title: 'Platform Agnostic',
    desc: 'AWS, Azure, GCP — we work with all major cloud providers.',
    icon: wcuIcon1,
  },
  {
    title: 'Scalable Architecture',
    desc: 'Built for growth, without bottlenecks.',
    icon: wcuIcon2,
  },
  {
    title: 'Certified Cloud Experts',
    desc: 'Our engineers bring real-world, enterprise-level expertise.',
    icon: wcuIcon3,
  },
  {
    title: 'Secure by Design',
    desc: 'Cloud environments hardened against modern threats.',
    icon: wcuIcon4,
  },
  {
    title: '24/7 Support & Monitoring',
    desc: 'Always-on coverage and optimization.',
    icon: wcuIcon5,
  },
];

const cloudImpact = [

  {
    desc: "40% lower IT maintenance costs",
    bg: impact01,
  },
  {
    desc: "2x faster deployment cycles",
    bg: impact02,
  },
  {
    desc: "Enteprise-grade security",
    bg: impact03,
  },
  {
    desc: "On-demand scalability during traffic spikes",
    bg: impact04,
  },
  {
    desc: "Future-ready infrastructure for innovation",
    bg: impact05,
  },
]

const cloudCards = [
  {
    svgSrc: cloud1,
    icon: cloudCons,
    title: "Cloud Consulting & Strategy",
    description: "We help you choose the right cloud platform and architecture to match your goals—whether it's AWS, Azure, or Google Cloud.",
    className: "lg:mt-5 lg:ml-5 lg:z-[5]",
  },
  {
    svgSrc: cloud2,
    icon: cloudMigration,
    title: "Cloud Migration",
    description: "We help you migrate to the cloud with minimal disruption and maximum efficiency.",
    className: "lg:-mt-16 lg:-ml-10 lg:z-[6]",
  },
  {
    svgSrc: cloud3,
    icon: devOpsAuto,
    title: "DevOps & Automation",
    description: "Accelerate deployment cycles, automate infrastructure, and maintain high availability using CI/CD, Docker, Kubernetes, and Terraform.",
    className: "lg:mt-[75px] lg:-ml-[70px] lg:z-[8]",
  },
  {
    svgSrc: cloud4,
    icon: cloudNativeApp,
    title: "Cloud-Native App Development",
    description: "Build resilient, scalable applications using microservices and serverless architecture.",
    className: "lg:-mt-[90px] lg:-ml-[50px] lg:z-[5]",
  },
  {
    svgSrc: cloud5,
    icon: cloudSec,
    title: "Cloud Security & Compliance",
    description: ["Protect your systems with firewalls, encryption, IAM policies, and ensure data compliance", " (GDPR, HIPAA, etc.)."],
    className: "lg:-mt-[280px] lg:-ml-[140px] lg:z-[7]",
  },
  {
    svgSrc: cloud6,
    icon: managCloudServices,
    title: "Managed Cloud Services",
    description: "We monitor, maintain, and optimize your cloud environments so your team can focus on what matters—your business.",
    className: "lg:-mt-[30px] lg:-ml-[170px] lg:z-[8]",
  },
];

const ServicesSection = () => {

    const Navigate = useNavigate();

  return (
    <div className='mt-[65px]'>
      <div className=' overflow-hidden '>
        <div className="mb-14 relative w-screen h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src={cloudsVideo} type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/0 via-white/20 to-white z-0" />

          {/* Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0.3, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className='text-black text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight lg:leading-[90px] mb-4 font-bold'>
              Scale Smarter. Operate Faster.
            </h1>
            <h1 className='text-[#E2B10F] text-[2.5rem] md:text-[3.5rem] lg:text-[6rem] leading-tight lg:leading-[100px] mb-4 font-bold'>
              Go Cloud-First.
            </h1>
            <p className='text-[16px] md:text-[20px] font-medium w-[80%] mx-auto'>
              At Getraise Technologies, we help businesses modernize their infrastructure with secure, scalable, and high-performance cloud solutions—built to grow as you grow.
            </p>
          </motion.div>
          <div className='flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30'>
            {/* <button className='font-medium bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-black hover:text-white' style={{
              border: '1px solid #E2B10F'
            }}
              onClick={() => { Navigate('/services') }}

            >Talk to a Cloud Expert</button> */}



            <button className='bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-[#E2B10F] hover:text-white font-medium' style={{
                        border: '1px solid #E2B10F'
                    }}
                        onClick={() => { Navigate('/contact-us') }}

                    >Talk to a Cloud Expert</button>
            <button className='bg-[#E2B10F] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#E2B10F] cursor-pointer font-medium' onClick={() => { Navigate('/contact-us') }}>Book a Free Consultation</button>

          </div>
        </div>

      </div>


      <div className="px-6 lg:px-12 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]" style={{
        // marginTop:'-25rem',

      }}>
        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 z-20">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
              What We Do
            </h3>
          </div>
          <div className="flex items-center gap-x-2 mb-2">
            {/* <div className="w-5 h-5 bg-yellow-500 rounded-full"></div> */}
            <h3 className="text-4xl font-bold mb-0 augmenHeading">End-to-End Cloud Solutions Tailored to Your Business</h3>
          </div>
          <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
            style={{
              fontSize: '16px',
              fontWeight: '500',

            }}
          >
            We offer flexible, reliable, and secure cloud services that help businesses reduce IT overhead, enhance agility, and stay scalable in real-time. Whether you're migrating from on-premise or starting cloud-native, we make it seamless.
          </p>

        </div>

        {/* Left - Image Carousel */}
        <div className="relative w-full md:w-1/2 z-20">
          <img
            src={cloudMan}
            alt="About Us"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>





      <div className="flex items-center space-x-2 mb-5 px-12">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
          Our Cloud Services
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center px-4 pb-10 relative">
        {cloudCards.map((cloud, index) => (
          <CloudCard key={index} {...cloud} />
        ))}
      </div>


      <div className="relative w-full bg-white py-12 px-4 md:px-12">
        <div className="flex items-center space-x-2 mb-5">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
            Why Choose Us
          </h3>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-start">Why Choose GetRaise Technologies?</h2>



        <div className="w-full rounded-xl overflow-hidden mb-6">
          <img
            src={career} // replace with your own image
            alt="Team working"
            className="w-full h-auto object-cover bg-no-repeat"
          />
        </div>

        <div className="-mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                style={{
                  border: '1.5px solid #CECECE'
                }}
              >
                <div className="bg-yellow-200 p-3 rounded-full mb-4">
                  <img src={feature.icon} alt="" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 md:px-12 mb-12">

        <div className="flex items-center space-x-2  mb-5">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
            Our Cloud Impact for Your Business
          </h3>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          {cloudImpact.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-center justify-start text-left transition-all"
              style={{
                border: '1.5px solid #CECECE'
              }}
            >

              <img src={feature.bg} alt="" />


              <p className="font-medium text-[20px] text-center text-black" style={{
                fontFamily:'Poppins'
              }}>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>




      <TestimonialCarousel />
    </div>

  );
};

export default ServicesSection;
