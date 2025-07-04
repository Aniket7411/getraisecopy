import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  { id: 1, number: 1, heading: "Resource Allocation", text: "We provide flexible and scalable resource allocation, ensuring you have the right talent and expertise when you need it. Whether for short-term projects or long-term collaboration, our dedicated professionals seamlessly integrate with your team to drive efficiency and innovation." },
  { id: 2, number: 2, heading: "Custom Software Development (Web, Mobile, SaaS)", text: "We specialize in developing custom web, mobile, and SaaS solutions designed to meet your unique business needs. Our expert-driven approach ensures scalability, seamless functionality, and a future-ready digital experience that drives efficiency and growth." },
  { id: 3, number: 3, heading: "Digital Marketing & SEO", text: "We provide digital marketing and SEO services to boost your online visibility. Our data-driven strategies enhance your search rankings and drive organic traffic. We focus on analytics to refine campaigns, ensuring measurable results that align with your business goals." },
  { id: 4, number: 4, heading: "ERP & CRM Development", text: "We create custom ERP and CRM solutions to streamline business operations and enhance customer relationships. Our tools help manage resources efficiently, automate processes, and improve business performance. Tailored to your needs, we ensure seamless integration and growth." },
  { id: 5, number: 5, heading: "AI & Automation", text: "We develop AI-powered platforms tailored to businesses, integrating machine learning, chatbots, and data analytics to create intelligent, automated, and data-driven solutions." },
  { id: 6, number: 6, heading: "E-commerce", text: "We create scalable e-commerce solutions with seamless payment integration, ensuring a secure, user-friendly shopping experience that drives sales and business growth." },
  { id: 7, number: 7, heading: "UI/UX & Branding", text: "We offer expert UI/UX design and branding services to create user-friendly interfaces and visually appealing brands. Our solutions are tailored to improve user experience, boost engagement, and ensure a strong, cohesive brand identity. We focus on delivering intuitive, impactful designs that resonate with your target audience." },
  { id: 8, number: 8, heading: "Cloud Solutions", text: "We provide secure hosting, efficient cloud migration, and robust security services. Our solutions are designed to scale with your business, ensuring optimal performance and reliability in the cloud. Let us help you make a seamless transition to cloud-based infrastructure." },
];


export default function VerticalScrollSlider() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrollingRef = useRef(false);
  const Navigate = useNavigate()

  useEffect(() => {
    let touchStartY = 0;
    const handleWheel = (e) => {
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

      const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

      // Only prevent scroll if in the section and not at boundaries
      if (inSection) {
        if (
          (e.deltaY > 0 && currentSlide < slides.length - 1) ||
          (e.deltaY < 0 && currentSlide > 0)
        ) {
          e.preventDefault();

          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          if (e.deltaY > 0 && currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
          } else if (e.deltaY < 0 && currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
          }
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };


    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

      const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

      if (inSection) {
        if (
          (deltaY > 30 && currentSlide < slides.length - 1) ||
          (deltaY < -30 && currentSlide > 0)
        ) {
          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          if (deltaY > 30 && currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
          } else if (deltaY < -30 && currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  return (

    <>
      <div className="w-full lg:px-16 pb-20 bg-white md:mt-[-0.5rem]">
        {/* Background Text */}

        {/* Content Wrapper */}
        <div className="z-10 flex flex-col md:flex-row items-center gap-12 w-[80%] m-auto">


          <div className="w-full">
            {/* Bio Title */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              <h3 className="text-[20px] font-semibold text-[#000000] font-rfdExpanded"
              >Services We Offer</h3>
            </div>

            {/* Description */}
            <p className="text-[#000] text-[20px] md:text-[40px] mt-3 leading-relaxed"
              style={{
                // fontSize: '40px',
                fontWeight: '300',
                fontFamily: 'poppins'
              }}
            >
              We deliver cutting-edge technology solutions that help businesses scale, innovate, and stay ahead in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </div>


      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${slides.length * 20}vh` }} // or adjust vh value as needed

      >
        <div className="sticky top-0 h-screen w-full bg-white overflow-hidden">
          {slides.map((slide, index) => {
            const leftOffset = `${index * 6}vw`;
            {/* const rightOffset = `${index * 5}vw`; */ }
            const isVisible = index <= currentSlide;
            const bgColor =
              index === 0 ? "#FDEF9E" : index === 1 ? "#fff" : index === 2 ? "#000" : index === 3 ? "#9fecfe" : index === 4 ? "#E4BAFF" : index === 5 ? "#FFF" : index === 6 ? "#FA9090" : "#FDEF9E";
            const numberColor =
              index === 0 ? "#B5A36F" : index === 1 ? "#ABABAB" : index === 2 ? "#ababab" : index === 3 ? "#629aa7" : index === 4 ? "#BE88E3" : index === 5 ? "#ABABAB" : index === 6 ? "#D16B6B" : "#B5A36F"
            const textColor =
              index === 2 ? "#fff" : index === 6 ? "#fff" : "#000"
            const paraWidth =
              index === 0 ? "75%" : index === 1 ? "75%" : index === 2 ? "75%" : index === 7 ? "56%" : "62%"
            return (
              <div
                key={index}
                className="absolute top-0 h-full w-full flex items-center justify-start text-white transition-transform duration-700 px-4 md:px-2"
                onClick={() => setCurrentSlide(index)}
                style={{
                  // backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                  backgroundColor: bgColor,
                  left: leftOffset,
                  // right: rightOffset,
                  zIndex: index,
                  transform: isVisible ? "translateX(0)" : "translateX(100%)",
                  cursor: 'pointer'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:gap-10" style={{
                  width: paraWidth
                }}>
                  <h2 className="text-[20vw] md:text-[30vw] font-medium" style={{ color: numberColor }}>
                    {slide.number}
                  </h2>
                  <div className="text-[#000000] items-center">

                    <h2 className="text-[20px] md:text-[30px] font-bold md:mb-6" style={{ color: textColor }}>{slide.heading}</h2>
                    {/* <p className="text-xl font-light" style={{ color: textColor }}>{slide.text}</p> */}
                    <p className="text-[16px] md:text-xl font-light" style={{ color: textColor }}>
                      {slide.text.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={() => Navigate("/services")} className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white mb-16 md:mb-20 
      mt-16 md:mt-20 transition-colors duration-500 ease-in-out">
        Explore Our Services
      </button>
    </>
  );
}
