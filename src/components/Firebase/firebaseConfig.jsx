import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ7DecO95qK2gtXSpRMLJb91bIHiGIy0s",
  authDomain: "foodzing-fb25d.firebaseapp.com",
  databaseURL: "https://foodzing-fb25d-default-rtdb.firebaseio.com",
  projectId: "foodzing-fb25d",
  storageBucket: "foodzing-fb25d.appspot.com",
  messagingSenderId: "670881842831",
  appId: "1:670881842831:web:a013e0963371349480d2fa",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
