// Play cow sound when the page loads
const cowSound = document.getElementById('cow-sound');
window.addEventListener('load', () => {
  cowSound.play().catch((error) => {
    console.warn('Autoplay blocked. Waiting for user interaction.', error);
  });
});

// Navigate to a different page
function navigateTo(page) {
  window.location.href = page;
}
