import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Unsubscribe } from "firebase/auth";

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(()=>{
    const Unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}=user;
        dispatch(addUser({uid:uid,displayName:displayName,email:email}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=>{
      //unsubscribing when component unmounts
      Unsubscribe();
    }
  },[])
  const user=useSelector((store)=>store.user);
  return (
    <div>
      <div className="logo flex justify-between w-full absolute px-12 py-3 bg-gradient-to-b from-black  z-10">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          width={200}
          height={30}
          alt=""
        />
        {
          user ? <div className="user-icon text-center mt-4 ">
          <button className="px-6 py-1 rounded-lg  text-white shadow-sm mr-4 shadow-white  bg-red-700">
            {user.displayName}
          </button>
          <button onClick={handleSignOut} className="px-4 py-1 rounded-lg  text-white shadow-sm mr-4 shadow-white  bg-red-700">
            Sign Out
          </button>
        </div> : null
        }
      </div>
    </div>
  );
};

export default Header;
