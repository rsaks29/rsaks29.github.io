// Get references to form elements and error messages
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

// Add event listener to the form for the submit event
form.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();
  
  // Validate email input
  if (!emailInput.value) {
    // Display error message if email field is empty
    emailError.textContent = 'Email is required';
  } else if (!isValidEmail(emailInput.value)) {
    // Display error message if email format is invalid
    emailError.textContent = 'Invalid email format';
  } else {
    // Clear error message if email is valid
    emailError.textContent = '';
    // Proceed with form submission or other actions
    // Example: form.submit();
  }
});

// Function to validate email format using regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
