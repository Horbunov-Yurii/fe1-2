import { getIceApi } from "./api/getApi";
import { postIceApi } from "./api/postIsApi";
import { createItemsMarkup } from "./makup/create-item";

// import { openModal } from "./modal/open";

// openModal();

const backdrop = document.querySelector(".bakdrop")
const openBtn = document.querySelector(".open_modal");

function openModal() {
  backdrop.style.opacity = "1";
      backdrop.style.pointerEvents = "auto";
}

function closeModal() {
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
}

openBtn.addEventListener("click", openModal)

const listEl = document.querySelector(".js-list");

getIceApi().then((res) => (listEl.innerHTML = createItemsMarkup(res)));

const formRef = document.querySelector(".modal_form");

formRef.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const { title, calories, price, description, image } = evt.target.elements;
    const data = {
      title: title.value.trim(),
      calories: calories.value.trim(),
      price: price.value.trim(),
      description: description.value.trim(),
      image: image.value.trim(),
    };
    let recvest;
    recvest = postIceApi(data)
    recvest.then(() => getIceApi()).then((res) => {
        listEl.innerHTML = createItemsMarkup(res)
        formRef.reset();
        closeModal();
    })
});
