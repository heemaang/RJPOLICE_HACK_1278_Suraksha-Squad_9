import React from 'react'
import Navbar from './screens/Navbar'

function Cyber() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 h-[100px] to-gray-900 rounded-b-2xl relative'>
      <div>
        <Navbar/>
      </div>
      <div className='m-6 p-3 bg-gray-100'>
        <div className='bg-gray-200 p-3'>
        <div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src="https://via.placeholder.com/150"/>
        <div class="mt-4">
            <h2 class="text-xl  font-semibold">Cyber Stalking</h2>
            <p class="text-gray-600">Cyber stalking is a silent disease, fight it with awareness</p>
            <div class="flex justify-between items-center mt-4">
                <button class="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
            </div>
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Cyber
