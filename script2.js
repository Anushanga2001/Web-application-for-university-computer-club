function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var phone_number = document.getElementById("phone_number").value;
  var age = document.getElementById("age").value;

  if (username === "") {
      alert("Please enter a username.");
      return false;
  }

  if (email === "") {
      alert("Please enter an email address.");
      return false;
  }

  // Validate email format using a simple regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (password === "") {
      alert("Please enter a password.");
      return false;
  }

  if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
  }

  if (confirmPassword === "") {
      alert("Please confirm your password.");
      return false;
  }

  if (password !== confirmPassword) {
      alert("Your passwords do not match.");
      return false;
  }

  if (phone_number === "") {
      alert("Please enter a phone number.");
      return false;
  }

  // Validate phone number format: exactly 10 digits and starts with '0'
  var phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phone_number)) {
      alert("Please enter a valid phone number starting with '0' and containing 10 digits.");
      return false;
  }

  if (age === "") {
      alert("Please enter your age.");
      return false;
  }



  return true;
}

document.getElementById("submit").addEventListener("click", function() {
  if (validateForm()) {
      // Submit the form data
      alert("Form submitted successfully!");
  }
});
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add any specific interactivity for the About Us page here

  // Example: Highlight the navigation link for the current page
  var currentPage = window.location.pathname.split("/").pop();
  var navLinks = document.querySelectorAll("nav ul li a");

  for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      if (link.getAttribute("href") === currentPage) {
          link.style.color = "#64B5F6"; // Apply accent color to the current page link
      }
  }
});


