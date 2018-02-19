// vista splash de 3 segundos
$(document).ready(function(){
  setTimeout(function(){
    window.location.href='views/principal.html';
  },3000);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCui1rQAktiS8QCrER-YX-Y_m1P0QHXPoU",
    authDomain: "foodmap-7f8d1.firebaseapp.com",
    databaseURL: "https://foodmap-7f8d1.firebaseio.com",
    projectId: "foodmap-7f8d1",
    storageBucket: "foodmap-7f8d1.appspot.com",
    messagingSenderId: "872073817745"
  };
  firebase.initializeApp(config);
});