// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP7iHyxX4mziXvLvMVGQtjxkkhVXvv5Hs",
  authDomain: "upturn-2ce9a.firebaseapp.com",
  projectId: "upturn-2ce9a",
  storageBucket: "upturn-2ce9a.appspot.com",
  messagingSenderId: "802575362562",
  appId: "1:802575362562:web:62238a7293eeac0aaf151b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp