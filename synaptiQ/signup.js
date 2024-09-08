<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyC09L50LEZqOFfjU4hgFhu6ai7wGBp8r9M",
    authDomain: "synaptiq-81e44.firebaseapp.com",
    projectId: "synaptiq-81e44",
    storageBucket: "synaptiq-81e44.appspot.com",
    messagingSenderId: "481128120467",
    appId: "1:481128120467:web:3cbbacb899930dd70ccd66"
  }

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  
  function button (){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(function(){
      let user=auth.currentUser
      let database_ref=database.ref()
      let user_data={
        email : email,
        last_login : Date.now()
      }

      database_ref.child('users/' + user.uid).set(user_data)
    })
  }

  

</script>