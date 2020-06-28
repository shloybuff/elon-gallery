import firebase from "firebase/app";
import "firebase/storage";


const config = {
    apiKey: "AIzaSyB315i3mdz8SohfYVQJb5VxNljrAUgUcsk",
    authDomain: "elon-gallery.firebaseapp.com",
    databaseURL: "https://elon-gallery.firebaseio.com",
    projectId: "elon-gallery",
    storageBucket: "elon-gallery.appspot.com",
    messagingSenderId: "341799498924",
    appId: "1:341799498924:web:1c5d5411048b308baddb09"
  };

firebase.initializeApp(config)

const storage = firebase.storage();

export { storage, firebase as default };