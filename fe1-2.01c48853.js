let s=document.querySelector(".js-list");fetch("http://localhost:3000/ice-cream").then(s=>s.json()).then(e=>s.innerHTML=e.map(({id:s,calories:e,description:i,image:c,price:l,title:t})=>`<li class="item">
    <span class"item-span">${s}</span>
    <img src="${c}" alt="${t}" class="image">
<h2 class="title">${t}</h2>
<p class"calories">${e}</p>
<p class"description"${i}</p>
<p class"price">${l}</p>
</li>`).join(""));
//# sourceMappingURL=fe1-2.01c48853.js.map
