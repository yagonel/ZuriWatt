// Initialize Firebase
  var config = {
    apiKey: "AIzaSyByLSO8x8Yz4iBGs-SUhgA-RtjcSX6oTfo",
    authDomain: "test-7455a.firebaseapp.com",
    databaseURL: "https://test-7455a.firebaseio.com",
    projectId: "test-7455a",
    storageBucket: "test-7455a.appspot.com",
    messagingSenderId: "257242392769"
  };
  
  firebase.initializeApp(config);

  const dbRef = firebase.database().ref();

  const usersRef = dbRef.child('users');
  const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
   let user = snap.val();
   
   let $li = document.createElement("li");
   $li.innerHTML = user.name;
   $li.setAttribute("child-key", snap.key); 
   $li.addEventListener("click", userClicked)
   userListUI.append($li);
});
function userClicked(e) {

  var userID = e.target.getAttribute("child-key");

  const userRef = dbRef.child('users/' + userID);

  const userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = ""

  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val()
    userDetailUI.append($p);
  });

}