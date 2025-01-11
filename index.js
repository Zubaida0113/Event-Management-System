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
  // Get form values
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventDescription = document.getElementById('event-description').value;

// Validate form fields
if (!eventName.checkValidity()) {
  alert('Event Name must be between 3 and 50 characters.');
  eventName.focus();
  return;
}
if (!eventDate.checkValidity()) {
  alert('Please select a valid event date.');
  eventDate.focus();
  return;
}
if (!eventTime.checkValidity()) {
  alert('Please select a valid event time.');
  eventTime.focus();
  return;
}
if (!eventDescription.checkValidity()) {
  alert('Event Description must be between 10 and 500 characters.');
  eventDescription.focus();
  return;
}

  // Create a new event card
  const newEventCard = document.createElement('div');
  newEventCard.classList.add('event-card');
  newEventCard.innerHTML = `
    <img src="/img/default.png" alt="${eventName}">
    <div class="event-info">
      <h3>${eventName}</h3>
      <p>${eventDescription}</p>
      <p>Last Date : ${eventDate}</p>
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