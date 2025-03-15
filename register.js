// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5o3Vu1lhHKG1Kn5fKN45sZJXi1FRRTdM",
  authDomain: "login-ca8bb.firebaseapp.com",
  projectId: "login-ca8bb",
  storageBucket: "login-ca8bb.firebasestorage.app",
  messagingSenderId: "915195802520",
  appId: "1:915195802520:web:18b65f1504b7892dc771ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Register New User
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();  // Prevent page reload

  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      document.getElementById("registerForm").reset();
      showLogin(); // Switch to login form
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// ✅ Login User
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect after login
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// ✅ Logout User (If needed)
document.getElementById("logoutBtn")?.addEventListener("click", function () {
  signOut(auth).then(() => {
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
