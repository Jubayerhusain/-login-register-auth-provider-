
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDCdB8x4OKcSRyHyE5B7jYq7K2oM_KYUOo",
  authDomain: "login-register-auth-provider.firebaseapp.com",
  projectId: "login-register-auth-provider",
  storageBucket: "login-register-auth-provider.firebasestorage.app",
  messagingSenderId: "1005618572299",
  appId: "1:1005618572299:web:250c532a02160d82d7ab0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);