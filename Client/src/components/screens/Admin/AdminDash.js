import React, {useState} from 'react'
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
import Sidebar from './Sidebar';
import LawyersDetails from '../lawyerDetails';
import FrozenDetails from '../frozendetails';

function AdminDash() {
    const [open, setOpen] = useState(false);
    const [showLawyerDetails, setShowLawyerDetails] = useState(false);
    const [showFrozenDetails, setShowFrozenDetails] = useState(false);

    const showProfile = () => {
        // alert("helloo")
        setOpen(!open)
    }


    const showLawyerDetailsView = () => {
        setShowLawyerDetails(true);
      };

      const showFrozenDetailsView = () => {
        setShowFrozenDetails(true);
        setShowLawyerDetails(false); // Hide Lawyer details when showing Frozen Funds details
      };
  return (
    <div className=''>
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] relative'>
        
        <div className='flex items-center gap-[20px] absolute inset-y-0 right-5'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell />
                <FaEnvelope />
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <p>Government Admin</p>
                <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40' >
                    <img src='/images/main.svg' alt="" />

                </div>

                {
                    open &&
                    <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
                    </div>

                }



            </div>
        </div>
    </div>
    <div className='grid grid-cols-4'>
                <div>
                    <Sidebar onLawyerClick={showLawyerDetailsView} onFrozenFundsClick={showFrozenDetailsView}  />
        </div>
        <div className='col-span-3'>
          {/* Conditional rendering of LawyersDetails */}
          {showLawyerDetails && <LawyersDetails />}
          {showFrozenDetails && <FrozenDetails />}
        </div>
                    
                </div>
        </div>
  )
}

export default AdminDash
