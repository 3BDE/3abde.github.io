/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value;
  // Use the search term to perform a search
  console.log('Searching for:', searchTerm);
  // Update the search results
  searchResults.innerHTML = `Results for: ${searchTerm}`;
});
const sendButton = document.getElementById('send-button');
const contactForm = document.getElementById('contact-form');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;

  const mailToLink = `mailto:abdessalamelasri03@gmail.com?subject=Message from ${firstName} ${lastName}&body=${emailBody}`;

  window.location.href = mailToLink;

  contactForm.reset();
});