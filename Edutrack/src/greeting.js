
document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');

  const role = sessionStorage.getItem('selectedRole') || 'User';

  const hour = new Date().getHours();
  let timeGreeting = '';

  if (hour >= 1 && hour < 12) {
    timeGreeting = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    timeGreeting = 'Good Afternoon';
  } else {
    timeGreeting = 'Good Evening';
  }

 
  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

 
  greetingElement.innerHTML = `<strong>${timeGreeting}, ${formattedRole}!</strong>`;
});


