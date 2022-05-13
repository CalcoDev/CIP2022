// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "", // I had made firebase auth but didn't keep it in seeing as I didn't have time to finish. I had only 3 days come on.
//   authDomain: "cip2022.firebaseapp.com",
//   projectId: "cip2022",
//   storageBucket: "cip2022.appspot.com",
//   messagingSenderId: "321124626643",
//   appId: "1:321124626643:web:a98b5bd34824fb12166426",
//   measurementId: "G-BG4JX12RCD",
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = async () => {
//   return await signInWithPopup(auth, googleProvider);
// };
// export const signInWithGoogleRedirect = async () => {
//   return await signInWithRedirect(auth, googleProvider);
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   try {
//     return await createUserWithEmailAndPassword(auth, email, password);
//   } catch (_) {
//     return null;
//   }
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   try {
//     return await signInWithEmailAndPassword(auth, email, password);
//   } catch (_) {
//     return null;
//   }
// };

// export const signOutUser = async () => await signOut(auth);
