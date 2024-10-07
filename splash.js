document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
  
    let width = 0;
    const interval = setInterval(() => {
      width += 1;
      progress.style.width = `${width}%`;
  
      if (width >= 100) {
        clearInterval(interval);
      }
    }, 50); // Augmentez cette valeur pour ralentir la barre de progression
  });