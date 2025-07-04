import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import brandLogo from '../../assets/brandLogo.png';
import getraiseBlackLogo from '../../assets/getraiseBlackLogo.png'
import './header.css'
import { X, Menu } from 'lucide-react';


const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine colors based on route and scroll position
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const iswebAppPage = location.pathname === '/services';
  const resourcePage = location.pathname === '/resource-allocation';
  const addServices = location.pathname === '/add-services';
  const isbusinessPage = location.pathname === '/products';
  const dataDrivenPage = location.pathname === '/data-driven-marketing';
  const isContactUsPage = location.pathname === '/contact-us';
  const isCareerPage = location.pathname === '/career';
  const webAndApp = location.pathname === '/web-and-app';

  // const isJobsPage = location.pathname === '/jobs';

  const isJobsPage = location.pathname.includes('jobs');
  const isblogPage = location.pathname.includes('blog');
  const isPrivacyPage = location.pathname === '/privacy_policy';
  const isCookiesPage = location.pathname === '/cookies_policy';
  const isuiuxdesignPage = location.pathname === '/ui-ux-design';
  const cloudServicesPage = location.pathname === '/cloud-services';
  const customSoftServicesPage = location.pathname === '/custom-software-solutions';
  const customSalesforcePage = location.pathname === '/salesforce-development';




  const textColor = (isHomePage || resourcePage || addServices) ? 'text-white' : (isScrolled ? 'text-black' : 'text-black');
  const bgColor = isHomePage ? 'bg-black' : (isAboutPage) ? 'bgbeige' : (iswebAppPage) ? 'bg-[#FFFDEF]' : (resourcePage || addServices)
    ? (isScrolled ? 'bg-black' : 'transparent') // **Black when scrolled**
    : (isScrolled ? 'bg-white' : 'bg-white');

  return (
    <header className={`min-h-[65px] fixed top-0 w-full md:pb-2 py-5 md:py-2 px-4  md:px-10 flex justify-between items-center z-50 transition-all duration-300 ${bgColor} ${textColor}`}>
      {/* <div className="text-2xl font-bold">GetRaise</div> */}

      <Link to="/">
        <img className='cursor-pointer h-[30px] md:h-[35px]' src={(isAboutPage || isbusinessPage || dataDrivenPage || iswebAppPage || isContactUsPage || isCareerPage || isJobsPage || isblogPage || isPrivacyPage || isCookiesPage || isuiuxdesignPage || webAndApp || cloudServicesPage || customSoftServicesPage || customSalesforcePage) ? getraiseBlackLogo : brandLogo}

          alt="" />

      </Link>
      {/* <nav className="absolute left-0 right-0 flex justify-center gap-8"> */}
      <div className='hidden lg:block'>

        <nav className="flex justify-center gap-8 nav">

          <Link to="/resource-allocation" className='li'>
            <li className="list-none cursor-pointer">
              Resource Allocation
            </li>
          </Link>
          <Link to="/products" className='li'>
            <li
              className="list-none cursor-pointer">
              Products
            </li>
          </Link>




          <div
            className="relative"
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* Button */}
            <button
              className="font-medium cursor-pointer focus:outline-none rounded-lg text-md text-center inline-flex items-center transition duration-200 group"
              type="button"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 mt-1 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="yellow"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mr-[50px] mt-4 min-w-max bg-gray-700 shadow-md rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <ul className="flex flex-col text-sm text-[#fff]">
                <Link to="/data-driven-marketing" className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false); 
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >

                    Digital & Performance Marketing
                  </li>
                </Link>
                <Link to="/web-and-app"  className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false);
                    //   navigate("/web-and-app");
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Website & App Development
                  </li>
                </Link>
                <Link to="/ui-ux-design" className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false);
                    //   navigate("/ui-ux-design");
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    UI/UX Design
                  </li>
                </Link>
                <Link to="/cloud-services" className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false);
                    //   navigate("/cloud-services");
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cloud Services
                  </li>
                </Link>
                <Link to="/salesforce-development" className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false);
                    //   navigate("/salesforce-development",
                    //   );
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Salesforce Development
                  </li>
                </Link>
                <Link to="/custom-software-solutions" className='li' onClick={() => {
                  setIsHovered(false);
                }}>
                  <li
                    // onClick={() => {
                    //   setIsHovered(false);
                    //   navigate("/custom-software-solutions");
                    // }}
                    className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Custom Software Solutions
                  </li>
                </Link>
                {/* <li
                  onClick={() => {
                    setIsHovered(false);
                    navigate("/services", {
                      state: { focusSlide: "Performance Marketing" },
                    });
                  }}
                  className="block cursor-pointer px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Performance Marketing
                </li> */}
              </ul>
            </div>
          </div>


          <Link to="/about"  className='li'>
            <li className="list-none cursor-pointer">
              About Us
            </li>
          </Link>

          <Link to="/contact-us" className='li'>
            <li className="list-none cursor-pointer">
              Contact
            </li>
          </Link>

        </nav>
      </div>
      {/* Hamburger Menu Button */}
      <button className="lg:hidden text-[#454545] focus:outline-none" onClick={() => setIsMenuOpen(true)}>
        <Menu className="w-8 h-8" />
      </button>


      {/* Mobile Menu (Full-Screen Shutter) */}
      <div
        className={`ps-8 fixed inset-0 bg-black text-white flex flex-col items-start justify-center z-50 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 text-xl" >
          <li className="list-none hover:text-yellow-400" onClick={() => {
            navigate('/resource-allocation');
            setIsMenuOpen(false);
          }}>Resource Allocation</li>
          <li className="list-none hover:text-yellow-400" onClick={() => {
            navigate('/products');
            setIsMenuOpen(false);
          }}>Products</li>

          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="ml-4 text-base">
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/data-driven-marketing");
                setIsMenuOpen(false);
              }}>
                Digital & Performance Marketing
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/web-and-app");
                setIsMenuOpen(false);
              }}>
                Website & App Development
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/ui-ux-design");
                setIsMenuOpen(false);
              }}>
                UI/UX Design
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/cloud-services");
                setIsMenuOpen(false);
              }}>
                Cloud Services
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/salesforce-development");
                setIsMenuOpen(false);
              }}>
                Salesforce Development
              </li>
              <li className="cursor-pointer hover:text-yellow-400 mb-2" onClick={() => {
                navigate("/custom-software-solutions");
                setIsMenuOpen(false);
              }}>
                Custom Software Solutions
              </li>
              {/* <li className="cursor-pointer hover:text-yellow-400" onClick={() => {
                navigate("/services", { state: { focusSlide: "Performance Marketing" } });
                setIsMenuOpen(false);
              }}>
                Performance Marketing
              </li> */}
            </ul>
          </div>

          <li className="list-none hover:text-yellow-400" onClick={() => {
            navigate('/about');
            setIsMenuOpen(false);
          }}>About Us</li>

          <li className="list-none hover:text-yellow-400" onClick={() => {
            navigate('/contact-us');
            setIsMenuOpen(false);
          }}>Contact</li>

          {/* <a href="#" className="hover:text-yellow-400" onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            navigate('/services');
          }}>Services</a>
          <a href="/about" className="hover:text-yellow-400" onClick={() => {
             setIsMenuOpen(false); navigate('/about');
          }}>About Us</a>
          <a href="/contact-us" className="hover:text-yellow-400">Contact</a> */}
        </nav>
      </div>




    </header>
  )
}

export default Header