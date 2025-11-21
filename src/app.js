import { getIceApi } from "./api/getApi";
import { createItemsMarkup } from "./makup/create-item"

const listEl = document.querySelector(".js-list");


getIceApi().then((res) => listEl.innerHTML = createItemsMarkup(res));


