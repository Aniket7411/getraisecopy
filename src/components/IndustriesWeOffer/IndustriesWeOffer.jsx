import { useState } from "react";
import { Monitor, Code2, Bot } from "lucide-react"; // you can swap with your icons
// import  from '../../assets/img1.jpg';
// import  from '../../assets/img2.jpg';
// import  from '../../assets/img3.jpg';
import img6 from "../../assets/Rectangle ab.svg";
import banking from "../../assets/banking.svg";
import education from "../../assets/education.svg";
import healthcare from "../../assets/healthcare.svg";
import consumerGoods from "../../assets/consumerGoods.svg";
import capitalMarkets from "../../assets/capitalMarkets.svg";
import travelLogistics from "../../assets/travelogistics.svg";
import hiTech from "../../assets/hiTech.svg";
import communications from "../../assets/communications.svg";
import publicServices from "../../assets/publicServices.svg";
import retail from "../../assets/retail.svg";
import retailN from "../../assets/retailN.svg";
import img1 from "../../assets/Rectangle 85.png";
import img2 from "../../assets/Rectangle 86.png";
import img3 from "../../assets/Rectangle 87.png";
import img4 from "../../assets/Rectangle 88.png";
import img5 from "../../assets/Rectangle 89.png";
import img7 from "../../assets/Rectangle 91.png";
import img8 from "../../assets/Rectangle 92.png";
import img9 from "../../assets/Rectangle 93.png";
import img10 from "../../assets/Rectangle 94.png";





// import img2 from "../../../src/assets/Rectangle 87.svg";
// import img3 from "../../../src/assets/Rectangle 89.svg";



export default function HoverCards() {
    // const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        { id: 1, icon: <img src={banking} width={30} height={30} alt="banking" />, label: "Banking", image: img1 },
        { id: 2, icon: <img src={education} width={30} height={30} alt="education" />, label: "Education", image: img2 },
        { id: 3, icon: <img src={healthcare} width={30} height={30} alt="healthcare" />, label: "Healthcare", image: img3 },
        { id: 4, icon: <img src={consumerGoods} width={30} height={30} alt="consumerGoods" />, label: "Consumer Goods", image: img4 },
        { id: 5, icon: <img src={capitalMarkets} width={30} height={30} alt="capitalMarkets" />, label: "Capital Markets", image: img5 },
        { id: 6, icon: <img src={travelLogistics} width={30} height={30} height={36} width={36} alt="travelLogistics" />, label: "Travel & Logistics", image: img6 },
        // { id: 6, icon: <Bot size={40} />, label: "AI", image: img6 },
        { id: 7, icon: <img src={hiTech} width={30} height={30} alt="hiTech" />, label: "Hi Tech", image: img7 },
        { id: 8, icon: <img src={communications} width={30} height={30} alt="communications" />, label: "Communications", image: img8 },
        // { id: 9, icon: <Bot size={40} />, label: "AI", image: img9 },
        { id: 9, icon: <img src={publicServices} width={30} height={30} alt="Public Services" />, label: "Public Services", image: img9 },
        { id: 10, icon: <img src={retailN} width={30} height={30} alt="retail" />, label: "Retail", image: img10 },

    ];

    const defaultIndex = cards.findIndex(card => card.id === 3);
    const [hoveredIndex, setHoveredIndex] = useState(defaultIndex);


    return (
        <>
            <div className="flex items-center space-x-2 mb-8 w-[80%] mx-auto lg:px-16">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h3 className="text-[20px] font-medium text-gray-900 RFDewiExtended"
                >Industries We Offer</h3>
            </div>
            <div className="hidden md:block mb-20">

                <div className="flex h-[75vh] overflow-hidden gap-x-2">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`border border-[#B8B8B8] rounded-lg group relative flex flex-col items-center justify-center transition-all duration-700 overflow-hidden cursor-pointer
            ${hoveredIndex === index ? "flex-[3]" : "flex-1"}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                             <p
                                className={`text-[20px] absolute bottom-0 left-0 right-0 mx-auto h-full transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    color: "#fff",
                                    padding: "1rem",
                                }}
                            >
                                {card.label}
                            </p>

                            {/* Icon & Vertical Label */}
                            <div
                                className={`flex flex-col items-center justify-center gap-4 z-10 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                {card.icon}
                                <p className="text-black text-[14px] absolute bottom-14 font-semibold rotate-270 writing-vertical">
                                    {card.label}
                                </p>
                            </div>

                            {/* Overlay (dark background for text/icon clarity) */}
                            <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${hoveredIndex === index ? "opacity-0" : "opacity-80"}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="block md:hidden mb-16">
                <div className="flex flex-col overflow-hidden gap-5 h-[100vh]">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={` rounded-lg group relative flex items-center transition-all duration-700 overflow-hidden cursor-pointer pt-2
            ${hoveredIndex === index ? "flex-[12]" : "flex-1"}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className={`absolute top-0 left-0 right-0 w-[90%] mx-auto h-full object-contain transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                            <p
                                className={`text-[20px] absolute bottom-0 left-0 right-0 w-[90%] mx-auto h-full transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    color: "#fff",
                                    padding: "1rem",
                                }}
                            >
                                {card.label}
                            </p>



                            {/* Icon & Vertical Label */}
                            <div
                                className={`flex w-[50%] mx-auto items-center gap-4 z-10 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                {card.icon}
                                <p className="text-black text-[14px]  font-semibold ">
                                    {card.label}
                                </p>
                            </div>

                            {/* Overlay (dark background for text/icon clarity) */}
                            <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${hoveredIndex === index ? "opacity-0" : "opacity-80"}`} />
                        </div>
                    ))}
                </div>
            </div>


            {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-4 mb-10">
                Explore More
            </button> */}
        </>

    );
}
