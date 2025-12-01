import { getIceApi } from "./api/getApi";
import { postIceApi } from "./api/postIsApi";
import { createItemsMarkup } from "./makup/create-item";
import { delIceApi } from "./api/deliceApi";

const listEl = document.querySelector(".js-list");
const formRef = document.querySelector(".modal_form");
const backdrop = document.querySelector(".bakdrop");
const openBtn = document.querySelector(".open_modal");

function openModal() {
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

openBtn.addEventListener("click", openModal);

// submit form
formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { title, calories, price, description, image } = evt.target.elements;

  const data = {
    title: title.value.trim(),
    calories: Number(calories.value.trim()),
    price: Number(price.value.trim()),
    description: description.value.trim(),
    image: image.value.trim(),
  };

  postIceApi(data)
    .then(getIceApi)
    .then((res) => {
      listEl.innerHTML = createItemsMarkup(res);
      formRef.reset();
      closeModal();
    });
});

// delete card
listEl.addEventListener("click", (event) => {
  if (event.target.dataset.action === "Delete") {
    const itemId = event.target.closest("li").id;

    delIceApi(itemId)
      .then(getIceApi)
      .then((res) => {
        listEl.innerHTML = createItemsMarkup(res);
      });
  }
});

// initial load
getIceApi().then((res) => {
  listEl.innerHTML = createItemsMarkup(res);
});
