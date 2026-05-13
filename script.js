// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submit
document.getElementById('waitlist-form').addEventListener('submit', function(e){
  setTimeout(() => {
    alert('Makasih! Cek email lo buat update Exos+ 🚀');
    this.reset();
  }, 500);
});
