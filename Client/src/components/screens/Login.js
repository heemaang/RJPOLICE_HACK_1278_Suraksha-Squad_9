import { useState, useRef } from "react";
import { checkValidData } from "../Validate";
import { auth, provider } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";



const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
    // console.log(email);

    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign in sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/")
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate('/')
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flex">
      <div className="w-3/5">
        <img
          className="h-100 mt-11 w-39 p-6"
          src="./images/home.jpg"
          alt="loginpage"
        />
      </div>

      <div className="w-1/2 h-full ">
        <div className="mt-28">
          <h1 className="text-center font-poppins not-italic font-[700] leading-9 text-blue-900 text-[64px] ml-[-10rem] mb-5">
            1930-Helpline.
          </h1>
          <p className=" ml-[-11rem] text-center text-[#556987] font-poppins not-italic text-[18px] leading-7 font-medium">Discover a platform designed to streamline legal decision-making..</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="text-center ms-5">
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              required
              placeholder="Full Name"
              className=" bg-gray-100 
          rounded-lg p-[12px] m-[10px] mt-3 w-[74%] border ml-[-10rem] font-['Poppins'] font-medium"
            />
          )}

          <br></br>
          {/* <label for="email">Email</label> */}
          <input
            ref={email}
            type="text"
            required
            placeholder="Email address"
            className="border border-stroke bg-gray-100 rounded-lg ml-[-10rem] p-[12px] m-[10px] w-[30rem] font-['Poppins'] font-medium"
          />
          <br></br>
          <input
            ref={password}
            // type={passwordType}
            type="password"
            required
            placeholder="Password"
            className="border border-stroke bg-gray-100 rounded-lg p-[12px]  ml-[-10rem] m-[10px] w-[30rem] font-['Poppins'] font-medium"
          />
          <br></br>

          <p className="text-red-500 font-bold py-2 font-['Poppins']">{errorMessage} </p>
          <button
            className="font-poppins bg-blue-900 p-[12px] ml-[-10rem] m-[10px] w-[30rem] rounded-md  text-[#F0FDF4] font-poppins text-md font-medium leading-[24px]"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <div>
            <button onClick={handleGoogle} className=" p-[12px] m-[10px] w-[30rem] ml-[-10rem] rounded-md border border-solid border-gray-100 bg-white box-shadow-md ">
              <img
                className="flex justify-center w-7 items-center"
                src="./images/Google_icon-icons.com_66793.png"
                alt="logo"
              />
              <p className=" font-poppins font-medium mt-[-25px]">Sign in with Google</p>
            </button>
            <p className="py-4 cursor-pointer font-poppins font-medium w-[20rem] ml-20 mt-[-22px]" onClick={toggleSignInForm}>
              {isSignInForm
                ? " New to 1930 Helpline ? Sign Up Now"
                : "Already have an account? Sign in"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
