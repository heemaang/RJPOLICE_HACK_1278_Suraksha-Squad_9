import React, { useState, props } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import Lawyerdashboard from './Lawyerdashboard';



const Lawyerform = (props) => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/Lawyerdashboard");
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

const [lawyerData, setlawyerData] = useState({

  fullName: "",
  email : "",
  password: "",
  retypepass : "",
  barAssociationNumber: "",
  legalSpecialization: "",
  yearsOfPractice: "8",
  lawSchoolAttended: "",
  professionalCertifications: "",
  lawFirm: "",
  officeAddress: "",
  contactNumber: "",
  areasOfPractice: [],
  linkedinProfile: "",
  lawFirmWebsite: "",
  preferredContactHours: "",
  consultationAvailability: "",
  bio: "",
});
const [errorMsg, setErrorMsg] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
 
  if (name === "bio") {
     if (value.length <= 45) {
      setlawyerData((prevDetails) => (
         {
           ...prevDetails,
           [name]: value,
         }
       ));
       setErrorMsg("");
     } else {
       setErrorMsg("Bio should not exceed 30 characters.");
     }
  } else {
     setlawyerData((prevDetails) => (
       {
         ...prevDetails,
         [name]: value,
       }
     ));
  }
 };
  const handleArrayChange = (e) => {
    const practises = e.target.value.split(',').map((practice) => practice.trim());
    setlawyerData((prevValue)=>({...prevValue, areasOfPractice : practises}));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(lawyerData);
      await addDoc(collection(props.db, "Lawyerdetails"),{
        ...lawyerData,
      }).then(function(res){
        alert("Document written with ID: ", res.id);
      }).catch(function(err){
        alert("Error adding document: ");
      })

      if(true) {
        window.location.href = '/lawyerpage';
     }
   }

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
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text" name="fullName" value={lawyerData.fullName} onChange={handleChange} required
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email" name='email' value={lawyerData.email} onChange={handleChange} required
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password" name='password' value={lawyerData.password} onChange={handleChange} required
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Re-type Password
                  </label>
                  <input
                    type="password" name='retypepass' value={lawyerData.retypepass} onChange={handleChange} required
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark"
                  />
                </div>

                <div className="my-4 border-b border-stroke">
  <h2 className="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Professional Information</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="barAssociationNumber">Bar Association Registration Number:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="barAssociationNumber" name="barAssociationNumber" value={lawyerData.barAssociationNumber} onChange={handleChange} required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="legalSpecialization">Legal Specialization:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="legalSpecialization" name="legalSpecialization" value={lawyerData.legalSpecialization} onChange={handleChange} required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="yearsOfPractice">Years of Practice:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="yearsOfPractice" name="yearsOfPractice" value={lawyerData.yearsOfPractice} onChange={handleChange} required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawSchoolAttended">Law School Attended:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="lawSchoolAttended" name="lawSchoolAttended" value={lawyerData.lawSchoolAttended} onChange={handleChange} required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="professionalCertifications">Professional Certifications:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="professionalCertifications" value={lawyerData.professionalCertifications} name="professionalCertifications" onChange={handleChange} required />
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Practice Details</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawFirm">Law Firm (if applicable):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="lawFirm" value={lawyerData.lawFirm} onChange={handleChange} name="lawFirm" required/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="officeAddress">Office Address:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="officeAddress" value={lawyerData.officeAddress} onChange={handleChange} name="officeAddress" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="contactNumber">Contact Number:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="tel" id="contactNumber" value={lawyerData.contactNumber} onChange={handleChange} name="contactNumber" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="areasOfPractice">Areas of Practice:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="areasOfPractice" value={lawyerData.areasOfPractice} onChange={handleArrayChange} name="areasOfPractice" required/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Online Presence</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="linkedinProfile">LinkedIn Profile (if any):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="url" id="linkedinProfile" value={lawyerData.linkedinProfile} onChange={handleChange} name="linkedinProfile" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawFirmWebsite">Law Firm Website (if any):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="url" id="lawFirmWebsite" value={lawyerData.lawFirmWebsite} onChange={handleChange} name="lawFirmWebsite" required/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-black font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Availability</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="preferredContactHours">Preferred Contact Hours:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" value={lawyerData.preferredContactHours} onChange={handleChange} name="preferredContactHours"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="consultationAvailability">Available for Consultations (Days and Times):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" value={lawyerData.consultationAvailability} id="consultationAvailability" onChange={handleChange} name="consultationAvailability"/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="block text-gray-700 text-sm font-bold mb-2">Keep bio.</h2>
  <div>
    <textarea name="bio" id="bio" onChange={handleChange} rows="5" placeholder="Write something about yourself..." value={lawyerData.bio} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
  </div>
</div>
{/* <div className="bg-gray-100 p-8">
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
    </div> */}


                <button className="flex w-full justify-center text-white rounded bg-blue-500 p-3 mt-6 font-medium hover:bg-blue-600">
                  Submit Information
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
