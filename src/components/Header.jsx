import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Unsubscribe } from "firebase/auth";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { SUPPORTED_LANGUAGEs } from "../utils/constants";
import { changeLanguage } from "../utils/appConfig";

const Header = () => {
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
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
  }
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      //unsubscribing when component unmounts
      Unsubscribe();
    };
  }, []);
  const user = useSelector((store) => store.user);
  return (
    <div>
      <div className="logo flex flex-col justify-between w-full absolute px-12 py-3 bg-gradient-to-b from-black z-10  md:flex-row ">
        <img className="mx-auto md:mx-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          width={200}
          height={30}
          alt=""
        />
        {user ? (
          <div className="user-icon md:flex md:mt-4 md:mb-4 flex md:flex-nowrap flex-wrap md:gap-2 justify-center text-center mt-4">
            {showGPTSearch && (
              <select
                name="lang"
                id="lang"
                onChange={handleLanguageChange}
                className="px-5 py-2 mr-4 rounded-lg bg-gray-900 text-white"
              >
                {SUPPORTED_LANGUAGEs.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.language}
                  </option>
                ))}
              </select>
            )}

            <button
              className="px-5 py-2  bg-purple-800  text-white font-semibold rounded-lg shadow-md mr-3"
              onClick={() => handleGPTSearchClick()}
            >
             { showGPTSearch ? "Home Page" : "GPT Search" } 
            </button>
            <button className="px-6 py-2 md:block hidden rounded-lg  text-white shadow-sm mr-4 shadow-white  bg-opacity-95 bg-red-700">
              {user.displayName}
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg  text-white shadow-sm mr-4 bg-opacity-95 shadow-white  bg-red-700"
            >
              Sign Out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
