import { getIceApi } from "./api/getApi";
import { createItemsMarkup } from "./makup/create-item";

import { openModal } from "./modal/open";

openModal();

const listEl = document.querySelector(".js-list");

getIceApi().then((res) => (listEl.innerHTML = createItemsMarkup(res)));

const formRef = document.querySelector(".modal_form");

formRef.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const {name, calories, prise, desk, link} = evt.target.elements;
    const data = {
        name: name.value.trim(),
        calories: calories.value.trim(),
        prise: prise.value.trim(),
        desk: desk.value.trim(),
        link:link.value.trim(),
    }
    formRef.reset()
    console.log(data);
    
});
