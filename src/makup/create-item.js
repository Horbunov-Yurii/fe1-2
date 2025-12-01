export const createItemsMarkup = (array) => {
  const items = array
    .map(({ id, calories, description, image, price, title }) => {
      return `<li class="item" id="${id}">
    <span class="item-span">${id}</span>
    <img src="${image}" alt="${title}" class="image">
<h2 class="title">${title}</h2>
<p class="calories">${calories}</p>
<p class="description">${description}</p>
<p class="price">${price}</p>
<button type="button" data-action="Delete">Delete It</button>
<button type="button" data-action="Edit">Edit this card</button>
</li>`;
    })
    .join("");
  return items;
};
