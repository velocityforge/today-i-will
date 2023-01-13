const textbox = document.getElementById('textbox');

// initialize textbox value from localStorage if it is not more than 24 hours old
const stored = localStorage.getItem('textbox');
if (stored) {
  let text, dateTm;
  try {
    const parsed = JSON.parse(stored)
    text = parsed.text;
    dateTm = new Date(parsed.dateTm);
  } catch (e) {
    console.log("Corrupted localStorage data, clearing it")
    localStorage.setItem('textbox', '');
  }
  
  if (new Date() - dateTm < 24 * 60 * 60 * 1000) {
    textbox.textContent = text;
  }
}

textbox.addEventListener('input', e => {
  localStorage.setItem('textbox', JSON.stringify({
    text: e.target.textContent,
    dateTm: new Date()
  }));
});

