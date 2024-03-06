import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignForm(!isSignInForm);
    };
  return (
    <div>
      <Header />
      <div className="bg-img absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="login-form w-3/12  text-white bg-opacity-85 h-[580px] bg-black absolute p-8 top-0 bottom-0 my-52  right-0 left-0 mx-auto">
        <form action="" className="flex justify-center flex-col gap-3">
        <h1 className="font-bold text-4xl p-3">{isSignInForm ? <span>Sign In </span> : <span>Sign Up</span> }</h1>
            { !isSignInForm ? <input type="text" placeholder="Name" className="p-3 px-5 bg-gray-700 bg-opacity-70  m-2" /> : null} 
            <input type="text" placeholder="Email Address"  className="p-3 bg-gray-700 bg-opacity-70 px-5  m-2"/>
            <input type="text" placeholder="Password" className="p-3 px-5 bg-gray-700 bg-opacity-70  m-2"/>
            <button className="m-2 bg-red-600 px-14 py-2 font-semibold text-white rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <div className="remember-me flex justify-between text-xs text-gray-400 items-center">
            <label htmlFor="remember"><input type="checkbox" className="" id="remember"/>Remember me</label>
            <a href="/forgot_pass">forgot password?</a>    
            </div>
            <div className="sign-up flex text-sm justify-start">
                <span className="text-gray-400 ">New to Netflix?</span>
                <span onClick={toggleSignInForm} className="hover:cursor-pointer hover:underline"> &nbsp; Sign Up Now.</span>
            </div> 
            <div className="captcha text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/learn_more" className="text-blue-600">Learn more.</a></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
