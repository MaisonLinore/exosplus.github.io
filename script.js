// Smooth scroll buat tombol Get Exos+
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alert buat tombol Get Access Now
document.querySelectorAll('.btn').forEach(btn => {
  if(btn.textContent.includes('Get Access')) {
    btn.addEventListener('click', () => {
      alert('Exos+ launching soon! Join waitlist dulu ya 🔥');
    });
  }
});
