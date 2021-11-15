
const firebaseConfig = {
      apiKey: "AIzaSyCX-5fYoYIws7qcNy6MA71DFX69BBD69WY",
      authDomain: "twitterorkwitter.firebaseapp.com",
      projectId: "twitterorkwitter",
      storageBucket: "twitterorkwitter.appspot.com",
      messagingSenderId: "9461029226",
      appId: "1:9461029226:web:f00e028bc7cb1f96ef6d13"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
