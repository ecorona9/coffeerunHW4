// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
(function (window) {
    'use strict';
    var App = window.App || {};
  
    var FirebaseConfig = {
        apiKey: "AIzaSyCecOyx6AOeyljITMIW_fRHDVgJrMEk9vY",
        authDomain: "cofferun-hw4.firebaseapp.com",
        databaseURL: "https://cofferun-hw4-default-rtdb.firebaseio.com",
        projectId: "cofferun-hw4",
        storageBucket: "cofferun-hw4.appspot.com",
        messagingSenderId: "705381520718",
        appId: "1:705381520718:web:c9d9977bd346885438ba1f",
        measurementId: "G-H88PZ9XZ6X"
    };
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
  
    window.App = App;
  
    })(window);