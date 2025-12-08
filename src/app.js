import { getIceApi } from "./api/getApi";
import { postIceApi } from "./api/postIsApi";
import { createItemsMarkup } from "./makup/create-item";
import { delIceApi } from "./api/deliceApi";
import { updateIceApi } from "./api/updateIceApi";

const listEl = document.querySelector(".js-list");
const formRef = document.querySelector(".modal_form");
const backdrop = document.querySelector(".bakdrop");
const openBtn = document.querySelector(".open_modal");

let editCardId = null; //якщо тут null то додаємо картку, якщо число то будемо редагувати

function openModal() {
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

openBtn.addEventListener("click", () => {
  editCardId = null;
  formRef.reset(); // очищає поля форми
  openModal();
});

// submit form
formRef.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const { title, calories, price, description, image } = evt.target.elements;

  const data = {
    title: title.value.trim(),
    calories: Number(calories.value.trim()),
    price: Number(price.value.trim()),
    description: description.value.trim(),
    image: image.value.trim(),
  };

  try {
    if (editCardId === null) {
      await postIceApi(data);
    } else {
      await updateIceApi(editCardId, data);
    }

    const updateList = await getIceApi();
    listEl.innerHTML = createItemsMarkup(updateList);
    formRef.reset();
    closeModal();
  } catch (error) {
    console.log(error);
  }

  // if (editCardId === null) {
  //    postIceApi(data)
  //      .then(getIceApi)
  //      .then((res) => {
  //        listEl.innerHTML = createItemsMarkup(res);
  //        formRef.reset();
  //        closeModal();
  //      });
  //   return;
  // };
  // updateIceApi(editCardId, data).then(() => getIceApi()).then(res => {
  //   listEl.innerHTML = createItemsMarkup(res);
  //   formRef.reset()
  //   closeModal()
  // })
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

  if (event.target.dataset.action === "Edit") {
    const idItems = event.target.closest("li").id; // string

    getIceApi()
      .then((res) => {
        const card = res.find((el) => el.id == idItems); // знайдемо по id
        if (!card) return; // безпечна перевірка

        formRef.elements.title.value = card.title || "";
        formRef.elements.calories.value = card.calories || "";
        formRef.elements.price.value = card.price || "";
        formRef.elements.description.value = card.description || "";
        formRef.elements.image.value = card.image || "";

        editCardId = card.id; // тепер редагуємо саме цю картку
        openModal();
      })
      .catch((err) => {
        console.error("Помилка при отриманні даних:", err);
      });
  }
});

// initial load
getIceApi().then((res) => {
  listEl.innerHTML = createItemsMarkup(res);
});
