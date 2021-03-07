import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCdHPEirfWk6DCWp8OZwT7ShtGd6XcAPsc",
    authDomain: "todo-56ebb.firebaseapp.com",
    projectId: "todo-56ebb",
    storageBucket: "todo-56ebb.appspot.com",
    messagingSenderId: "32175841112",
    appId: "1:32175841112:web:cbf950f7dfdc0e2d5bcf2d"
  };
 
  firebase.initializeApp(firebaseConfig)

  export default firebase.database()
  