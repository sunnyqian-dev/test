'use client'; // Add this line at the top of the file

import Head from 'next/head';
import React, { useState, FunctionComponent, ReactNode } from 'react';
import emailjs from "emailjs-com";
import Header from './header';
import Footer from './footer';
import Link from 'next/link';

 

export default function Home() {
  

  type PrimaryButtonProps = {
    text: string;
    link: string;
  };

  const BuyButton: React.FC<PrimaryButtonProps> = ({ text, link}) => {
    return (
      <div className="flex justify-center items-center mt-4">
          <Link className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] text-white font-bold py-3 px-8 rounded-lg text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-l focus:outline-none transition duration-300"
              href={link}> 
              {text}
          </Link>
      </div>
    );
  };
  
  type CollapsibleSectionProps = {
    summary: string;
    children: ReactNode;
  };

  const CollapsibleSection: FunctionComponent<CollapsibleSectionProps> = ({ summary, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <details className="overflow-hidden rounded-lg border border-gray-200 bg-white" onToggle={toggleOpen}>
        <summary className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-lg font-bold text-gray-900 sm:p-3">
          <span>{summary}</span>
          {!isOpen ? (
            <svg className="ml-4 h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          ) : (
            <svg className="ml-4 h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          )}
        </summary>
        <div className="px-6 pb-6 text-lg sm:px-8 sm:pb-3 w-full">
          {children}
        </div>
      </details >

    );
  };
 

  interface AboutProps{
    title:string;
    detail:string;
  }
  const About: React.FC<AboutProps>=({
    title,
    detail
  })=>{ 
 
    const lines = detail.split("</br>");
 
    console.log(lines[0]);

    return(
      
      <div className="bg-gradient-to-b from-[#F6C7B0] to-[#F9E3D1] shadow-lg rounded-lg p-8 flex-1">
      <div className='flex flex-col items-start'>
        <div className="text-lg font-semibold ">{title}&nbsp;&nbsp;</div>
        <div className='flex flex-col items-center '>
        {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
 
        </div>
      </div>
      </div>
    );
  };

  interface PlanCardProps {
    planName: string;
    price: string;
    description: string;
    example: string;
    buttonText: string;
    buttonLink: string;
  }

  const PlanCard: React.FC<PlanCardProps> = ({
    planName,
    price,
    description,
    example,
    buttonText,
    buttonLink
  }) => {
    return (
      <div className="bg-gradient-to-b from-[#B3E0DA] to-[#D6F0EC] shadow-lg rounded-lg p-8 flex-1">
        <div className='flex flex-col items-start'>
          <div className="text-lg font-semibold">{planName}&nbsp;&nbsp;</div>
          <div className='flex flex-row items-center '>
            <div className="text-3xl font-semibold">{price}</div>
            <div className="text-base font-semibold text-gray-600">&nbsp;/&nbsp;month</div>
          </div>
        </div>
        <p className="mt-2">What’s included?</p>
        <div className="space-y-1">{description}</div>
        <div className="space-y-1">For example:{example}</div>

        <BuyButton text={buttonText} link={buttonLink}  />
      </div>
    );
  };

    const [formData, setFormData] = useState({firstName: "",lastName: "",phone: "",email: "",message: ""});
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs
        .send("service_qhq8xet", "template_kps7trw", formData, "BICgRZ1JDbw76UiE5")
        .then(
          (response) => {
            console.log("Message sent successfully", response);
            // Optionally, reset form data after successful submission
            setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
          },
          (error) => {
            console.error("Error sending message", error);
          }
        );
    };
  
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
    console.log("Toggling Navbar: ", isOpen);
  const closeNavbar = () => {
    setIsOpen(false);
  };


  return (
    <>
      <Head>
        <title>Flexibility-Flexible Solutions, Rapid Results</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="FlexiBuilder - Build Software Solutions with Flexibility and Ease" /> 
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>

     {/* header */}
      <Header/>

      {/* home */}
      <header className="pt-0 pb-[calc(10rem-4.5rem)] bg-gradient-to-b from-[#a0c4d7] to-[#c1d8e0]  bg-center bg-no-repeat relative">
        <div className="relative w-full h-96 overflow-hidden">
          <div className="absolute flex w-full h-full animate-scroll">
            <img src="img1.jpg" alt="image 1" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
            <img src="img2.jpg" alt="image 2" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
            <img src="img3.jpg" alt="image 3" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
          </div>
        </div>
        <div className="container mx-auto h-100">
        <div className="row h-100 justify-content-center text-center">
          <div className="col-lg-8 d-flex justify-content-center align-items-center mt-5">
              <h1 className="text-[#1D3557] text-3xl font-bold leading-tight mb-4">
                Build Software Solutions with Flexibility and Ease
              </h1>
              {/* <hr className="divider mx-auto w-1/4 border-t-4 border-[#1D3557]" /> */}
              <p className="text-[#1D3557] text-xl font-bold mb-5 mt-2">
                FlexiBuilder is a powerful modular platform designed to help development teams rapidly build, customize, and deploy high-quality applications.
              </p>
            </div>
            <div className=" d-flex justify-content-center align-items-center  mt-8">
              <Link
                className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] text-white font-bold py-3 px-8 rounded-lg text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-l focus:outline-none transition duration-300"
                href="#plans"
              >
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </header>


      {/* <!-- About--> */}
      <section id="about" className="space-y-8">
      <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold lg:mt-16 xl:mt-16 text-center">How It Works</h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">
          <About
            title="1. Choose Your Plan"
            detail="💰 Transparent, fixed pricing – Select the plan that best fits your needs (Basic, Pro, or Custom).</br>
            📜 Clear package details – Know exactly what’s included."
          />
          <About
            title="2. Submit Your Content"
            detail="📝 Fill out a form & upload materials – Provide text, images, and branding elements.</br>
                    🎨 Choose your style & preferences – Share your design inspirations."
          />
          <About
            title="3. We Build Your Website"
            detail="💻 Fast development – For example, Basic Plan: 14 days, Pro Plan: 30 days.</br>
                    📢 Regular updates – Stay informed about the progress."
          />
          <About
            title="4. Launch & Support"
            detail="🚀 Final review & approval – Ensure everything meets your expectations before going live.</br>
                    🔧 Free 1-month support – We provide assistance to ensure your website runs smoothly."
          />
            </div>
      </section>

         {/* <!-- plans--> */}
        <section id="plans" className="space-y-8">
          <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold lg:mt-16 xl:mt-16 text-center">Get Your Plan</h1>
          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">
            <PlanCard
              planName="Simple Website"
              price="$500"
              description="Basic static page with text and images"
              example="About Us, Contact, FAQ, Services"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/7sI3fv4fobt63NCfZ1"
            />
            <PlanCard
              planName="Intermediate Website"
              price="$1000"
              description="Custom design, forms, animations, interactive sections"
              example="Product Listings, Blog, Portfolio, Booking Page"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/6oEbM17rAap20BqfZ2"
            />
            <PlanCard
              planName="Complex Website"
              price="$1500+"
              description="Advanced features like databases, payments, logins"
              example="Shopping Cart, User Dashboard, Custom Web Apps"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/6oEg2hcLU9kY4RG3ch"
            />
          </div>
        </section>

      {/* contact us */}
      <section id="contactus" className="space-y-8">
      <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold lg:mt-16 xl:mt-16 text-center">Get in Touch</h1>

      <div className="flex flex-col bg-gradient-to-b from-[#B0B3BA] to-[#E8E8E6] md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 p-6 rounded-lg shadow-lg  mx-auto">
      <div className="w-full md:w-2/5 flex justify-center items-center p-4">
        <img src="/img1.jpg" alt="Contact Us" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <div className="w-full md:w-2/5 p-4">
        {false ? (
          <p className="text-green-500">Your message has been sent!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded h-40" // Tailwind class to adjust height
              required
            />
            <button type="submit" className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] font-bold text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
    </section>

    {/* footer */}
      <Footer/>
    </>
  );
}
