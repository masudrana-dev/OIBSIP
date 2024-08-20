// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB47lzTVrcmrd0f7ujN0pN21K9C4TOWcNk",
//     authDomain: "oasys-info.firebaseapp.com",
//     projectId: "oasys-info",
//     storageBucket: "oasys-info.appspot.com",
//     messagingSenderId: "681189719319",
//     appId: "1:681189719319:web:1df136a43894e87badcb52"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// export default firebaseConfig;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7-5xt2FWE7yOrcFyBurb3Mgd9xi1p2uI",
    authDomain: "oasys-info-1.firebaseapp.com",
    projectId: "oasys-info-1",
    storageBucket: "oasys-info-1.appspot.com",
    messagingSenderId: "232703269897",
    appId: "1:232703269897:web:24dd8db049110319722cd8",
    measurementId: "G-S9Z5ZFSV2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;