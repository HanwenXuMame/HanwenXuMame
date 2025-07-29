let currentPanel = 0;
const panels = document.querySelectorAll('.panel');
const panelContainer = document.querySelector('.panel-container');

function scrollToPanel(index) {
  currentPanel = Math.max(0, Math.min(index, panels.length - 1));
  panelContainer.style.transform = `translateX(-${currentPanel * 100}vw)`;
}

document.getElementById('left-btn').onclick = () => scrollToPanel(currentPanel - 1);
document.getElementById('right-btn').onclick = () => scrollToPanel(currentPanel + 1);

// GIF-on-hover behavior
document.querySelectorAll('.work-item img').forEach(img => {
  const original = img.src;
  const gif = img.getAttribute('data-gif');
  img.addEventListener('mouseenter', () => img.src = gif);
  img.addEventListener('mouseleave', () => img.src = original);
});
