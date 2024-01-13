import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Marquee from "../Marquee";
import Modal from "./Modal";
// import Accordion from "./Accordionmain";
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-2xl h-[410px] relative">
        <div className="relative"><Navbar /></div>

        {/* Hero Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="ml-[147px]">
            <h1 className="text-5xl text-white mt-4 leading-[60px] font-bold text-left">Protect Against Cyber Crime and</h1>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <button className="py-3 mt-5 rounded-md w-full border bg-white text-blue-900 font-semibold text-lg">File a Complaint</button>
              </div>
              <div>
                <button className="py-3 mt-5 rounded-md w-full border text-blue-900 bg-white font-semibold text-lg">Connect via Whatsapp</button>
              </div>
            </div>
          </div>
          <div className="mt-[-35px]">
            <img className='h-[90%]' src="/images/main.svg" alt="" srcset="" />
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-4 gap-4 mx-[147px] mt-[-80px]">
          <Link to="/predict">
            <div className='border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1'>
              <img className='h-[80%] mb-2' src="/images/fakeweb.svg" alt="" />
              {/* <a href="http://127.0.0.1:8000/predict"><button class="mt-5 w-full bg-gradient-to-r from-blue-600 p-3 shadow-2xl rounded-xl text-white font-bold to-indigo-600 hover:via-indigo-900 hover:to-blue-700">Check Fraudlents</button></a> */}
              <p className='text-4xl mb-4 text-center font-bold text-blue-900 mt-[-30px]'>Detect Fake Websites</p>
            </div>
          </Link>
          <Link to="/">
            <div className='border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1'>
              <img className='mt-2 w-64 mb-2' src="/images/creditcard.svg" alt="" />
              <p className='text-4xl mb-4 text-center font-bold text-blue-900 mt-[-30px]'>Detect Illegal Credit Cards</p>
            </div>
          </Link>
          <Link to="/">
            <div className='border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1'>
              <img className='w-62 ml-2 mb-4' src="/images/frozenfunds.svg" alt="" />
              <p className='text-4xl mb-4 text-center font-bold text-blue-900 mt-[-25px]'>Frozen Funds Recovery</p>
            </div>
          </Link>
          <div>
            <button onClick={() => setPopUp(true)}>
              <div className='border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1'>
                <img className='w-52 ml-7 mb-3 mt-[-10px]' src="/images/lawyer.svg" alt="" />
                <p className='text-4xl mb-4 text-center font-bold text-blue-900 mt-[-25px]'>Personalised Lawyer Support</p>
              </div>
            </button>
            {popUp && <Modal setPopUp= {setPopUp} />}
          </div>
        </div>

        {/* divider */}
        <div className='px-6 mt-16'><img src="/images/divider.svg" alt="" /></div>
        <Marquee />

        {/* Get to know About Us */}
        <p className="font-bold text-right px-[147px] mt-32 text-blue-900 text-5xl">GET TO KNOW ABOUT US</p>
        <div className='grid grid-cols-3 gap-1 px-[100px]'>
          <div className='mt-[-70px]'><img className="" src="/images/know.svg" alt="" /></div>
          <div className='col-span-2'>
            <p className='mt-12 text-justify px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus saepe deleniti blanditiis natus dolor, magnam sapiente, similique illo nihil illum tenetur quia explicabo minus, nostrum tempora? Amet iste atque odit numquam distinctio fugiat velit harum accusamus quia rerum. Dolorem quidem doloribus vitae suscipit quam necessitatibus sed veniam iste amet harum? Ducimus adipisci illo similique cupiditate ullam iure assumenda vero maiores aut. Quam saepe laboriosam, architecto adipisci distinctio quasi, iure, reiciendis quo ea iste fuga magni dolores sed aliquid doloremque. Quas sapiente atque officia officiis voluptas saepe eveniet maxime debitis iure corrupti facilis perferendis a ullam eum recusandae, ex reiciendis?</p>
          </div>
        </div>

        {/* Lawyer Section starts */}
        <div className='mx-[147px] mt-20 border-2 border-blue-900 rounded-xl'>
          <p className='leading-[70px] text-right font-bold pt-6 text-5xl w-[80%] text-blue-900'>Empower Your Legal Journey: Get Supervised By our Best Lawyers</p>
          <p className='mb-9 mt-2 text-xl text-center text-blue-950'>Sail through legal challenges with expert help, ensuring your peace of mind.</p>
        </div>

        {/* Lawyer Cards */}
        <div className='grid grid-cols-4 gap-4 mt-14 px-[147px]'>
          <div className='bg-gray-200 rounded-md h-[320px]'>
            <div className='bg-white h-[200px] m-4'><img src="" alt="" /></div>

            <div>
              <p className='text-2xl font-bold text-center text-blue-900'>Mr. Landon Dalecki </p>
              <p className='text-lg font-medium text-center text-blue-950'>Corporate Law, JD </p>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-36 mt-20">
          <Row>
            <Col>
            <img src="/images/img-2.jpeg" alt="" /></Col>
            <Col>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
          </Row>
        
    </div>
        

        {/* Contact us Section */}

        {/* FeedBack Section */}

  <section className="my-8 mx-20">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-bold text-center text-blue-900">Satisfaction when their issues gets resolved</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-900"></span>
			<p>Leroy Jenkins</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-900"></span>
			<p>Leroy Jenkins</p>
		</div>
        <div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-900"></span>
			<p>Leroy Jenkins</p>
		</div>
	</div>
</section>
        {/* FeedBack Section ends */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;