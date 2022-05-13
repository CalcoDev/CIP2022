import React, { useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../../contexts/user.context";

import { Navigate } from "react-router-dom";
import SignInWithGoogle from "../../components/singInWithGoogle/signInWithGoogle.component";
// import {
//   createAuthUserWithEmailAndPassword,
//   signInAuthUserWithEmailAndPassword,
// } from "../../utils/firebase/firebase.utils";

export default function Auth() {
  const [user, setUser] = useRecoilState(userState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [passEmail, setPassEmail] = useState("");
  const [passPass, setPassPass] = useState("");
  const [passError, setPassError] = useState(null);

  return (
    <>
      {user.currentUser && <Navigate to="/" />}

      <div className="bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 yes">
        {/*  */}

        <div className="max-w-2xl mx-auto">
          <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form
              className="space-y-6"
              action="#"
              onSubmit={async (e) => {
                e.preventDefault();

                // let user = await signInAuthUserWithEmailAndPassword(
                //   email,
                //   password
                // );
                // if (user != null) {
                //   setUser({
                //     currentUser: {
                //       name: user.user.displayName,
                //       email: user.user.email,
                //       uid: user.user.uid,
                //     },
                //   });
                //   setError(false);
                // } else {
                //   setError(true);
                // }

                setEmail("");
                setPassword("");
              }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="remember"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="text-sm ml-3">
                    <label
                      htmlFor="remember"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              {error && (
                <span className="text-sm font-medium text-gray-900 block dark:text-gray-300 m-0">
                  An error occured! Please try again!
                </span>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>

        {/*  */}

        {/*  */}

        <div className="max-w-2xl mx-auto">
          <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();

                // let test = await createAuthUserWithEmailAndPassword(
                //   passEmail,
                //   passPass
                // );

                // if (test == null) {
                //   setPassError(true);
                // } else {
                //   setPassError(false);
                // }

                setPassEmail("");
                setPassPass("");
              }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Register
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                  value={passEmail}
                  onChange={(e) => setPassEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  value={passPass}
                  onChange={(e) => setPassPass(e.target.value)}
                />
              </div>
              {passError && (
                <span className="text-sm font-medium text-gray-900 block dark:text-gray-300 m-0">
                  An error occured! Please try again!
                </span>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create account
              </button>
              <SignInWithGoogle />
            </form>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
}
