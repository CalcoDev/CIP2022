import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Logo from "../../assets/logo_text.svg";
import userState from "../../contexts/user.context";

import { Link } from "react-router-dom";
// import { signOutUser } from "../../utils/firebase/firebase.utils";

export default function Navigation() {
  const [user, setUser] = useRecoilState(userState);

  const [atTopOfPage, setAtTopOfPage] = useState(true);

  React.useEffect(() => {
    window.onscroll = () => setAtTopOfPage(window.pageYOffset === 0);

    return () => (window.onscroll = null);
  });

  return (
    <div
      className={`${
        !atTopOfPage ? "border-b-2 box-content" : ""
      } sticky top-0 z-50 flex justify-between px-0 xl:px-[10%] overflow-x-hidden bg-white h-20 max-h-20`}
    >
      <Link className="flex items-center" to="/">
        <img src={Logo} alt="ECCC logo" className="h-full" />
      </Link>

      <div className="flex w-1/2 justify-between items-center">
        <Link
          className="font-medium text-gray-700 hover:underline decoration-blue-500 decoration-2 underline-offset-8"
          to="/testimonials"
        >
          Testimonials
        </Link>
        <Link
          className="font-medium text-gray-700 hover:underline decoration-blue-500 decoration-2 underline-offset-8"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="font-medium text-gray-700 hover:underline decoration-blue-500 decoration-2 underline-offset-8"
          to="/testimonials"
        >
          Community
        </Link>

        {user.currentUser == null ? (
          <Link
            className="font-medium tracking-normal text-center text-blue-500 rounded-full border-blue-500 hover:bg-blue-500 hover:text-white border-2 px-10 py-3"
            to="/auth"
          >
            SIGN IN
          </Link>
        ) : (
          <>
            <span
              className="hover:cursor-pointer font-medium text-center tracking-normal text-blue-500 rounded-full border-blue-500 hover:bg-blue-500 hover:text-white border-2 px-10 py-3"
              onClick={() => {
                setUser({
                  currentUser: null,
                });

                signOutUser();
              }}
            >
              Sign out
            </span>
          </>
        )}

        <Link
          className="font-medium text-center tracking-normal text-gray-100 rounded-full bg-blue-500 px-10 py-3 border-blue-500 border-2 hover:bg-blue-600"
          to="/join"
        >
          JOIN ECCC
        </Link>
      </div>
    </div>
  );
}
