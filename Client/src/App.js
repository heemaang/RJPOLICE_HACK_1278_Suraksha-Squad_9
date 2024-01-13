import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './components/screens/Home';
import Lawyerdashboard from './components/screens/Lawyerdashboard';
import LawyerRegister from './components/screens/LawyerRegister';
import LawyerLogin from './components/screens/LawyerLogin';
import Login from './components/screens/Login';
import { Button, Dropdown } from 'semantic-ui-react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import ComplaintAnony from './components/screens/ComplaintAnony';
import Cyber from './components/Cyber';
import Marquee from './components/Marquee';

const steps = [
  {
    id: "Greet",        
    message: "Hello, Welcome to Suraksha Squad Ai Decision System",        
    trigger: "Done",        
  },        
  {       
    id: "Done",        
    message: "Please enter your name!",        
    trigger: "waiting1",        
  },      
  {      
    id: "waiting1",      
    user: true,      
    trigger: "Name",      
  },      
  {       
    id: "Name",     
    message: "Hi {previousValue}, Please select your issue",     
    trigger: "issues",     
  },      
  {      
    id: "issues",   
    options: [   
      {    
        value: "cyberthreats",   
        label: "cyberthreats",        
        trigger: "cyberthreats",       
      },       
      { value: "reporting of cyber incidents", label: "reporting of cyber incidents", trigger: "reporting of cyber incidents" },       
      {    
        value: "protect",   
        label: "protect",        
        trigger: "protect",       
      },
      {    
        value: "phishing",   
        label: "phishing",        
        trigger: "phishing",       
      },
      {    
        value: "financialfrauds",   
        label: "financialfrauds",        
        trigger: "financialfrauds",       
      },
      {    
        value: "atm_money_theft",   
        label: "atm_money_theft",        
        trigger: "atm_money_theft",       
      },
      {    
        value: "credit_card_lost",   
        label: "credit_card_lost",        
        trigger: "credit_card_lost",       
      },
      {    
        value: "identity_theft",   
        label: "identity_theft",        
        trigger: "identity_theft",       
      },
      {    
        value: "lost_device_with_details",   
        label: "lost_device_with_details",        
        trigger: "lost_device_with_details",       
      },
      {    
        value: "accidental_info_sharing",   
        label: "accidental_info_sharing",        
        trigger: "accidental_info_sharing",       
      },
      {    
        value: "unauthorized_access_online_accounts",   
        label: "unauthorized_access_online_accounts",        
        trigger: "unauthorized_access_online_accounts",       
      },
    ],       
  },       
  {       
    id: "cyberthreats",       
    options: [   
      {    
        value: "What are common cyber threats?",   
        label: "What are common cyber threats?",        
        trigger: "What are common cyber threats?",       
      }, 
      {
        value: "What should I know about online security threats?",   
        label: "What should I know about online security threats?",        
        trigger: "What should I know about online security threats?",  
        },
    ],             
  },  
  
  {       
    id: "reporting of cyber incidents",       
    options: [   
      {    
        value: "What should I do if I've been hacked?",   
        label: "What should I do if I've been hacked?",        
        trigger: "What should I do if I've been hacked?",       
      }, 
      {
        value: "Who do I contact for a cybersecurity issue?",   
        label: "Who do I contact for a cybersecurity issue?",        
        trigger: "Who do I contact for a cybersecurity issue?",  
        },
    ],             
  }, 

  {       
    id: "protect",       
    options: [   
      {    
        value: "How can I protect my computer?",   
        label: "How can I protect my computer?",        
        trigger: "How can I protect my computer?",       
      }, 
      {
        value: "What steps should I take to secure my online presence?",   
        label: "What steps should I take to secure my online presence?",        
        trigger: "What steps should I take to secure my online presence?",  
        },
    ],             
  },

  {       
    id: "phishing",       
    options: [   
      {    
        value: "How can I recognize phishing emails?",   
        label: "How can I recognize phishing emails?",        
        trigger: "How can I recognize phishing emails?",       
      }, 
      {
        value: "Tell me about phishing prevention",   
        label: "Tell me about phishing prevention",        
        trigger: "Tell me about phishing prevention",  
        },
        {
          value: "What should I do if I receive a suspicious email?",   
          label: "What should I do if I receive a suspicious email?",        
          trigger: "What should I do if I receive a suspicious email?",  
          },
    ],             
  },

  {       
    id: "financialfrauds",       
    options: [   
      {    
        value: "How can I protect myself from financial frauds?",   
        label: "How can I protect myself from financial frauds?",        
        trigger: "How can I protect myself from financial frauds?",       
      }, 
      {
        value: "Tell me about online banking security",   
        label: "Tell me about online banking security",        
        trigger: "Tell me about online banking security",  
        },
        {
          value: "What steps should I take to prevent financial cybercrimes?",   
          label: "What steps should I take to prevent financial cybercrimes?",        
          trigger: "What steps should I take to prevent financial cybercrimes?",  
          },
    ],             
  },

  {       
    id: "atm_money_theft",       
    options: [   
      {    
        value: "What should I do if my money is stolen from an ATM?",   
        label: "What should I do if my money is stolen from an ATM?",        
        trigger: "What should I do if my money is stolen from an ATM?",       
      }, 
      {
        value: "How can I report ATM money theft?",   
        label: "How can I report ATM money theft?",        
        trigger: "How can I report ATM money theft?",  
        },
        {
          value: "My ATM money is missing, what steps should I take?",   
          label: "My ATM money is missing, what steps should I take?",        
          trigger: "My ATM money is missing, what steps should I take?",  
          },
    ],             
  },

  {       
    id: "credit_card_lost",       
    options: [   
      {    
        value: "What should I do if I lose my credit card?",   
        label: "What should I do if I lose my credit card?",        
        trigger: "What should I do if I lose my credit card?",       
      }, 
      {
        value: "My credit card is lost, what steps should I take?",   
        label: "My credit card is lost, what steps should I take?",        
        trigger: "My credit card is lost, what steps should I take?",  
        },
        {
          value: "How can I report a lost credit card?",   
          label: "How can I report a lost credit card?",        
          trigger: "How can I report a lost credit card?",  
          },
    ],             
  },

  {       
    id: "identity_theft",       
    options: [   
      {    
        value: "What should I do if I suspect identity theft?",   
        label: "What should I do if I suspect identity theft?",        
        trigger: "What should I do if I suspect identity theft?",       
      }, 
      {
        value: "How to report identity theft?",   
        label: "How to report identity theft?",        
        trigger: "How to report identity theft?",  
        },
        {
          value: "Steps to take if I'm a victim of identity theft?",   
          label: "Steps to take if I'm a victim of identity theft?",        
          trigger: "Steps to take if I'm a victim of identity theft?",  
          },
    ],             
  },

  {       
    id: "lost_device_with_details",       
    options: [   
      {    
        value: "What should I do if I lose a device with sensitive information?",   
        label: "What should I do if I lose a device with sensitive information?",        
        trigger: "What should I do if I lose a device with sensitive information?",       
      }, 
      {
        value: "Steps to take if my lost device contains personal details?",   
        label: "Steps to take if my lost device contains personal details?",        
        trigger: "Steps to take if my lost device contains personal details?",  
        },
        {
          value: "How to secure my data if I've lost a device?",   
          label: "How to secure my data if I've lost a device?",        
          trigger: "How to secure my data if I've lost a device?",  
          },
    ],             
  },

  {       
    id: "accidental_info_sharing",       
    options: [   
      {    
        value: "What should I do if I accidentally share sensitive information?",   
        label: "What should I do if I accidentally share sensitive information?",        
        trigger: "What should I do if I accidentally share sensitive information?",       
      }, 
      {
        value: "Steps to take if I've shared personal details accidentally?",   
        label: "Steps to take if I've shared personal details accidentally?",        
        trigger: "Steps to take if I've shared personal details accidentally?",  
        },
        {
          value: "How to mitigate the impact of accidental information sharing?",   
          label: "How to mitigate the impact of accidental information sharing?",        
          trigger: "How to mitigate the impact of accidental information sharing?",  
          },
    ],             
  },

  {       
    id: "unauthorized_access_online_accounts",       
    options: [   
      {    
        value: "How can I handle unauthorized access to my online accounts?",   
        label: "How can I handle unauthorized access to my online accounts?",        
        trigger: "How can I handle unauthorized access to my online accounts?",       
      }, 
      {
        value: "What to do if someone breaches my online accounts?",   
        label: "What to do if someone breaches my online accounts?",        
        trigger: "What to do if someone breaches my online accounts?",  
        },
        {
          value: "Steps to take if I suspect unauthorized access to my accounts?",   
          label: "Steps to take if I suspect unauthorized access to my accounts?",        
          trigger: "Steps to take if I suspect unauthorized access to my accounts?",  
          },
    ],             
  },

  {       
    id: "What are common cyber threats?",       
    message:       
      "Common cyber threats include malware, phishing, and ransomware.",       
    end: true,       
  },  
  {       
    id: "What should I know about online security threats?",       
    message:       
      "Stay vigilant against cyber threats like phishing scams, malware, and unauthorized access.",       
    end: true,       
  },{       
    id: "What should I do if I've been hacked?",       
    message:       
      "If you suspect a hack, change passwords immediately and report the incident to your IT support team.",       
    end: true,       
  },{       
    id: "Who do I contact for a cybersecurity issue?",       
    message:       
      "Contact cybersecurity authorities or your organization's IT helpdesk to report and address any security concerns.",       
    end: true,       
  }, 

  {       
    id: "How can I protect my computer?",       
    message:       
      "Ensure your software is up-to-date, use strong, unique passwords, and enable two-factor authentication.",       
    end: true,       
  },

  {       
    id: "What steps should I take to secure my online presence?",       
    message:       
      "Protect your devices by using firewalls, antivirus software, and keeping your operating system updated.",       
    end: true,       
  },

  {       
    id: "How can I recognize phishing emails?",       
    message:       
      "Be cautious of unexpected emails, check sender addresses, and avoid clicking on suspicious links.",       
    end: true,       
  },

  {       
    id: "Tell me about phishing prevention",       
    message:       
      "Prevent phishing by verifying email senders, not clicking on unknown links, and reporting suspicious emails.",       
    end: true,       
  },

  {       
    id: "What should I do if I receive a suspicious email?",       
    message:       
      "If you receive a suspicious email, don't click on any links. Report it to your IT department or email provider.",       
    end: true,       
  },

  {       
    id: "How can I protect myself from financial frauds?",       
    message:       
      "Protect your financial information by using secure, unique passwords for online banking.",       
    end: true,       
  },

  {       
    id: "Tell me about online banking security",       
    message:       
      "Enable two-factor authentication for your financial accounts for an extra layer of security.",       
    end: true,       
  },

  {       
    id: "What steps should I take to prevent financial cybercrimes?",       
    message:       
      "Regularly monitor your bank statements and report any unauthorized transactions to your bank immediately.",       
    end: true,       
  },

  {       
    id: "What should I do if my money is stolen from an ATM?",       
    message:       
      "Contact your bank immediately to report the ATM money theft.",       
    end: true,       
  },

  {       
    id: "How can I report ATM money theft?",       
    message:       
      "Provide your bank with details of the incident, including the location and time of the ATM transaction.",       
    end: true,       
  },

  {       
    id: "My ATM money is missing, what steps should I take?",       
    message:       
      "Follow your bank's instructions for reporting and resolving the ATM money theft.",       
    end: true,       
  },

  {       
    id: "What should I do if I lose my credit card?",       
    message:       
      "Contact your credit card issuer immediately to report the loss of your credit card.",       
    end: true,       
  },

  {       
    id: "My credit card is lost, what steps should I take?",       
    message:       
      "Provide necessary information, such as your card number and any recent transactions, to assist in the investigation.",       
    end: true,       
  },
  
  {       
    id: "How can I report a lost credit card?",       
    message:       
      "Follow your credit card company's instructions for card replacement and additional security measures.",       
    end: true,       
  },

  {       
    id: "What should I do if I suspect identity theft?",       
    message:       
      "Report the identity theft to the local authorities and file a police report.",       
    end: true,       
  },

  {       
    id: "How to report identity theft?",       
    message:       
      "Contact your bank, credit card companies, and other financial institutions to report the theft and secure your accounts.",       
    end: true,       
  },

  {       
    id: "Steps to take if I'm a victim of identity theft?",       
    message:       
      "Place a fraud alert on your credit reports and consider freezing your credit to prevent unauthorized activity.",       
    end: true,       
  },

  {       
    id: "What should I do if I lose a device with sensitive information?",       
    message:       
      "Remotely wipe the data on your lost device if possible.",       
    end: true,       
  },

  {       
    id: "Steps to take if my lost device contains personal details?",       
    message:       
      "Change passwords for accounts that may be accessed from the lost device.",       
    end: true,       
  },

  {       
    id: "How to secure my data if I've lost a device?",       
    message:       
      "Report the loss to the local authorities and, if applicable, use tracking features to locate the device.",       
    end: true,       
  },

  {       
    id: "What should I do if I accidentally share sensitive information?",       
    message:       
      "Immediately retract or delete the shared information if possible",       
    end: true,       
  },

  {       
    id: "Steps to take if I've shared personal details accidentally?",       
    message:       
      "Notify relevant parties about the accidental information sharing.",       
    end: true,       
  },

  {       
    id: "How to mitigate the impact of accidental information sharing?",       
    message:       
      "Review and update privacy settings on your accounts to prevent future accidental sharing.",       
    end: true,       
  },

  {       
    id: "How can I handle unauthorized access to my online accounts?",       
    message:       
      "Change passwords for the compromised accounts immediately.",       
    end: true,       
  },

  {       
    id: "What to do if someone breaches my online accounts?",       
    message:       
      "Enable two-factor authentication for an extra layer of security.",       
    end: true,       
  },

  {       
    id: "Steps to take if I suspect unauthorized access to my accounts?",       
    message:       
      "Review account activity, log out all sessions, and report the unauthorized access to the platform.",       
    end: true,       
  },


]; 

const ChatBotComponent = () => {

  const [trigger, setTrigger] = useState(null);

  useEffect(() => {
    if (trigger) {
      // Use a delay to prevent rapid triggering of next step
      setTimeout(() => {
        setTrigger(null);
      }, 100);
    }
  }, [trigger]);
  return(
  <ChatBot
    steps={steps}
    floating={true} // This makes the chatbot floating
    opened={true}   // Open the chatbot by default
    headerTitle="AI Legal Decision System"
    //botAvatar="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" // Set your own avatar image
    trigger={trigger}
    handleEnd={() => setTrigger(null)} 
  />
);
};

function App() {
  // const [userName, setUserName] = useState("");
    const [showChatBot, setShowChatBot] = useState(false);

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setUserName(user.displayName);
  //       } else {
  //         setUserName("");
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

    const handleChatBotToggle = () => {
      setShowChatBot(!showChatBot);
    };
    const handleWhatsAppClick = async () => {
      const response = await axios.post('http://localhost:3000/api/sendMessage');
        console.log(response.data); // Check the response from the backend
      // Replace 'YOUR_PHONE_NUMBER' with the actual phone number
      const phoneNumber = "9733057333";
      
      // Replace 'YOUR_MESSAGE' with the desired pre-filled message
      const message = encodeURIComponent("Hello, I have a question.");
    
      // Create the WhatsApp link with the phone number and pre-filled message
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
      // Open WhatsApp in a new tab
      window.open(whatsappLink, '_blank');
    };
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/Lawyerdashboard' element={<Lawyerdashboard/>} />
        <Route path='/LawyerRegister' element={<LawyerRegister/>} />
        <Route path='/LawyerLogin' element={<LawyerLogin/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ComplaintAnony' element={<ComplaintAnony/>}/>
        <Route path='/Cyber' element={<Cyber/>}/>
        <Route path='/marquee' element={<Marquee/>}/>
      </Routes>
    </Router>
    <div style={{ position: 'fixed', bottom: 20, right: 20, opacity: 150}}>
          <Button onClick={handleChatBotToggle} primary>
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
              alt="ChatBot"
            />
          </Button>
          <Button onClick={handleWhatsAppClick} primary>
          <img
      src="https://img.icons8.com/color/48/000000/whatsapp.png"
      alt="WhatsApp"
    />
          </Button>
          {showChatBot && <ChatBotComponent />}
          </div>
          {/* {showChatBot && <ChatBotComponent />} */}
    </>
  );
}

export default App;
