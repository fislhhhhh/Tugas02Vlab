  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD7151PmL_95tV61tMU4wcBYq5VuYKRaGw",
    authDomain: "fisllhhhhhvlab.firebaseapp.com",
    projectId: "fisllhhhhhvlab",
    storageBucket: "fisllhhhhhvlab.firebasestorage.app",
    messagingSenderId: "987597358552",
    appId: "1:987597358552:web:67a3d00827367a9ad91ead"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  

  const submit = document.getElementById("registButton");
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const auth = getAuth();
    const email = document.getElementById("email2").value;
    const username = document.getElementById("uname2").value;
    const password = document.getElementById("psw2").value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('membuat akun...')
    alert('akun terbuat')
    window.location.href = "index.html";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('pembuatan akun gagal')
    // ..
  });
  })
