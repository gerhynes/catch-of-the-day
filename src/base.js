import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAajg2lpoGA4YrBTjj-PBLjGAxMZ5Ru6w0",
  authDomain: "catch-of-the-day-ger-hynes.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ger-hynes.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
