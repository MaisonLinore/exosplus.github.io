// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submit tanpa redirect
const form = document.getElementById('waitlist-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  message.textContent = "Sending...";
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      message.textContent = "Thanks! Check your Email  🚀";
      message.style.color = "#4ade80";
      form.reset();
    } else {
      message.textContent = "Failed. Try again..";
      message.style.color = "#f87171";
    }
  } catch (error) {
    message.textContent = "An error. Try again...";
    message.style.color = "#f87171";
  }
});
