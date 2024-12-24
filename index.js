const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
  item.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = '#ff0000';
  });

  item.addEventListener('click', function(e) {
    e.target.style.color = '#00ff00';
  });
});