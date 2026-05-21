// Pink Pony Plunge - Site JS
// Mobile nav toggle + smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  // Shrink navbar on scroll
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Lightbox for "What's Inside" gallery
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var lightboxClose = document.getElementById('lightboxClose');
    var lightboxPrev = document.getElementById('lightboxPrev');
    var lightboxNext = document.getElementById('lightboxNext');
    var triggers = Array.prototype.slice.call(
      document.querySelectorAll('[data-lightbox="gallery"]')
    );
    var currentIndex = 0;

    function showAt(index) {
      currentIndex = (index + triggers.length) % triggers.length;
      var trigger = triggers[currentIndex];
      var fullSrc = trigger.getAttribute('href');
      var caption = trigger.getAttribute('data-caption') || '';
      var alt = trigger.querySelector('img') ? trigger.querySelector('img').alt : '';
      lightboxImg.src = fullSrc;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = caption;
    }

    function openLightbox(index) {
      showAt(index);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      lightboxImg.src = '';
    }

    triggers.forEach(function (trigger, i) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(i);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { showAt(currentIndex - 1); });
    lightboxNext.addEventListener('click', function () { showAt(currentIndex + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
      else if (e.key === 'ArrowRight') showAt(currentIndex + 1);
    });
  }
});
