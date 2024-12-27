// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuF_Fxc-tkRaFipy5RThB4Ku7O360CKXE",
  authDomain: "login-form-8dfe6.firebaseapp.com",
  projectId: "login-form-8dfe6",
  storageBucket: "login-form-8dfe6.firebasestorage.app",
  messagingSenderId: "771562523703",
  appId: "1:771562523703:web:7b0b946d64c1f1d34bc3b2"
};
// Firebase Config


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const form = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formTitle = document.getElementById("form-title");
const authButton = document.getElementById("auth-button");
const toggleMessage = document.getElementById("toggle-message");
const toggleLink = document.getElementById("toggle-link");

// Toggle between Login and Signup
let isSignup = true;

// Function to update the form when toggling between login and signup
function updateForm() {
  if (isSignup) {
    formTitle.textContent = "Signup";
    authButton.textContent = "Sign Up";
    toggleMessage.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login</a>`;
  } else {
    formTitle.textContent = "Login";
    authButton.textContent = "Login";
    toggleMessage.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Signup</a>`;
  }

  // Attach event listener to the toggle link
  const toggleLink = document.getElementById("toggle-link");
  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    isSignup = !isSignup; // Toggle between login and signup mode
    updateForm(); // Update form based on the new mode
  });
}

// Initialize the form state
updateForm();

// Handle Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (isSignup) {
    // Signup user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup successful!Please login");
        console.log("User:", userCredential.user);
        form.reset();
      })
      .catch((error) => alert("Error: " + error.message));
  } else {
    // Login user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.open("tourplanner.html","_blank")
        console.log("User:", userCredential.user);
        form.reset();
      })
      .catch((error) => alert("Error: " + error.message));
  }
});