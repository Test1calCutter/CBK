
const firebaseConfig = {
  apiKey: "AIzaSyAaMTxvNNlPHtl7WopNGO5D9Y1SBQy1mLs",
  authDomain: "cbkweb.firebaseapp.com",
  projectId: "cbkweb",
  storageBucket: "cbkweb.appspot.com",
  messagingSenderId: "55316828481",
  appId: "1:55316828481:web:49bc6c3d9d6124b547d1c0",
  measurementId: "G-0M08JREZCC"
};
  

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const database = firebase.database()
  const user = auth.currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = 'index.html';
    } else {
      return;
    }
  });

  function register () {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  

    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password Fehlt!')
      return
    }
   

    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

      var user = auth.currentUser
  
      var database_ref = database.ref()
  
      var user_data = {
        email : email,
        password : password,
        full_name : full_name,
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).set(user_data)

      window.location = 'index.html';
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  function login () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password Fehlt!')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
  
      var database_ref = database.ref()
  
      var user_data = {
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).update(user_data)
      window.location = 'index.html';
  
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      return true
    } else {
      return false
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }