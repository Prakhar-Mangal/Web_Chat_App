import * as firebase from 'firebase'
  // Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyACnT-CdlbmhHo1orNVDBpimwnKYBUe39I",
authDomain: "chat-app-95c64.firebaseapp.com",
databaseURL: "https://chat-app-95c64.firebaseio.com",
projectId: "chat-app-95c64",
storageBucket: "chat-app-95c64.appspot.com",
messagingSenderId: "365522327284",
appId: "1:365522327284:web:f20c9dacc912a62f2af0a1",
measurementId: "G-M94BJWNKGC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;