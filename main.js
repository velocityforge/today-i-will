const textWrapper = document.getElementById('text-wrapper')
const textBox = document.getElementById('text-box');
const btnToggleMusic = document.getElementById('toggle-music');
const audioPlayer = document.getElementById('audio-player');

// Initialize textBox value from localStorage if it is not more than 24 hours old
const stored = localStorage.getItem('textBox');
if (stored) {
  let text, dateTm;
  try {
    const parsed = JSON.parse(stored);
    text = parsed.text;
    dateTm = new Date(parsed.dateTm);
  } catch (e) {
    console.error("Corrupted localStorage data, clearing it");
    localStorage.removeItem('textBox');
  }

  if (new Date() - dateTm < 24 * 60 * 60 * 1000) {
    textBox.value = text;
  }
}

textBox.addEventListener('input', e => {
  localStorage.setItem('textBox', JSON.stringify({
    text: e.target.value,
    dateTm: new Date()
  }));
});

btnToggleMusic.addEventListener('click', () => {
  if (audioPlayer.paused || audioPlayer.muted) {
    // Unmute and play the audio
    audioPlayer.muted = false;
    audioPlayer.play();
    btnToggleMusic.textContent = "Stop Music";
  } else {
    // Pause the audio
    audioPlayer.pause();
    btnToggleMusic.textContent = "Play Music";
  }
});

textWrapper.addEventListener('click', () => {
  textBox.focus()
})