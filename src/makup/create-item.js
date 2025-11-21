export const createItemsMarkup = (array)  => {
  const items = array
    .map(({ id, calories, description, image, price, title }) => {
      return `<li class="item">
    <span class"item-span">${id}</span>
    <img src="${image}" alt="${title}" class="image">
<h2 class="title">${title}</h2>
<p class"calories">${calories}</p>
<p class"description"${description}</p>
<p class"price">${price}</p>
</li>`;
    })
    .join("");
  return items;
}
