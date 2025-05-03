// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCRaROES5K6NGbOx4TGq2yoLo530vzARI",
  authDomain: "adidas-clone-website.firebaseapp.com",
  projectId: "adidas-clone-website",
  storageBucket: "adidas-clone-website.appspot.com",
  messagingSenderId: "780695437545",
  appId: "1:780695437545:web:0710de019a3e24dbf87078",
  measurementId: "G-T0H7CMDGYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
