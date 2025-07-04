import React from 'react';
import { Lightbulb, Settings, Users, Monitor, Target } from 'lucide-react'; // Icons
import career from '../../assets/career1.png'
import wcuIcon1 from '../../assets/wcuIcon1.svg'
import wcuIcon2 from '../../assets/wcuIcon2.svg'
import wcuIcon3 from '../../assets/wcuIcon3.svg'
import wcuIcon4 from '../../assets/wcuIcon4.svg'
import wcuIcon5 from '../../assets/wcuIcon5.svg'



const features = [
    {
        title: 'User-First Thinking',
        desc: 'Every design starts with empathy and strategy.',
        icon: wcuIcon1,
    },
    {
        title: 'Detail-Focused Execution',
        desc: 'We obsess over alignment, spacing, and usability.',
        icon: wcuIcon2,
    },
    {
        title: 'Cross-Functional Collaboration',
        desc: 'Designers, developers, and strategists work in sync.',
        icon: wcuIcon3,
    },
    {
        title: 'Platform-Aware Design',
        desc: 'Interfaces optimized for web, mobile, tablet, and beyond.',
        icon: wcuIcon4,
    },
    {
        title: 'Results-Oriented Design',
        desc: 'We measure success by how users interact, engage, and convert.',
        icon: wcuIcon5,
    },
];

export default function FeatureCardSection() {
    return (
        <div className="relative w-full bg-white py-12 px-4 md:px-12">
            <div className="flex items-center space-x-2 mb-5">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
                    Why Choose Us
                </h3>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-start">Why Choose GetRaise Technologies for UI/UX?</h2>


            {/* Background image behind the cards */}
            {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img src={career} alt="background" className="w-full h-full object-cover" />
            </div> */}

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
                            className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                            style={{
                                border: '2px solid #DADADA'
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
    );
}
