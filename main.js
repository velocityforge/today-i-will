const textbox = document.getElementById('textbox');

// initialize textbox value from localStorage
textbox.textContent = localStorage.getItem('textbox') || '';

textbox.addEventListener('input', e => {
  localStorage.setItem('textbox', e.target.textContent);
});

