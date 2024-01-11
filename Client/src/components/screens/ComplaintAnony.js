import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ComplaintAnony() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 h-[100px] to-gray-900 rounded-b-2xl relative'>
        <div className='relative'><Navbar/></div>

      <section class="text-gray-600 body-font relative px-[100px] mt-20 mb-6">
  <div class="container m-6 flex flex-row">
    <div class="rounded-lg bg-gray-100 p-4 flex flex-col justify-start relative">
      <img src="/images/img-2.jpeg" className='w-full h-[500px]' alt="" srcset="" />
      <div class="bg-white relative flex flex-wrap py-6 w-full rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full">
      <h2 class="text-blue-900 text-4xl mb-1 font-bold">Complaint Anonymously</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Subject of your Complaint</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-gradient-to-r from-slate-800 to-slate-800 border-0 py-2 px-6 focus:outline-none hover:from-gray-800 hover:to-slate-600 hover:translate-y-1 rounded text-lg">Submit Your Issue</button>
      <p class="text-xs text-gray-500 mt-3">For immediate assistance, feel free to contact us directly.</p>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default ComplaintAnony
