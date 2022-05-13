import React from "react";
// import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

export default function SignInWithGoogle() {
  return (
    <>
      <button
        aria-label="Continue with google"
        role="button"
        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5"
        onClick={() => {
          // let user = signInWithGooglePopup();
          // if (user) {
          //   setUser({
          //     currentUser: {
          //       name: user.user.displayName,
          //       email: user.user.email,
          //       uid: user.user.uid,
          //     },
          //   });
          // }
        }}
      >
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
          alt="google"
        />
        <p className="text-base font-medium ml-4 text-gray-200">
          Continue with Google
        </p>
      </button>
    </>
  );
}
