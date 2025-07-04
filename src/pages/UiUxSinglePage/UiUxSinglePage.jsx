// import React from 'react'
// import headingVid from '../../assets/topVideo.mp4';
// import headingVidTwo from '../../assets/topVideoTwo.mp4';
// import roughPaint from '../../assets/roughPaint.svg'
// import './uiuxsinglepage.css'



// const UiUxSinglePage = () => {
//   return (
//     <>
//       <div className='mt-[70px]'>
//         <div className="flex-col">

//           <div className="h-[100vh] flex items-center w-full justify-between px-6 md:px-16 bg-white">
//             <div className="relative w-full  md:w-3/4 text-center md:text-left z-1">



//               <p className="bg pb-6">User-First Design That Drives Engagement</p>

//               <p className=" text-black text-base md:text-lg z-10 relative w-[70%]">
//                 At GetRaise Technologies, we craft beautiful, functional, and
//                 user-centric designs that elevate digital experiences and drive
//                 real business results.
//               </p>
//             </div>
//             <div className="  md:absolute right-0 w-[70%] h-[100vh] flex items-center">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className=""
//               // style={{ height: '100vh' }}
//               >
//                 <source src={headingVidTwo} type="video/mp4" />
//               </video>
//             </div>
//           </div>
//           {/* <img src={roughPaint} alt="" className='absolute   w-[100vw] z-10' /> */}
//         </div>


//       </div>
//     </>
//   )
// }

// export default UiUxSinglePage


import React, { useState } from 'react';
import headingVidTwo from '../../assets/topVideoTwo.mp4';
import roughPaint from '../../assets/roughPaint.svg';
import bigApple from '../../assets/litApple.png';
import litApple from '../../assets/bigApple.png';
import image from '../../assets/i.png'; // Replace with your image path
// import image1 from '../../assets/dServices2.svg';
import image2 from '../../assets/dServices2.svg';
import image3 from '../../assets/dServices3.svg';
import image4 from '../../assets/dServices4.svg';
import image5 from '../../assets/dServices5.svg';
import image6 from '../../assets/dServices6.svg';
import './uiuxsinglepage.css';
import FeatureCardSection from '../../components/UiUxWhyChooseUs/UiUxWhyChooseUs';
import OurDesignProcess from '../../components/OurDesignProcess/OurDesignProcess';
import TestimonialCarousel from '../../components/Feedback/Feedback';
import ScrollCarousel from '../../components/ScrollCarousel/Scrollcarousel';

const services = [
  { id: 1, title: 'User Research & Analysis', img: image },
  { id: 2, title: 'Wireframing & Prototyping', img: image2 },
  { id: 3, title: 'UI Design & Style Guides', img: image3 },
  // { id: 4, title: 'UX Design & Interaction' },
  // { id: 5, title: 'Responsive & Adaptive Design' },
  // { id: 6, title: 'Design System Creation' },
];
const servicesTwo = [
  { id: 4, title: 'User Research & Analysis', img: image4 },
  { id: 5, title: 'Wireframing & Prototyping', img: image5 },
  { id: 6, title: 'UI Design & Style Guides', img: image6 }, 
];

const UiUxSinglePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexTwo, setHoveredIndexTwo] = useState(null);


  return (
    <>

      <div className="relative w-full bg-white overflow-hidden mb-5 md:h-[135vh]">
        {/* Right Side Video (Full height, fixed to right) */}
        <div className="absolute right-0 top-[70px] h-[100vh] md:h-[105vh] w-full md:w-1/2 z-0 video-shadow">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[100vh] md:h-[105vh] w-full object-cover "
          >
            <source src={headingVidTwo} type="video/mp4" />
          </video>
        </div>

        {/* Rough Paint Overlay */}
        <img
          src={roughPaint}
          alt="paint mask"
          className="absolute bottom-7 md:bottom-0 left-0 w-full z-10 pointer-events-none"
        />

        {/* Content */}
        <div className="top-[70px] md:top-0 relative z-20 h-[100vh] md:min-h-[15vh] flex items-center px-6 md:px-10  md:bg-transparent bg-white/15 md:backdrop-blur-none backdrop-blur">
          <div className="w-full md:w-[70%] text-center md:text-left">
            <p className="bg-text bg pb-6">
              User-First Design That Drives Engagement
            </p>
            <p className="text-black text-base uiUxsuhHead w-full md:w-[75%] mx-auto md:mx-0">
              At GetRaise Technologies, we craft beautiful, functional, and
              user-centric designs that elevate digital experiences and drive
              real business results.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10">

        <div className="flex items-center space-x-2 mb-8">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
            What We Do
          </h3>
        </div>
        <div className='relative z-10'>
          <h1 className='text-[#00000033] text-[3rem] md:text-[6rem] font-bold leading-tight'>
            Intelligent Interfaces.
          </h1>
          <h1 className='text-[#00000033] text-[3rem] md:text-[6rem] font-bold leading-tight z-10 mb-4'>
            Meaningful Interactions.
          </h1>
          <img
            className='hidden md:block absolute md:right-[24%] -bottom-8 md:mx-auto animate-floatPulse'
            src={litApple}
            alt=""
          />
        </div>
        <div className='relative mb-10 pb-10'>
          <div className="flex flex-col md:flex-row md:justify-between gap-6 z-10">
            <p className="text-[24px] font-normal md:w-[35%]">
              We help businesses of all sizes design engaging digital products that are easy to use and hard to forget.
            </p>
            <p className="text-[20px]  md:w-[35%] text-start">
              Our UI/UX services cover everything from research and wireframes to high-fidelity designs and prototypes—ensuring your product looks amazing and performs even better.
            </p>
          </div>
          <img className='hidden md:block md:absolute md:left-0 md:right-0 -bottom-8 md:mx-auto z-20 animate-floatPulse' src={bigApple} alt="" />


        </div>


        <div className="flex items-center space-x-2 mb-8">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
            Our UI/UX Design Services
          </h3>
        </div>
        <div className="flex flex-col md:flex-row w-full h-auto gap-4 mb-3">

          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            // Calculate dynamic flex
            let flexClass = 'flex-1';
            if (hoveredIndex !== null) {
              flexClass = isHovered ? 'flex-[1.5]' : 'flex-[0.75]';
            }

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-gray-100 shadow-sm overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${flexClass} flex flex-col`}
              >
                {isHovered ?
                  <img
                    src={service.img}
                    alt="Preview"
                    className="ease-in-out w-full h-40 object-cover transition-opacity duration-700"
                  />
                  :
                  <div className='md:h-40'>
                    <p className="text-[1.5rem] font-semibold mb-2 ms-6 mt-4">0{service.id}</p>
                  </div>
                }
                <div className="w-full p-4 md:h-32">
                  {(hoveredIndex === null || isHovered) && (
                    <h2 className="text-[2rem] font-semibold leading-snug ease-in-out">{service.title}</h2>
                  )}
                  {
                    isHovered ?
                      <p
                        className={`transition-all duration-700 ease-in-out delay-1000 `}
                      >
                        We begin with understanding your users, their behaviors, and pain points to shape a strategy that aligns with their needs.
                      </p>

                      :
                      ""

                  }
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto gap-4 mb-16">
          {servicesTwo.map((service, index) => {
            const isHovered = hoveredIndexTwo === index;

            // Calculate dynamic flex
            let flexClass = 'flex-1';
            if (hoveredIndexTwo !== null) {
              flexClass = isHovered ? 'flex-[1.5]' : 'flex-[0.75]';
            }

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndexTwo(index)}
                onMouseLeave={() => setHoveredIndexTwo(null)}
                className={`bg-gray-100 shadow-sm overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${flexClass} flex flex-col`}
              >
                {isHovered ?
                  <img
                    src={service.img}
                    alt="Preview"
                    className="ease-in-out w-full h-40 object-cover transition-opacity duration-700"
                  />
                  :
                  <div className='md:h-40'>
                    <p className="text-[1.5rem] font-semibold mb-2 ms-6 mt-4">0{service.id}</p>
                  </div>
                }
                <div className="w-full p-4 md:h-32">
                  {(hoveredIndexTwo === null || isHovered) && (
                    <h2 className="text-[2rem] font-semibold leading-snug ease-in-out">{service.title}</h2>
                  )}
                  {
                    isHovered ?
                      <p
                        className={`transition-all duration-700 ease-in-out delay-1000 `}
                      >
                        We begin with understanding your users, their behaviors, and pain points to shape a strategy that aligns with their needs.
                      </p>

                      :
                      ""

                  }
                </div>
              </div>
            );
          })}
        </div>



      </div>
      <div className='bg-black'>
        <OurDesignProcess />
      </div>
      <div className='mb-10'>
        <FeatureCardSection />
      </div>
      <div className='mb-10'>
        <ScrollCarousel />
      </div>
      <TestimonialCarousel />

    </>

  );
};

export default UiUxSinglePage;
