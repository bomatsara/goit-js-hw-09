import SimpleLightbox from 'simplelightbox';
import dataImages from './gallery/data.js';
import galleryItemHtml from './gallery/gallery-item-html.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const galleryImageClass = 'gallery-image';
  const galleryEl = document.querySelector('.gallery');

  if (!galleryEl) {
    return;
  }

  galleryEl.innerHTML = dataImages.reduce((html, element) => {
    const { preview: previewSrc, original: originalSrc, description: alt } = element;
    html += galleryItemHtml(previewSrc, originalSrc, alt, galleryImageClass);
    return html;
  }, '');

  const lightbox = new SimpleLightbox('.gallery .gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});