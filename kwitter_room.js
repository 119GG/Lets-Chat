var firebaseConfig = {
    apiKey: "AIzaSyBJqFht2FpZm5Q0nDINo9Jrsv32R17GXCA",
    authDomain: "kwitter-e956b.firebaseapp.com",
    databaseURL: "https://kwitter-e956b-default-rtdb.firebaseio.com",
    projectId: "kwitter-e956b",
    storageBucket: "kwitter-e956b.appspot.com",
    messagingSenderId: "605211873343",
    appId: "1:605211873343:web:8cf3664f6111eb4578e88a",
    measurementId: "G-2V02CNBTKH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
