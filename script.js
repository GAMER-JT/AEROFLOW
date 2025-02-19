// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate bars in music animation
function animateBars() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    const randomHeight = Math.random() * 70 + 10;
    bar.setAttribute('height', randomHeight);
    bar.setAttribute('y', 100 - randomHeight);
  });
}

// Update bar animation periodically
setInterval(animateBars, 150);

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  
  // Create mailto link
  const mailtoLink = `mailto:jhonnyindonesia523@gmail.com?subject=Mensaje desde AEROFLOW website&body=De: ${email}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(message)}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Clear form
  this.reset();
  alert('¡Abriendo tu cliente de correo para enviar el mensaje!');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPosition = `center ${scrolled * 0.7}px`;
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add interaction for plus symbol
const plusSymbol = document.querySelector('.plus-symbol');
plusSymbol.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  this.querySelector('.plus').style.backgroundColor = randomColor;
});