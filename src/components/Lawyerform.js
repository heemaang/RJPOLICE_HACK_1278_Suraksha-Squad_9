import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lawyerform = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/lawyerdashboard");
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      // Update the state with the selected image
      setSelectedImage(file);

      // You may also want to perform additional tasks, such as uploading the image to a server.
    }
};

  return (
    <>
    <div className="bg-gradient-to-r from-slate-800 to-slate-800 h-28">  </div>
    <div className="grid grid-flow-col gap-9 items-center">
    <div className="flex flex-col">
     <div className="rounded-md border border-stroke w-70% bg-white p-36 shadow-default border-strokedark bg-boxdark">
            <div className="border-b border-stroke pb-2 px-6.5 border-strokedark">
              <h3 className="text-black font-extrabold text-[36px] mb-8">
                Lawyer Registration Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark"
                  />
                </div>

                <div class="my-4 border-b border-stroke">
  <h2 class="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Professional Information</h2>

  <div class="grid grid-cols-2 gap-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="barAssociationNumber">Bar Association Registration Number:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="barAssociationNumber" name="barAssociationNumber" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="legalSpecialization">Legal Specialization:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="legalSpecialization" name="legalSpecialization" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="yearsOfPractice">Years of Practice:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="yearsOfPractice" name="yearsOfPractice" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="lawSchoolAttended">Law School Attended:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="lawSchoolAttended" name="lawSchoolAttended" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="professionalCertifications">Professional Certifications:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="professionalCertifications" name="professionalCertifications" required />
    </div>
  </div>
</div>

<div class="my-4">
  <h2 class="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Practice Details</h2>

  <div class="grid grid-cols-2 gap-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="lawFirm">Law Firm (if applicable):</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="lawFirm" name="lawFirm" />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="officeAddress">Office Address:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="officeAddress" name="officeAddress" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="contactNumber">Contact Number:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="tel" id="contactNumber" name="contactNumber" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="areasOfPractice">Areas of Practice:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="areasOfPractice" name="areasOfPractice" required/>
    </div>
  </div>
</div>

<div class="my-4">
  <h2 class="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Online Presence</h2>

  <div class="grid grid-cols-2 gap-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="linkedinProfile">LinkedIn Profile (if any):</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="url" id="linkedinProfile" name="linkedinProfile" />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="lawFirmWebsite">Law Firm Website (if any):</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="url" id="lawFirmWebsite" name="lawFirmWebsite"/>
    </div>
  </div>
</div>

<div class="my-4">
  <h2 class="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Availability</h2>

  <div class="grid grid-cols-2 gap-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="preferredContactHours">Preferred Contact Hours:</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="preferredContactHours" name="preferredContactHours"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="consultationAvailability">Available for Consultations (Days and Times):</label>
      <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="consultationAvailability" name="consultationAvailability"/>
    </div>
  </div>
</div>

<div class="my-4">
  <h2 class="block text-gray-700 text-sm font-bold mb-2">Keep bio.</h2>
  <div>
    <textarea name="bio" id="bio" rows="5" placeholder="Write something about yourself..." class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
  </div>
</div>
<div className="bg-gray-100 p-8">
      <h2 className="text-gray-700 text-xl ml-[-18px] font-bold mb-2">Upload Your Image</h2>

      <div className="flex items-center justify-center">
        <label className="bg-white border-2 border-dashed border-gray-400 rounded-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="p-8">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="max-h-48 max-w-full"
              />
            ) : (
              <p className="text-gray-500">Select an image</p>
            )}
          </div>
        </label>
      </div>
    </div>


                <button onClick={handleClick} className="flex w-full justify-center text-white rounded bg-blue-500 p-3 mt-6 font-medium hover:bg-blue-600">
                  Register Now
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
    </>
  )
}

export default Lawyerform
