import { useRef, useState } from "react";
import Header from "./Header";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/Validate";


const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    // Validate the form data
    //checkValidateData(email,password)
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    //console.log(message)
    seterrorMessage(message);
    if(message) return 

//sign in or sign up
if(!isSignInFrom){
   //sign up logic
   createUserWithEmailAndPassword(auth,
    email.current.value,
    password.current.value
    )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
    // ..
  });
}
else{
    //sign in logic
    signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
         )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
  });

}

    
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input 
            className="my-4 p-4  w-full bg-gray-800 rounded-lg"
            type="text"
            placeholder=" Full Name"
          />
        )}
        <input
          className=" my-4 p-4 w-full bg-gray-800 rounded-lg"
          ref={email}
          type="text"
          placeholder=" Email Address"
        />

        <input
          className="my-4 p-4  w-full bg-gray-800 rounded-lg"
          ref={password}
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-lg font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700  w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? " New to Netflix ? Sign Up Now "
            : "Already Registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;