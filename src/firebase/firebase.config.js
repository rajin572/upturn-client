// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAP7iHyxX4mziXvLvMVGQtjxkkhVXvv5Hs",
  // authDomain: "upturn-2ce9a.firebaseapp.com",
  // projectId: "upturn-2ce9a",
  // storageBucket: "upturn-2ce9a.appspot.com",
  // messagingSenderId: "802575362562",
  // appId: "1:802575362562:web:62238a7293eeac0aaf151b",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp