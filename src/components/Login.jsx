import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    //validating form data
    let errmsg = checkvalidData(email.current.value, password.current.value);
    setErrorMessage(errmsg);
    if (errmsg) return; //returns if message is null
    if (!isSignInForm) {
      //Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " ---- " + errorMessage);
          // ..
        });
    } else {
      //Signin Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " ---- " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-img absolute">
        <img src={BG_URL} alt="" />
      </div>
      <div className="login-form w-3/12  text-white bg-opacity-85 h-[650px] bg-black absolute p-8 top-0 bottom-0 my-52  right-0 left-0 mx-auto">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center flex-col gap-3"
        >
          <h1 className="font-bold text-4xl p-3">
            {isSignInForm ? <span>Sign In </span> : <span>Sign Up</span>}
          </h1>
          {!isSignInForm ? (
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-3 px-5 bg-gray-700 bg-opacity-70  m-2"
            />
          ) : null}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 bg-gray-700 bg-opacity-70 px-5  m-2"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 px-5 bg-gray-700 bg-opacity-70  m-2"
          />
          <p className="text-xs px-2 text-gray-500">
            (use 1 capital letter,special character and numbers in password
            max-length=8 characters)
          </p>
          <p className="px-2 font-bold text-xl text-red-600">
            {errorMessage == null ? null : errorMessage}
          </p>
          <button
            className="m-2 bg-red-600 px-14 py-2 font-semibold text-white rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="remember-me flex justify-between text-xs text-gray-400 items-center">
            <label htmlFor="remember">
              <input type="checkbox" className="" id="remember" />
              Remember me
            </label>
            <a href="/forgot_pass">forgot password?</a>
          </div>
          <div className="sign-up flex text-sm justify-start">
            <span className="text-gray-400 ">New to Netflix?</span>
            <span
              onClick={toggleSignInForm}
              className="hover:cursor-pointer hover:underline"
            >
              {" "}
              &nbsp; Sign Up Now.
            </span>
          </div>
          <div className="captcha text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="/learn_more" className="text-blue-600">
              Learn more.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
