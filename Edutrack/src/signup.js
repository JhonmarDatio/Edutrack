document.getElementById('signupForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Para hindi mag-reload ng page
  
  // Kunin ang mga values mula sa form fields
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Siguraduhing magkatugma ang password at confirm password
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Magpadala ng POST request sa backend (Rust) gamit ang fetch
  try {
    const response = await fetch('http://localhost:8080/create_account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password
      })
    });

    const result = await response.json();
    if (response.ok) {
      // Success, pwede mong i-show ang success message o i-redirect ang user
      document.getElementById('notification').classList.remove('hidden');
      setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login page
      }, 2000);
    } else {
      // Error, ipakita ang error message
      alert(result.error || 'An error occurred');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to connect to the backend');
  }
});

  