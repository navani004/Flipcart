import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDkpitr9fvT2hMTUe7lpXyGYpw_edTz-Y4",
  authDomain: "flipcart-aa2ac.firebaseapp.com",
  projectId: "flipcart-aa2ac",
  storageBucket: "flipcart-aa2ac.firebasestorage.app",
  messagingSenderId: "158071266311",
  appId: "1:158071266311:web:02102d8c87b5ec7d0adea2"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)