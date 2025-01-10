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

// Toggle the navigation menu
document.getElementById('navToggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});