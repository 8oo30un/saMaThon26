// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBtcoCKJM2nDr-UnZD_yw2FRD33e5mZkc",
  authDomain: "love-marathon.firebaseapp.com",
  projectId: "love-marathon",
  storageBucket: "love-marathon.appspot.com",
  messagingSenderId: "71807067675",
  appId: "1:71807067675:web:c4d561a07d25edf4633abe",
  measurementId: "G-53ZBSJQFYJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Firebase Analytics (브라우저 환경에서만)
let analytics = null;
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(() => {});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();

export { db, storage, analytics };
