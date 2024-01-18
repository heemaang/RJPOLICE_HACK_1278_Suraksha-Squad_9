import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Marquee from "../Marquee";
import Modal from "./Modal";
import ChatBot from "react-simple-chatbot";
import { Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
// import Accordion from "./Accordionmain";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";
import "./Home.css";

// const ChatBotComponent = ({onClose}) => {
//   const [trigger, setTrigger] = useState(null);

//   useEffect(() => {
//     if (trigger) {
//       // Use a delay to prevent rapid triggering of the next step
//       setTimeout(() => {
//         setTrigger(null);
//       }, 100);
//     }
//   }, [trigger]);
  // const steps = [
  //   {
  //     id: "Greet",
  //     message: "Hello, Welcome to Suraksha Squad Ai Decision System",
  //     trigger: "Done",
  //   },
  //   {
  //     id: "Done",
  //     message: "Please enter your name!",
  //     trigger: "waiting1",
  //   },
  //   {
  //     id: "waiting1",
  //     user: true,
  //     trigger: "Name",
  //   },
  //   {
  //     id: "Name",
  //     message: "Hi {previousValue}, Please select your issue",
  //     trigger: "issues",
  //   },
  //   {
  //     id: "issues",
  //     options: [
  //       {
  //         value: "cyberthreats",
  //         label: "cyberthreats",
  //         trigger: "cyberthreats",
  //       },
  //       {
  //         value: "reporting of cyber incidents",
  //         label: "reporting of cyber incidents",
  //         trigger: "reporting of cyber incidents",
  //       },
  //       {
  //         value: "protect",
  //         label: "protect",
  //         trigger: "protect",
  //       },
  //       {
  //         value: "phishing",
  //         label: "phishing",
  //         trigger: "phishing",
  //       },
  //       {
  //         value: "financialfrauds",
  //         label: "financialfrauds",
  //         trigger: "financialfrauds",
  //       },
  //       {
  //         value: "atm_money_theft",
  //         label: "atm_money_theft",
  //         trigger: "atm_money_theft",
  //       },
  //       {
  //         value: "credit_card_lost",
  //         label: "credit_card_lost",
  //         trigger: "credit_card_lost",
  //       },
  //       {
  //         value: "identity_theft",
  //         label: "identity_theft",
  //         trigger: "identity_theft",
  //       },
  //       {
  //         value: "lost_device_with_details",
  //         label: "lost_device_with_details",
  //         trigger: "lost_device_with_details",
  //       },
  //       {
  //         value: "accidental_info_sharing",
  //         label: "accidental_info_sharing",
  //         trigger: "accidental_info_sharing",
  //       },
  //       {
  //         value: "unauthorized_access_online_accounts",
  //         label: "unauthorized_access_online_accounts",
  //         trigger: "unauthorized_access_online_accounts",
  //       },
  //     ],
  //   },
  //   {
  //     id: "cyberthreats",
  //     options: [
  //       {
  //         value: "What are common cyber threats?",
  //         label: "What are common cyber threats?",
  //         trigger: "What are common cyber threats?",
  //       },
  //       {
  //         value: "What should I know about online security threats?",
  //         label: "What should I know about online security threats?",
  //         trigger: "What should I know about online security threats?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "reporting of cyber incidents",
  //     options: [
  //       {
  //         value: "What should I do if I've been hacked?",
  //         label: "What should I do if I've been hacked?",
  //         trigger: "What should I do if I've been hacked?",
  //       },
  //       {
  //         value: "Who do I contact for a cybersecurity issue?",
  //         label: "Who do I contact for a cybersecurity issue?",
  //         trigger: "Who do I contact for a cybersecurity issue?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "protect",
  //     options: [
  //       {
  //         value: "How can I protect my computer?",
  //         label: "How can I protect my computer?",
  //         trigger: "How can I protect my computer?",
  //       },
  //       {
  //         value: "What steps should I take to secure my online presence?",
  //         label: "What steps should I take to secure my online presence?",
  //         trigger: "What steps should I take to secure my online presence?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "phishing",
  //     options: [
  //       {
  //         value: "How can I recognize phishing emails?",
  //         label: "How can I recognize phishing emails?",
  //         trigger: "How can I recognize phishing emails?",
  //       },
  //       {
  //         value: "Tell me about phishing prevention",
  //         label: "Tell me about phishing prevention",
  //         trigger: "Tell me about phishing prevention",
  //       },
  //       {
  //         value: "What should I do if I receive a suspicious email?",
  //         label: "What should I do if I receive a suspicious email?",
  //         trigger: "What should I do if I receive a suspicious email?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "financialfrauds",
  //     options: [
  //       {
  //         value: "How can I protect myself from financial frauds?",
  //         label: "How can I protect myself from financial frauds?",
  //         trigger: "How can I protect myself from financial frauds?",
  //       },
  //       {
  //         value: "Tell me about online banking security",
  //         label: "Tell me about online banking security",
  //         trigger: "Tell me about online banking security",
  //       },
  //       {
  //         value: "What steps should I take to prevent financial cybercrimes?",
  //         label: "What steps should I take to prevent financial cybercrimes?",
  //         trigger: "What steps should I take to prevent financial cybercrimes?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "atm_money_theft",
  //     options: [
  //       {
  //         value: "What should I do if my money is stolen from an ATM?",
  //         label: "What should I do if my money is stolen from an ATM?",
  //         trigger: "What should I do if my money is stolen from an ATM?",
  //       },
  //       {
  //         value: "How can I report ATM money theft?",
  //         label: "How can I report ATM money theft?",
  //         trigger: "How can I report ATM money theft?",
  //       },
  //       {
  //         value: "My ATM money is missing, what steps should I take?",
  //         label: "My ATM money is missing, what steps should I take?",
  //         trigger: "My ATM money is missing, what steps should I take?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "credit_card_lost",
  //     options: [
  //       {
  //         value: "What should I do if I lose my credit card?",
  //         label: "What should I do if I lose my credit card?",
  //         trigger: "What should I do if I lose my credit card?",
  //       },
  //       {
  //         value: "My credit card is lost, what steps should I take?",
  //         label: "My credit card is lost, what steps should I take?",
  //         trigger: "My credit card is lost, what steps should I take?",
  //       },
  //       {
  //         value: "How can I report a lost credit card?",
  //         label: "How can I report a lost credit card?",
  //         trigger: "How can I report a lost credit card?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "identity_theft",
  //     options: [
  //       {
  //         value: "What should I do if I suspect identity theft?",
  //         label: "What should I do if I suspect identity theft?",
  //         trigger: "What should I do if I suspect identity theft?",
  //       },
  //       {
  //         value: "How to report identity theft?",
  //         label: "How to report identity theft?",
  //         trigger: "How to report identity theft?",
  //       },
  //       {
  //         value: "Steps to take if I'm a victim of identity theft?",
  //         label: "Steps to take if I'm a victim of identity theft?",
  //         trigger: "Steps to take if I'm a victim of identity theft?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "lost_device_with_details",
  //     options: [
  //       {
  //         value:
  //           "What should I do if I lose a device with sensitive information?",
  //         label:
  //           "What should I do if I lose a device with sensitive information?",
  //         trigger:
  //           "What should I do if I lose a device with sensitive information?",
  //       },
  //       {
  //         value: "Steps to take if my lost device contains personal details?",
  //         label: "Steps to take if my lost device contains personal details?",
  //         trigger: "Steps to take if my lost device contains personal details?",
  //       },
  //       {
  //         value: "How to secure my data if I've lost a device?",
  //         label: "How to secure my data if I've lost a device?",
  //         trigger: "How to secure my data if I've lost a device?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "accidental_info_sharing",
  //     options: [
  //       {
  //         value:
  //           "What should I do if I accidentally share sensitive information?",
  //         label:
  //           "What should I do if I accidentally share sensitive information?",
  //         trigger:
  //           "What should I do if I accidentally share sensitive information?",
  //       },
  //       {
  //         value: "Steps to take if I've shared personal details accidentally?",
  //         label: "Steps to take if I've shared personal details accidentally?",
  //         trigger:
  //           "Steps to take if I've shared personal details accidentally?",
  //       },
  //       {
  //         value:
  //           "How to mitigate the impact of accidental information sharing?",
  //         label:
  //           "How to mitigate the impact of accidental information sharing?",
  //         trigger:
  //           "How to mitigate the impact of accidental information sharing?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "unauthorized_access_online_accounts",
  //     options: [
  //       {
  //         value: "How can I handle unauthorized access to my online accounts?",
  //         label: "How can I handle unauthorized access to my online accounts?",
  //         trigger:
  //           "How can I handle unauthorized access to my online accounts?",
  //       },
  //       {
  //         value: "What to do if someone breaches my online accounts?",
  //         label: "What to do if someone breaches my online accounts?",
  //         trigger: "What to do if someone breaches my online accounts?",
  //       },
  //       {
  //         value:
  //           "Steps to take if I suspect unauthorized access to my accounts?",
  //         label:
  //           "Steps to take if I suspect unauthorized access to my accounts?",
  //         trigger:
  //           "Steps to take if I suspect unauthorized access to my accounts?",
  //       },
  //     ],
  //   },

  //   {
  //     id: "What are common cyber threats?",
  //     message:
  //       "Common cyber threats include malware, phishing, and ransomware.",
  //     end: true,
  //   },
  //   {
  //     id: "What should I know about online security threats?",
  //     message:
  //       "Stay vigilant against cyber threats like phishing scams, malware, and unauthorized access.",
  //     end: true,
  //   },
  //   {
  //     id: "What should I do if I've been hacked?",
  //     message:
  //       "If you suspect a hack, change passwords immediately and report the incident to your IT support team.",
  //     end: true,
  //   },
  //   {
  //     id: "Who do I contact for a cybersecurity issue?",
  //     message:
  //       "Contact cybersecurity authorities or your organization's IT helpdesk to report and address any security concerns.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I protect my computer?",
  //     message:
  //       "Ensure your software is up-to-date, use strong, unique passwords, and enable two-factor authentication.",
  //     end: true,
  //   },

  //   {
  //     id: "What steps should I take to secure my online presence?",
  //     message:
  //       "Protect your devices by using firewalls, antivirus software, and keeping your operating system updated.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I recognize phishing emails?",
  //     message:
  //       "Be cautious of unexpected emails, check sender addresses, and avoid clicking on suspicious links.",
  //     end: true,
  //   },

  //   {
  //     id: "Tell me about phishing prevention",
  //     message:
  //       "Prevent phishing by verifying email senders, not clicking on unknown links, and reporting suspicious emails.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if I receive a suspicious email?",
  //     message:
  //       "If you receive a suspicious email, don't click on any links. Report it to your IT department or email provider.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I protect myself from financial frauds?",
  //     message:
  //       "Protect your financial information by using secure, unique passwords for online banking.",
  //     end: true,
  //   },

  //   {
  //     id: "Tell me about online banking security",
  //     message:
  //       "Enable two-factor authentication for your financial accounts for an extra layer of security.",
  //     end: true,
  //   },

  //   {
  //     id: "What steps should I take to prevent financial cybercrimes?",
  //     message:
  //       "Regularly monitor your bank statements and report any unauthorized transactions to your bank immediately.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if my money is stolen from an ATM?",
  //     message: "Contact your bank immediately to report the ATM money theft.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I report ATM money theft?",
  //     message:
  //       "Provide your bank with details of the incident, including the location and time of the ATM transaction.",
  //     end: true,
  //   },

  //   {
  //     id: "My ATM money is missing, what steps should I take?",
  //     message:
  //       "Follow your bank's instructions for reporting and resolving the ATM money theft.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if I lose my credit card?",
  //     message:
  //       "Contact your credit card issuer immediately to report the loss of your credit card.",
  //     end: true,
  //   },

  //   {
  //     id: "My credit card is lost, what steps should I take?",
  //     message:
  //       "Provide necessary information, such as your card number and any recent transactions, to assist in the investigation.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I report a lost credit card?",
  //     message:
  //       "Follow your credit card company's instructions for card replacement and additional security measures.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if I suspect identity theft?",
  //     message:
  //       "Report the identity theft to the local authorities and file a police report.",
  //     end: true,
  //   },

  //   {
  //     id: "How to report identity theft?",
  //     message:
  //       "Contact your bank, credit card companies, and other financial institutions to report the theft and secure your accounts.",
  //     end: true,
  //   },

  //   {
  //     id: "Steps to take if I'm a victim of identity theft?",
  //     message:
  //       "Place a fraud alert on your credit reports and consider freezing your credit to prevent unauthorized activity.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if I lose a device with sensitive information?",
  //     message: "Remotely wipe the data on your lost device if possible.",
  //     end: true,
  //   },

  //   {
  //     id: "Steps to take if my lost device contains personal details?",
  //     message:
  //       "Change passwords for accounts that may be accessed from the lost device.",
  //     end: true,
  //   },

  //   {
  //     id: "How to secure my data if I've lost a device?",
  //     message:
  //       "Report the loss to the local authorities and, if applicable, use tracking features to locate the device.",
  //     end: true,
  //   },

  //   {
  //     id: "What should I do if I accidentally share sensitive information?",
  //     message:
  //       "Immediately retract or delete the shared information if possible",
  //     end: true,
  //   },

  //   {
  //     id: "Steps to take if I've shared personal details accidentally?",
  //     message:
  //       "Notify relevant parties about the accidental information sharing.",
  //     end: true,
  //   },

  //   {
  //     id: "How to mitigate the impact of accidental information sharing?",
  //     message:
  //       "Review and update privacy settings on your accounts to prevent future accidental sharing.",
  //     end: true,
  //   },

  //   {
  //     id: "How can I handle unauthorized access to my online accounts?",
  //     message: "Change passwords for the compromised accounts immediately.",
  //     end: true,
  //   },

  //   {
  //     id: "What to do if someone breaches my online accounts?",
  //     message:
  //       "Enable two-factor authentication for an extra layer of security.",
  //     end: true,
  //   },

  //   {
  //     id: "Steps to take if I suspect unauthorized access to my accounts?",
  //     message:
  //       "Review account activity, log out all sessions, and report the unauthorized access to the platform.",
  //     end: true,
  //   },
  // ];

//   return (
//     <div className="custom-chatbot-container">
//       <ChatBot
//         steps={steps}
//         floating={true}
//         opened={true}
//         headerTitle="AI Legal Decision System"
//         trigger={trigger}
//         handleEnd={() => setTrigger(null)}
//         className="bg-blue-800 font-bold absolute left-0 top-0"
//       />
//     </div>
//   );
// };

function Home() {
  const [popUp, setPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const handleButtonClick = (content) => {
    setPopupContent(content);
    setPopupOpen(true);
  };

  // const handlePopupClose = () => {
  //   setPopupOpen(false);
  // };
  // const handleChatBotToggle = () => {
  //   setShowChatBot(!showChatBot);
  // };
  // const handleWhatsAppClick = async () => {
  //   const response = await axios.post("http://localhost:3000/api/sendMessage");
  //   console.log(response.data); // Check the response from the backend
  //   // Replace 'YOUR_PHONE_NUMBER' with the actual phone number
  //   const phoneNumber = "9733057333";

  //   // Replace 'YOUR_MESSAGE' with the desired pre-filled message
  //   const message = encodeURIComponent("Hello, I have a question.");

  //   // Create the WhatsApp link with the phone number and pre-filled message
  //   const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  //   // Open WhatsApp in a new tab
  //   window.open(whatsappLink, "_blank");
  // };

  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-2xl h-[410px] relative">
        <div className="relative mt-[-5px]">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="ml-[147px]">
            <h1 className="text-5xl text-white mt-4 leading-[60px] font-bold text-left">
              Protect Against Cyber Crime and
            </h1>
            <div className="grid grid-cols-2">
              <div className="mt-12 w-full">
                <Link
                  to="/Complaint"
                  className="w-full px-20 py-3 rounded-md border bg-white text-blue-900 font-semibold text-lg"
                >
                  File a Complaint
                </Link>
              </div>
              <div className="mt-12 ">
                <Button
                  // onClick={handleWhatsAppClick}
                  primary
                  className="px-12 py-3 rounded-md w-full border text-blue-900 bg-white font-semibold text-lg"
                >
                  {/* <img
                    src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                    alt="ChatBot"
                  /> */}
                  Connect via Whatsapp
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[-35px]">
            <img className="h-[90%]" src="/images/main.svg" alt="" srcset="" />
          </div>
        </div>

        {/* Two main Cards AI Legal And Lawyer Support */}
        <div className="grid grid-cols-3 gap-4 mx-[250px] mt-[-80px]">
          <Link className="grid col-span-2 h-[250px]">
            <div className="border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1">
              <p className="text-4xl mb-4 mt-3 text-center font-bold text-blue-900">
                AI Legal Decision Taking System
                {/* <Button
                  onClick={handleChatBotToggle}
                  primary
                  style={{ position: "fixed" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                    alt="ChatBot"
                  />
                </Button> */}
                {/* {showChatBot && <ChatBotComponent />} */}
              </p>
            </div>
          </Link>

          <button onClick={() => setPopUp(true)}>
            <div className="border-1 border-blue-800 rounded-2xl hover:shadow-2xl hover:translate-y-1">
              <img className="h-[80%] mb-2" src="/images/main.svg" alt="" />
              <p className="text-4xl mb-4 text-center font-bold text-blue-900 mt-[-30px]">
                Personalised Lawyer Support
              </p>
            </div>
          </button>
          {popUp && <Modal setPopUp={setPopUp} />}
        </div>

        {/* Empty div to enter text */}
        <div className="bg-blue-800 h-5 mx-[147px] mt-4"></div>

        {/* Trial Card System */}
        <div className="services mb-5 grid grid-cols-3 gap-4 mt-3">
          <Link to="/predict" class="card2">
            <div class="content2">
              <img src="/images/main.svg" alt="" />
              <div class="h6">AI Fake Website Detection</div>
              <div class="hover_content2">
                <p>
                  mParticle’s customer data platform empowers you to Integrate
                  all of your data and orchestrate it across channels, partners,
                  and systems.
                </p>
              </div>
            </div>
          </Link>
          <Link class="card2">
            <div class="content2">
              <img src="/images/main.svg" alt="" />
              <div class="h6">AI Illegal Credit Card Detetction</div>
              <div class="hover_content2">
                <p>
                  mParticle’s customer data platform empowers you to Integrate
                  all of your data and orchestrate it across channels, partners,
                  and systems.
                </p>
              </div>
            </div>
          </Link>
          <Link class="card2">
            <div class="content2">
              <img src="/images/main.svg" alt="" />
              <div class="h6">Automated Frozen Funds Recovery</div>
              <div class="hover_content2">
                <p>
                  mParticle’s customer data platform empowers you to Integrate
                  all of your data and orchestrate it across channels, partners,
                  and systems.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* divider */}
        <div className="px-6 mt-16">
          <img src="/images/divider.svg" alt="" />
        </div>
        <Marquee />

        {/* Get to know About Us */}
        <p className="font-bold text-right px-[147px] mt-32 text-blue-900 text-5xl">GET TO KNOW ABOUT US</p>
        <div className='grid grid-cols-3 gap-1 px-[100px]'>
          <div className='mt-[-70px]'><img className="" src="/images/know.svg" alt="" /></div>
          <div className='col-span-2'>
            <p className='mt-12 text-justify px-5'>"Welcome to 1930, where technological prowess meets legal finesse. As a beacon in the digital realm, we are your premier destination for AI-infused solutions, offering an unparalleled convergence of cyber expertise, cognitive guidance, and adaptive security. Explore a realm of advanced tools, from legal decision support to automated recovery, meticulously crafted to fortify your digital resilience. Join us on a journey of empowerment, understanding, and unwavering protection against the evolving landscape of cyber threats. At 1930, your safety is our priority, and your digital well-being is our commitment."</p>
        <p className="font-bold text-right px-[147px] mt-32 text-blue-900 text-5xl">
          GET TO KNOW ABOUT US
        </p>
        <div className="grid grid-cols-3 gap-1 px-[100px]">
          <div className="mt-[-70px]">
            <img className="" src="/images/know.svg" alt="" />
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-justify px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              possimus saepe deleniti blanditiis natus dolor, magnam sapiente,
              similique illo nihil illum tenetur quia explicabo minus, nostrum
              tempora? Amet iste atque odit numquam distinctio fugiat velit
              harum accusamus quia rerum. Dolorem quidem doloribus vitae
              suscipit quam necessitatibus sed veniam iste amet harum? Ducimus
              adipisci illo similique cupiditate ullam iure assumenda vero
              maiores aut. Quam saepe laboriosam, architecto adipisci distinctio
              quasi, iure, reiciendis quo ea iste fuga magni dolores sed aliquid
              doloremque. Quas sapiente atque officia officiis voluptas saepe
              eveniet maxime debitis iure corrupti facilis perferendis a ullam
              eum recusandae, ex reiciendis?
            </p>
          </div>
        </div>

        {/* Buttons to File Complaint */}
        <div className="grid grid-cols-3 mx-[147px] gap-4 border-1 rounded-md p-12 border-blue-900">
        <div className="grid grid-rows-6 gap-3">
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick(
          `Deceptive emails or websites imitate trusted entities to trick users into revealing sensitive information,
           If you have fallen victim to a phishing attack, take immediate action: 
           Precautions and Prevention : Change passwords promptly.
           Enable two-factor authentication for added security.
           Stay vigilant and report phishing incidents promptly.
           Verify the authenticity of emails and websites before sharing sensitive information`
        )}
      >
        Phishing Fraud
      </button>
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick('Unauthorized use of personal information', 
        "Secure your identity:",
        "•	Report promptly",
        "•	Freeze credit",
        "•	Monitor accounts",
        "•	Update passwords",
        "•	Enable two-factor authentication",
        "Swift reporting and proactive measures crucial for combating identity theft.")}
      >
        Identity Theft
      </button>
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick('Online Fraud popup content goes here.')}
      >
        Online Fraud
      </button>
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick('Ransomware Attacks popup content goes here.')}
      >
        Ransomware Attacks
      </button>
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick('Child Exploitation popup content goes here.')}
      >
        Child Exploitation
      </button>
      <button
        className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
        onClick={() => handleButtonClick('Cyberbullying popup content goes here.')}
      >
        Cyberbullying
      </button>
      {isPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center"
          onClick={handlePopupClose}
        >
          <div className="bg-white m-9 h-[70%] w-[70%] p-12 rounded shadow-lg">
            <div>{popupContent}</div>
            <button
              className="p-3 border rounded-md bg-blue-900 text-white font-semibold border-blue-800"
              onClick={() =>
                handleButtonClick("Phishing Fraud popup content goes here.")
              }
            >
              Phishing Fraud
            </button>
            <Link to="/Complaint" className="mt-4 p-2.5 border rounded-md bg-blue-900 text-white font-semibold border-blue-800">File a Complaint</Link>
          </div>
          <div className="bg-gray-100 col-span-2">
            <div className="p-4">kjfbhsyudg</div>
          </div>
        </div>

        {/* Lawyer Section starts */}
        <div className="mx-[147px] mt-20 border-2 border-blue-900 rounded-xl">
          <p className="leading-[70px] text-right font-bold pt-6 text-5xl w-[80%] text-blue-900">
            Empower Your Legal Journey: Get Supervised By our Best Lawyers
          </p>
          <p className="mb-9 mt-2 text-xl text-center text-blue-950">
            Sail through legal challenges with expert help, ensuring your peace
            of mind.
          </p>
        </div>

        {/* Lawyer Cards */}
        <div className="grid grid-cols-4 gap-4 mt-14 px-[147px]">
          <div className="bg-gray-200 rounded-md h-[320px]">
            <div className="bg-white h-[200px] m-4">
              <img src="" alt="" />
            </div>

            <div>
              <p className="text-2xl font-bold text-center text-blue-900">
                Mr. Landon Dalecki{" "}
              </p>
              <p className="text-lg font-medium text-center text-blue-950">
                Corporate Law, JD{" "}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-36 mt-20">
          <Row>
            <Col>
              <img src="/images/img-2.jpeg" alt="" />
            </Col>
            <Col>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I access the AI Decision Legal System on your website?</Accordion.Header>
        <Accordion.Body>
        Navigate to the "Legal Services" section, where you can interact with our AI system to receive quick legal insights.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is the Personalized Lawyer Support available 24/7?</Accordion.Header>
        <Accordion.Body>
        Yes, our platform connects you with legal experts around the clock to ensure support whenever you need it.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What steps should I take if I suspect credit card fraud, and how can your platform assist??</Accordion.Header>
        <Accordion.Body>
        Report the suspicion immediately, and our Credit Card Fraud Detection service will analyze the situation, providing guidance on the next steps to secure your accounts.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Do you offer legal advice in specific areas, or is it a general legal support service?</Accordion.Header>
        <Accordion.Body>
        Our Personalized Lawyer Support spans various legal areas, ensuring you get expert advice tailored to your specific legal needs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How does your platform handle user privacy and data security?</Accordion.Header>
        <Accordion.Body>
        We prioritize user privacy and employ robust security measures to safeguard your data. Our practices comply with industry standards and regulations.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can I submit my own topics or questions for consideration in your Blogs and Articles section?</Accordion.Header>
        <Accordion.Body>
        Absolutely! We encourage user engagement. Feel free to suggest topics or questions, and our team may include them in upcoming content.
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
            <h1 className="text-4xl font-bold text-center text-blue-900">
              Satisfaction when their issues gets resolved
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-900"></span>
              <p>Leroy Jenkins</p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                  veritatis, quos iure harum.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-900"></span>
              <p>Leroy Jenkins</p>
            </div>
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
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
