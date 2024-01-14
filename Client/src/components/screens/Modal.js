import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { FaX } from "react-icons/fa6";



function Modal({ setPopUp }) {
  

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='w-screen h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-center items-center'>
        <div className='bg-white h-[70%] w-[80%] rounded-md shadow-md mb-20'>
        <div className='flex justify-between px-5'>
              <FaX className='mt-3 cursor-pointer' onClick={() => setPopUp(false)} color='darkblue'/>
          </div>
          <h1 className='font-bold text-blue-900 mb-4 text-center text-2xl my-3'>Connect to Best Lawyers for Cyber Support</h1>

          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='grid grid-cols-3 mb-4 mx-5 h-[80%] gap-4'>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='grid grid-cols-3 mb-3 mx-5 h-[80%] gap-4'>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
            <Link className='w-full bg-white shadow rounded-md '>
                <div>
                    <img src="/images/main.svg" alt="" />
                </div>
                <p className='text-2xl text-blue-900 font-bold flex justify-center'>Mr. <span> John Delecki</span></p>
                <p className='text-xl mb-4 text-blue-900 font-bold flex justify-center'>Corporate Law</p>
                <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">Connect Now</Button>
            </Link>
        </div>
      </Carousel.Item>
      
    </Carousel>

          
        </div>
      </div>
    </>
  );
}

export default Modal;
