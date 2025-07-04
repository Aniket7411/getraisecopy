import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    title: '',
    message: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false); // For checkbox

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const foundErrors = validate();
  //     setErrors(foundErrors);

  //     if (Object.keys(foundErrors).length === 0) {
  //       alert('Form submitted successfully!');
  //       // Send form to API here
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_ixx8prj",
          "template_tgsi8am",
          formData,
          "Xg1e2xsDdIVQ5VuLh"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Form submitted successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
            setIsSubmitted(true);
            setFormData({
              fullName: "",
              email: "",
              company: "",
              title: "",
              message: "",
              termsAccepted: false,
            });
            setErrors({});
          },
          (error) => {
            console.error("FAILED...", error);
            toast.error("There was an error sending your message.", {
              position: "top-right",
              autoClose: 3000,
            });
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <div className="mt-[80px] md:mt-[120px] md:w-[58%] mx-auto p-6 lg:px-16 text-center">
      <h1 className="text-5xl md:text-6xl xl:text-8xl font-black">Get In Touch</h1>
      <p className="text-sm mt-2 font-medium">Let’s Build Something Amazing Together</p>
      <p className="text-sm mt-4 text-[#000]">
        Have a project in mind, need expert advice, or simply want to learn more about our services? We’re ready to connect and help you grow.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
        {['fullName', 'email', 'company', 'title', 'message'].map((field, i) => (
          <div key={field} className='mb-4'>
            <label className="text-start text-sm text-gray-800 font-medium block mb-1">
              <span className="text-red-500">*</span>{' '}
              {field === 'fullName'
                ? 'Full Name'
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === 'message' ? (
              <textarea
                name={field}
                className="w-full bg-[#F0F0F0] p-3 rounded-md focus:outline-none"
                rows="4"
                value={formData[field]}
                onChange={handleChange}
              />
            ) : (
              <input
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                className="w-full bg-[#F0F0F0] p-3 rounded-md focus:outline-none"
                value={formData[field]}
                onChange={handleChange}
              />
            )}
            {errors[field] && (
              <p className="text-start text-red-500 text-xs mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="w-4 h-4 mr-4"
          />
          <label className="text-sm">I agree to the <span className='cursor-pointer underline decoration-black hover:decoration-[#0000EE] hover:text-[#0000EE] '>Terms and Conditions</span></label>
        </div>

        <button
          type="submit"
          disabled={!formData.termsAccepted}
          className={`disabled:cursor-not-allowed  h-[68px] text-[16px] font-normal md:w-[50%] mx-auto mt-6 mb-8 w-full py-2 rounded-full text-black transition cursor-pointer ${formData.termsAccepted
              ? 'bg-[#FEEE99] hover:bg-[#f7e583]'
              : 'bg-[#F0F0F0] cursor-not-allowed'
            }`}
        >
          Submit
        </button>
      </form>
      {isSubmitted && <p className="text-green-500 mt-4">Submitted successfully!</p>}

    </div>
  );
}
