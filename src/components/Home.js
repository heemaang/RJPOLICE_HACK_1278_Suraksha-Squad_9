/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Navbar from "./screens/Navbar";
import Accordion from "./Accordion";
import Contact from "./screens/Contact";
import { Link } from "react-router-dom";
import Footer from "./screens/Footer";

export default function Home(props) {
  const [htmlContent, setHtmlContent] = useState('');

  const fetchHtmlContent = async () => {
    try {
      const response = await fetch('./flaskfor/standalone-frontend/base.html');
      const content = await response.text();
      setHtmlContent(content);
    } catch (error) {
      console.error('Error fetching HTML content:', error);
    }
  };
  const handleStartStudying = () => {
    // Assuming you want to redirect to "/flaskfor/standalone-frontend/base.html"
    window.location.href = './flaskfor/standalone-frontend/base.html';
  };
  return (
    <div>
      <Navbar />
      <section className="dark:text-gray-100">
        <img src="/images/bg.jpg" className="w-full h-[720px] z-10" alt="" />
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between relative mt-[-700px]">
		<div className="flex flex-col p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold ">At 1930 Helpline.
				<span className="text-blue-300">We </span>are
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">dedicated to simplifying the legal process for
				{/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem /</br> */}
        <p className="text-white">users and connecting them with experienced lawyers.</p>
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <Link rel="noopener noreferrer" to="/login" className="px-8 py-3 text-lg font-semibold text-blue-800 rounded bg-blue-300">Login to Report an Issue</Link>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Helpdesk</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
      <div className="flex mt-40 flex-col items-center">
        <h2 className="font-extrabold text-5xl">Services We Provide</h2>
      </div>
      

      <div className="inline-flex p-4 gap-4 mt-6">
      <div className="hover:shadow-2xl hover:translate-y-2 w-1/3">
      <div class="p-6 rounded-md shadow-md flex flex-col">
      <div class="border border-stroke rounded-md px-10 py-10 m-auto bg-white">
        <h1 class="my-3 font-extrabold text-2xl">AI Legal Decision Taking System</h1>
        <h1 class="w-full text-[18px] leading-6 text-gray-600 text-justify pt-2">Empower your legal decisions with our AI-driven system. Connect with specialized lawyers and navigate complexities effortlessly.Secure, and personalized legal guidance at your fingertips..</h1>
        <button
          className="mt-5 w-full bg-gradient-to-r from-blue-600 p-3 shadow-2xl rounded-xl text-white font-bold to-indigo-600 hover:via-indigo-900 hover:to-blue-700"
          onClick={() => {
            fetchHtmlContent();
            handleStartStudying();
          }}
        >
          I have met a Cyber Crime
        </button>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
      <div class="hidden relative lg:block p-6 lg:col-span-2">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="/images/img-1.png" alt="Ad- woman on a beach"/>
      </div>
    </div>
      </div>


      <div className="hover:shadow-2xl hover:translate-y-2 w-1/3">
      <div class="p-6 rounded-md shadow-md flex flex-col">
      <div class="border border-stroke rounded-md px-10 py-10 m-auto bg-white">
        <h1 class="my-3 font-extrabold text-2xl">Fraud Website FeedBack System</h1>
        <h1 class="w-full text-[18px] leading-6 text-gray-600 text-justify pt-2">Combat fraud with our Feedback System. Report suspicious websites effortlessly, contributing to a safer online community. Your input strengthens our efforts against fraudulent activities.</h1>
        <a href="http://127.0.0.1:8000/predict"><button class="mt-5 w-full bg-gradient-to-r from-blue-600 p-3 shadow-2xl rounded-xl text-white font-bold to-indigo-600 hover:via-indigo-900 hover:to-blue-700">Check Fraudlents</button></a>
      </div>
      <div class="hidden relative lg:block p-6 lg:col-span-2">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="/images/img-1.png" alt="Ad- woman on a beach"/>
      </div>
    </div>
      </div>

      <div className="hover:shadow-2xl hover:translate-y-2 w-1/3">
      <div class="p-6 rounded-md shadow-md flex flex-col">
      <div class="border border-stroke rounded-md px-10 py-10 m-auto bg-white">
        <h1 class="my-3 font-extrabold text-2xl">Personalised Lawyer Support System</h1>
        <h1 class="w-full text-[18px] leading-6 text-gray-600 text-justify pt-2">Experience personalized legal support like never before. Our system connects you with expert lawyers tailored to your needs, ensuring dedicated guidance and support throughout your legal journey.</h1>
        <button class="mt-5 w-full bg-gradient-to-r from-blue-600 p-3 shadow-2xl rounded-xl text-white font-bold to-indigo-600 hover:via-indigo-900 hover:to-blue-700">Connect me to a Lawyer</button>
      </div>
      <div class="hidden relative lg:block p-6 lg:col-span-2">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="/images/img-1.png" alt="Ad- woman on a beach"/>
      </div>
    </div>
      </div>
      </div>
      <Contact/>
      <Accordion/>
      <Footer/>

      

    </div>
  );
}