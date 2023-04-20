// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

//Додавання елементів img до HTML

const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

//Cтворення розмітки елементів галереї

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});
alleryContainerEl.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});