import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './Modal.css';
// import { Mousewheel, Pagination } from 'swiper/modules';

function Modal({setPopUp}) {
  return (
    <div className='w-screen h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-center items-center'>
    <div className='bg-white h-96 w-[80%] rounded-md shadow-md mb-20'>
      <h1 className='font-bold text-center text-xl my-3'>Get our Best Lawyers</h1>
      <div>
      {/* <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <div className='grid grid-cols-5 gap-3 px-12 justify-center'>
          <div className='bg-gray-200 rounded-md h-[250px] w-[80%] mb-3'>
            <div className='bg-white h-[120px] m-3'><img src="" alt="" /></div>

            <div>
              <p className='text-2xl font-bold text-center text-blue-900'>Mr. Landon Dalecki </p>
              <p className='text-lg font-medium text-center text-blue-950'>Corporate Law, JD </p>
            </div>
          </div>

          <div className='bg-gray-200 rounded-md h-[250px] w-[80%] mb-3'>
            <div className='bg-white h-[120px] m-3'><img src="" alt="" /></div>

            <div>
              <p className='text-2xl font-bold text-center text-blue-900'>Mr. Landon Dalecki </p>
              <p className='text-lg font-medium text-center text-blue-950'>Corporate Law, JD </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-5'>
        <button className='outline outline-1 w-full outline-blue-600 bg-blue-900 hover:bg-blue-700 text-white rounded-md py-2 px-12'
        onClick={() => setPopUp(false)}>Exit</button>
      </div>
    </div>
  </div>
  )
}

export default Modal
