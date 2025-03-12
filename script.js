// Toggle Navigation Menu
function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

// Form Submission
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: this.querySelector('input[type="text"]').value,
    email: this.querySelector('input[type="email"]').value,
    message: this.querySelector('textarea').value,
  };

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
    this.reset();
  } catch (error) {
    alert('Error sending message. Please try again.');
  }
});