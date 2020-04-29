import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCw2IhuSaiKk5qc_ZIfTbdgFwcYDakyxv4",
  authDomain: "vue-online-store-53b73.firebaseapp.com",
  databaseURL: "https://vue-online-store-53b73.firebaseio.com",
  projectId: "vue-online-store-53b73",
  storageBucket: "vue-online-store-53b73.appspot.com",
  messagingSenderId: "948703292791",
  appId: "1:948703292791:web:b18caa660555e052208572",
  measurementId: "G-TW0VWJ7LXT"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const settings = { /* your settings... */ timestampsInSnapshots: true };
firebaseApp.firestore().settings(settings);
export default firebaseApp;
