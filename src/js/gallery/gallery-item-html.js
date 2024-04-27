const galleryItemHtml = (previewSrc, originalSrc, alt, galleryImageClass = 'gallery-image') => {
  return `<li class="gallery-item">
                <a class="gallery-link" href="${originalSrc}">
                    <img class="${galleryImageClass}" src="${previewSrc}" data-source="${originalSrc}" alt="${alt}"/>
                </a>
           </li>`;
};

export default galleryItemHtml;