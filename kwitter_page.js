const firebaseConfig = {
      apiKey: "AIzaSyClAycNArvgM2cE7_n2ZNGZShUfM7bTZe4",
      authDomain: "p-94-68f59.firebaseapp.com",
      databaseURL: "https://p-94-68f59-default-rtdb.firebaseio.com",
      projectId: "p-94-68f59",
      storageBucket: "p-94-68f59.appspot.com",
      messagingSenderId: "57708304619",
      appId: "1:57708304619:web:e29a5d977c55b5fb8986ae",
      measurementId: "G-ZKZD4FBWMF"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          document.getElementsById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementsById("msg").value="";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();

