import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBpEZWVBHZnoxAn9mn6PiYZKB7RVaUeIGg",
    authDomain: "quiz-9810f.firebaseapp.com",
    databaseURL: "https://quiz-9810f.firebaseio.com",
    projectId: "quiz-9810f",
    storageBucket: "quiz-9810f.appspot.com",
    messagingSenderId: "58743186043",
    appId: "1:58743186043:web:980c80c4bf13f2d17c78de",
    measurementId: "G-KG74N9M50S"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  firebase.analytics();