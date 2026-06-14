const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');

let currentIndex = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('show');
  });
});

// Show image in lightbox
function showImage() {
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

// Navigation
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('show')) return;
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
  } else if (e.key === 'Escape') {
    lightbox.classList.remove('show');
  }
});
