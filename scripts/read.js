
var firebaseConfig = {
    
    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyBPdRo8e0nKToihUg2Ks19YXBlReTPCXrE",
    authDomain: "forum-be3b8.firebaseapp.com",
    databaseURL: "https://forum-be3b8.firebaseio.com",
    projectId: "forum-be3b8",
    storageBucket: "forum-be3b8.appspot.com",
    messagingSenderId: "980052273643",
    appId: "1:980052273643:web:07f3f62654a514493651ae"
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"


 
db.collection("cities").doc("LA").set({
  name: "Daniel"
})
.then(function() {
  console.log("Document written!");
})
.catch(function() {
  console.log("Error writing document!", error);
});