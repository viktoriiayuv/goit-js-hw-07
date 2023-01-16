import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryItemsMarkup = createGallaryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryEl.addEventListener("click", onGalleryItemClick);

function createGallaryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
		})
		.join("");
}

function onGalleryItemClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

	instance.show();

	document.addEventListener("keydown", event => {
		if (event.code === "Escape") {
			instance.close();
		}
	});
}
