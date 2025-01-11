// FAQs toggle functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    
    // Toggle the active class
    faqItem.classList.toggle('active');
    
    // Toggle the display of the answer
    if (faqItem.classList.contains('active')) {
      faqAnswer.style.display = 'block';
      button.textContent = '-'; // Change button text to "-"
    } else {
      faqAnswer.style.display = 'none';
      button.textContent = '+'; // Change button text to "+"
    }
  });
});
// header hide on scroll down and show on scroll up functionality
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-100px'; // Adjust the value based on header height
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show the button after scrolling down 300px
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


function showSidebar(){
  const side=document.querySelector('.sidebar')
  side.style.display='flex'
}
function hideSidebar(){
  const side=document.querySelector('.sidebar')
  side.style.display='none'
}
function checkWindowSize() {
  const side = document.querySelector('.sidebar');
  if (window.innerWidth > 1100) {
    side.style.display = 'none';
  }
}
// Add event listener for window resize
window.addEventListener('resize', checkWindowSize);
// Initial check when the script loads
checkWindowSize();

function popup(){
  const pop=document.querySelector('.create-popup')
  const overlay = document.getElementById('overlay');
  pop.style.display='flex'
  overlay.style.display = 'block';
  document.body.classList.add('blur');
}
function closePopup(){
  const pop=document.querySelector('.create-popup')
  const overlay = document.getElementById('overlay');
  pop.style.display='none'
  overlay.style.display = 'none';
  document.body.classList.remove('blur');
}

function addEvent() {
  // Get form elements
  const eventName = document.getElementById('event-name');
  const eventDate = document.getElementById('event-date');
  const eventTime = document.getElementById('event-time');
  const eventDescription = document.getElementById('event-description');
  const validationMessages = document.getElementById('validation-messages');

  // Clear previous validation messages
  validationMessages.innerHTML = '';

  // Validate form fields
  let isValid = true;

  if (!eventName.checkValidity()) {
    validationMessages.innerHTML += '<p>Event Name must be between 3 and 50 characters.</p>';
    isValid = false;
  }
  if (!eventDate.checkValidity()) {
    validationMessages.innerHTML += '<p>Please select a valid event date.</p>';
    isValid = false;
  }
  if (!eventTime.checkValidity()) {
    validationMessages.innerHTML += '<p>Please select a valid event time.</p>';
    isValid = false;
  }
  if (!eventDescription.checkValidity()) {
    validationMessages.innerHTML += '<p>Event Description must be between 10 and 500 characters.</p>';
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Create a new event card
  const newEventCard = document.createElement('div');
  newEventCard.classList.add('event-card');
  newEventCard.innerHTML = `
    <img src="/img/1.png" alt="${eventName.value}">
    <div class="event-info">
      <h3>${eventName.value}</h3>
      <p>${eventDescription.value}</p>
      <p>Date: ${eventDate.value} </p>
      <button class="register-event">Register</button>
          </div>
  `;

  // Append the new event card to the events container
  const eventsContainer = document.getElementById('eventsContainer');
  eventsContainer.appendChild(newEventCard);

  // Close the popup and reset the form
  closePopup();
  document.getElementById('eventForm').reset();
}


//login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform login validation here (e.g., check username and password)

  // Navigate back to the previous page
  window.history.back();
});

function validateEmail() {
  const email = document.getElementById('mail');
  const emailValidation = document.getElementById('mail-validation');

  

  // Clear previous validation message
  emailValidation.innerHTML = '';
  

  // Validate email field
  if (!email.checkValidity()) {
      emailValidation.innerHTML = '*Please enter a valid email address.';
      return false;
  }
  

  // If the email is valid, you can proceed with further processing
  alert('Subscription successful!');
  // Optionally, you can reset the email field
  email.value = '';
  return true;
}
function contact(){
  const name = document.getElementById('username');
  const nameValidation = document.getElementById('cname-validation');
  nameValidation.innerHTML = '';
  if (!name.checkValidity()) {
    emailValidation.innerHTML = '*Please enter a valid name.';
    return false;
}
name.value = '';
  return true;
}