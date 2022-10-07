import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYu1ilBftxTfyuXAMGWGtHRBswKlUif3c",
  authDomain: "abm-main.firebaseapp.com",
  projectId: "abm-main",
  storageBucket: "abm-main.appspot.com",
  messagingSenderId: "331830919499",
  appId: "1:331830919499:web:34b5a7860c90fc20dd68ce",
  measurementId: "G-6XXJSEZVGS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
