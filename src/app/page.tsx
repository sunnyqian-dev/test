'use client'; // Add this line at the top of the file

import Head from 'next/head';
import React, { useState, FunctionComponent, ReactNode } from 'react';
// import '../../styles/styles.home.css';
 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  type PrimaryButtonProps = {
    text: string;
    link: string;
  };

  const BuyButton: React.FC<PrimaryButtonProps> = ({ text, link}) => {
    return (
      <div className="flex justify-center items-center mt-4">
        
          <a     className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] text-white font-bold py-3 px-8 rounded-lg text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-l focus:outline-none transition duration-300"
   
 href={link}> {text}</a>
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
        <summary className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-lg font-bold text-gray-900 sm:p-8">
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
        <div className="px-6 pb-6 text-lg sm:px-8 sm:pb-8 w-full">
          {children}
        </div>
      </details >

    );
  };

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  interface CheckIconLabelProps {
    text: string;
    isBold?: boolean;
  }

  const CheckIconLabel: React.FC<CheckIconLabelProps> = ({ text, isBold = false }) => {
    // Conditionally apply bold styling
    const textStyle = isBold ? "font-bold text-base text-black-500" : "text-base text-gray-500";

    return (
      <div className="flex justify-start items-center mt-4 mb-1">
        <div className="flex items-center">
          <CheckIcon />
        </div>
        <div className="flex items-center ml-4">
          <p className={textStyle}>{text}</p>
        </div>
      </div>
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
    return(
      <div className="bg-gradient-to-r from-[#f8c9b6] to-[#f9e1cc]shadow-lg rounded-lg p-8 flex-1">
      <div className='flex flex-col items-start'>
        <div className="text-lg font-semibold ">{title}&nbsp;&nbsp;</div>
        <div className='flex flex-row items-center '>
          <div className="space-y-1">{detail}</div>
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
      <div className="bg-gradient-to-r from-[#a0d6d1] to-[#c3e5e1] shadow-lg rounded-lg p-8 flex-1">
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


  return (
    <>
      <Head>
        <title>Flexibility-Flexible Solutions, Rapid Results</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="FlexiBuilder - Build Software Solutions with Flexibility and Ease" /> 
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>

      {/* <!-- Navigation--> */}
      <nav className="shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
      <a className="text-xl font-bold text-gray-800 hover:text-gray-600 no-underline relative animate-glow" href="#page-top">
  FlexiBuilder
</a>

        <button 
          className="text-gray-800 focus:outline-none md:hidden" 
          onClick={toggleNavbar}
        >
          <span className="text-2xl">☰</span>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <a className="text-gray-800 hover:text-gray-600 font-medium block py-2 md:py-0 no-underline" href="#about">
                How It Works
              </a>
            </li>
            <li>
              <a className="text-gray-800 hover:text-gray-600 font-medium block py-2 md:py-0 no-underline" href="#pricing">
                Plans
              </a>
            </li>
            <li>
              <a className="text-gray-800 hover:text-gray-600 font-medium block py-2 md:py-0 no-underline" href="#faq">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      </nav>

{/* home */}
<header className="pt-0 pb-[calc(10rem-4.5rem)] bg-gradient-to-b from-[#a0c4d7] to-[#c1d8e0] bg-center bg-no-repeat relative">
<div className="relative w-full h-96 overflow-hidden">
  <div className="absolute flex w-full h-full animate-scroll">
    <img src="img1.jpg" alt="image 1" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
    <img src="img2.jpg" alt="image 2" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
    <img src="img3.jpg" alt="image 3" className="w-full h-full object-cover flex-shrink-0 animate-slide" />
  </div>
</div>
 
 



   <div className="container px-4 px-lg-5 h-100">
    <div className="row gx-4 gx-lg-5 h-100 justify-content-center text-center">
      <div className="col-lg-8 d-flex justify-content-center align-items-center">
        <h1 className="text-[#1D3557] text-6xl font-bold leading-tight mb-4">
          Build Software Solutions with Flexibility and Ease
        </h1>
      </div>
      <hr className="divider mx-auto w-1/4" />
      <div className="col-lg-8 d-flex justify-content-center align-items-center">
        <p className="text-white-75 text-xl mb-5">
          FlexiBuilder is a powerful modular platform designed to help development teams rapidly build, customize, and deploy high-quality applications.
        </p>
        <a
          className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] text-white font-bold py-3 px-8 rounded-lg text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-l focus:outline-none transition duration-300"
          href="#plans"
        >
          See Plans
        </a>
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
              detail="💰 Transparent, fixed pricing – Select the plan that best fits your needs (Basic, Pro, or Custom).📜 Clear package details – Know exactly what’s included."
            />
            <About
              title="2. Submit Your Content"
              detail="📝 Fill out a form & upload materials – Provide text, images, and branding elements.
🎨 Choose your style & preferences – Share your design inspirations."
            />
            <About
              title="3. We Build Your Website"
              detail="💻 Fast development – For example, Basic Plan: 14 days, Pro Plan: 30 days.
📢 Regular updates – Stay informed about the progress."
            />
            <About
              title="4. Launch & Support"
              detail="🚀 Final review & approval – Ensure everything meets your expectations before going live.
🔧 Free 1-month support – We provide assistance to ensure your website runs smoothly."
            />
            
              </div>
              </section>

          {/* <section id="services" className="py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-16">
              <h2 className="text-center text-2xl font-bold mb-4">What Can We Do</h2>
              <hr className="w-16 mx-auto mb-8 border-t-4 border-blue-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-gem text-4xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                    <p className="text-gray-600">Our themes are updated regularly to keep them bug free!</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-laptop text-4xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-gray-600">
                      A mobile app is a software application designed to run on mobile devices like smartphones and tablets (iOS, Android).
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-globe text-4xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise/Desktop Application</h3>
                    <p className="text-gray-600">You can use this design as is, or you can make changes!</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-heart text-4xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">More</h3>
                    <p className="text-gray-600">True open source isn't just about code—it's about creating something with passion and care.</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

         {/* <!-- Pricing--> */}
        <section id="pricing" className="space-y-8">
          <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold lg:mt-16 xl:mt-16 text-center">Get Your Plan</h1>
          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">

            <PlanCard
              planName="Simple Website"
              price="$500"
              description="Basic static page with text and images"
              example="About Us, Contact, FAQ, Services"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/aEU3fvcLU54I83S6oq"
            />
            <PlanCard
              planName="Intermediate Website"
              price="$1000"
              description="Custom design, forms, animations, interactive sections"
              example="Product Listings, Blog, Portfolio, Booking Page"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/00gaHX27g40E2Jy5kl"
            />
            <PlanCard
              planName="Complex Website"
              price="$1500+"
              description="Advanced features like databases, payments, logins"
              example="Shopping Cart, User Dashboard, Custom Web Apps"
              buttonText="Get started"
              buttonLink="https://buy.stripe.com/00gaHX27g40E2Jy5kl"
            />
          </div>
        </section>
        {/* <!--Call to action--> */}
         {/* <!-- <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Get In Touch</h2>
                <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Book a call</a>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="logo">
                     <a href="/"><img src="assets/img/home/logo.jpeg" alt="FlexiBuilder Logo" style="width: 100%; height: 20rem;" /></a>
                     </div>  
                 </div>
            </div>
        </section>  */}
        {/* Frequently Asked Questions */}
        <section className="space-y-8 py-12" id="faq">
        <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold lg:mt-16 xl:mt-16 text-center">Frequently Asked Questions</h1>
          <div className="mx-auto mt-8 max-w-4xl sm:mt-14">
            <div className='space-y-4'>

              <CollapsibleSection summary="How fast will I receive my website or my requests?">
                I work 8 hours a day, 5 days a week. On average, most Next.js requests take 2 weeks or less, mobile requests will be completed in 4 weeks, However more complex requests can take longer.
              </CollapsibleSection>

              <CollapsibleSection summary="Is there a limit to how many requests I can have?">
                Once subscribed, you’re able to add as many programming requests to your queue as you’d like, and they will be delivered one by one.
              </CollapsibleSection>

              <CollapsibleSection summary="Are you responsible for domain generate?">
                No, you can create the domain on your own. I’ll instruct you on linking it to your website.
              </CollapsibleSection>

              <CollapsibleSection summary="Are you responsible for Next.js hosting? How about the hosting fees?">
                No. hosting a website is a long-term commitment. However, I am happy to offer my opinion on selecting the appropriate plan. For most businesses, the Pro plan, priced at $20 per month, suffices. For further details, please refer to the Next.js Pricing Page.
              </CollapsibleSection>

              <CollapsibleSection summary="Are there any refunds if I don’t like the service?">
                Due to the high quality nature of the work, there will be no refunds issued.
              </CollapsibleSection>
            </div>
          </div>
        </section>
        
        {/* Additional sections */}
        {/* Add remaining sections similar to this */}
        <footer className="bg-light py-5">
          <div className="container px-4 px-lg-5">
            <div className="small text-center text-muted">Copyright &copy; 2024 - FlexiBuilder</div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
        <script src="/js/scripts.js"></script>
    </>
  );
}
