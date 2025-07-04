import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import career from '../../assets/career1.png'
import img1 from '../../assets/Rectangle 4882.png'
import img2 from '../../assets/Rectangle 4883.png'
import img3 from '../../assets/Rectangle 4884.png'
import img4 from '../../assets/Rectangle 4885.png'
import CurrentOpenings from "../../components/CurrentOpenings/CurrentOpenings";
 


const Career = () => {


  return (
    <section className="mx-auto p-6 lg:p-12 mt-[50px] md:mt-[80px]"
    style={{
          fontFamily:'poppins'
        }}
    >
      {/* Header */}
      <div className="mb-6">
        <p className="text-[20px] text-[#555555] font-medium mb-5">Bold Talent.<br />Clear Results.</p>
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-medium mt-2">Join Us</h1>
      </div>

      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden mb-6">
        <img
          src={career} // replace with your own image
          alt="Team working"
          className="w-full h-auto object-cover bg-no-repeat"
        />
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-6" />

      {/* About Section */}
      <div className="md:flex md:space-x-12">
        {/* Left Column */}
        <div className="mb-4 md:mb-0 md:w-1/4 mt-1 md:ms-4">
          <p className="font-bold text-[20px]">About Us</p>
        </div>

        {/* Right Column */}
        <div className="md:w-3/4 text-gray-700 space-y-4 text-lg">
          <p className='text-[30px] md:text-[40px] font-light text-[#585858] mb-4 leading-tight' style={{
            
          }}>
            At <strong>Getraise Technologies</strong>, we craft cutting-edge digital solutions that fuel business growth.
            From web and app development to performance marketing and custom software, our team blends creativity,
            strategy, and technology to deliver impactful results that matter.
          </p>
          <p className="text-[20px] font-medium text-[#585858]">
            We're always on the lookout for curious minds and passionate problem-solvers. If you're ready to push boundaries,
            grow fast, and build the future of tech—let’s raise the bar together.
          </p>
        </div>
      </div>


      <div className="space-y-10 my-20">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {/* Big Image */}
          <div className="col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden">
            <img
              src={img1}
              alt="team-1"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Top Right Image */}
          <div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <img
              src={img2}
              alt="team-2"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Small Images */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={img3}
              alt="team-3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden">
            <img
              src={img4}
              alt="team-4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="border-t pt-10 ">
          <p className="text-sm font-bold tracking-wide mb-2">
            Careers
          </p>
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
            <p className="text-[#585858] md:max-w-xl leading-relaxed text-base md:text-[17px]">
              Explore exciting career opportunities at Getraise Technologies.
              We’re hiring driven, creative, and forward-thinking individuals
              ready to shape the future with us. Find the role that fits you best
              and take the next step in your career journey.
            </p>
          </div>
        </div>

        <CurrentOpenings />
      </div>
    </section>

  )
}

export default Career
