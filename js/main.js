/* REVEAL */
const elements = document.querySelectorAll('.reveal, .reveal-left');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));


/* QUEM EU SOU – efeito interativo */
const whoCard = document.querySelector('.who-card');

if (whoCard) {
  whoCard.addEventListener('mousemove', e => {
    const rect = whoCard.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    whoCard.style.setProperty('--mx', `${x}%`);
    whoCard.style.setProperty('--my', `${y}%`);
  });
}


/* ORB DE VIDRO */
const orb = document.querySelector('.glass-orb');

if (orb) {
  document.addEventListener('mousemove', e => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
}


/* VÍDEOS DOS PROJETOS */
document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});


/* CURSOR CUSTOM */
const cursor = document.querySelector('.custom-cursor');
const glow = document.querySelector('.cursor-glow');

if (cursor && glow) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}
