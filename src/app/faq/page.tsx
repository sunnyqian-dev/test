'use client';

import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';


const FAQ: React.FC = () => {
    interface CollapsibleSectionProps {
      summary: string;
      children: React.ReactNode;
    }
    
    const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ summary, children }) => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleOpen = () => setIsOpen(!isOpen);
    
      return (
        <details className="overflow-hidden rounded-lg border border-gray-200 bg-white" onToggle={toggleOpen}>
          <summary className="flex w-full cursor-pointer items-center justify-between px-2 py-2 text-left text-lg font-bold text-gray-900">
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
          <div className="px-4 pb-4 text-lg sm:px-6 sm:pb-6 w-full">
            {children}
          </div>
        </details>
      );
    };
    
  return (
    <>
    <Header/>
    <div id="faq" className="mb-10">
    <div className="mx-auto max-w-4xl bg-gradient-to-b from-[#9FC1D4] to-[#C0D5DF] flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
     <div className="lg:w-1/2 flex items-center justify-center  p-6 h-full">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
        Frequently<br />
        Asked<br />
        Questions
      </h1>
    </div>

     <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 h-full">
      <img 
        src="/img4.jpg" 
        alt="FAQ Illustration" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
 
      <div className="mx-auto mt-4 max-w-4xl sm:mt-8">
        <div className="space-y-4">
          <CollapsibleSection summary="How fast will I receive my website or my requests?">
            I work 8 hours a day, 5 days a week. On average, most Next.js requests take 2 weeks or less, mobile requests will be completed in 4 weeks, However more complex requests can take longer.
          </CollapsibleSection>

          <CollapsibleSection summary="Is there a limit to how many requests I can have?">
            Once subscribed, you’re able to add as many programming requests to your queue as you’d like, and they will be delivered one by one.
          </CollapsibleSection>

          <CollapsibleSection summary="Are you responsible for domain generation?">
            No, you can create the domain on your own. I’ll instruct you on linking it to your website.
          </CollapsibleSection>

          <CollapsibleSection summary="Are you responsible for Next.js hosting? How about the hosting fees?">
            No. hosting a website is a long-term commitment. However, I am happy to offer my opinion on selecting the appropriate plan. For most businesses, the Pro plan, priced at $20 per month, suffices. For further details, please refer to the Next.js Pricing Page.
          </CollapsibleSection>

          <CollapsibleSection summary="Are there any refunds if I don’t like the service?">
            Due to the high-quality nature of the work, there will be no refunds issued.
          </CollapsibleSection>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default FAQ;
