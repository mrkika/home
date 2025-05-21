const button = document.getElementById('changeText');
const greeting = document.getElementById('greeting');

button.addEventListener('click', () => {
  greeting.textContent = 'You just made you first button';
});