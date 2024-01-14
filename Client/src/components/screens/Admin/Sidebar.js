import React from 'react'
import { FaTachometerAlt,FaRegUser, FaHandHoldingUsd, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"


function Sidebar({ onLawyerClick, onFrozenFundsClick }) {
  return (
    <div className='bg-blue-900 px-[25px] h-screen'>
    <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Dashboard</h1>
    </div>
    <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
        <FaTachometerAlt color='white' />
        <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard View</p>
    </div>
    <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
                <FaRegUser color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Users</p>
            </div>
            <FaChevronRight color='white' />
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={onLawyerClick}>
            <div className='flex items-center gap-[10px]'>
                <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Lawyers</p>
            </div>
            <FaChevronRight color='white' />
        </div>
    </div>
    <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> RESOLVE</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
                <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Complaints</p>
            </div>
        </div>
        <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer' onClick={onFrozenFundsClick}>
            <FaHandHoldingUsd color='white'/> <p className='text-[14px] leading-[20px] font-normal text-white'>Frozen Funds</p>
        </div>
        <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
            <FaHandHoldingUsd color='white'/> <p className='text-[14px] leading-[20px] font-normal text-white'>Anonymous Complaints</p>
        </div>
    </div>
    
    <div className='bg-white mt-[25px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
        <FaBolt color='darkblue' />
        <p className='text-[12px] leading-[18px] font-normal text-blue-900 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, soluta.</p>
        <button className='bg-blue-900 p-4 text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Logout/ Sign Out</button>

    </div>
</div>
  )
}

export default Sidebar
