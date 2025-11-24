document.querySelector(".open_modal").addEventListener("click",()=>{let e=document.querySelector(".bakdrop");e.style.opacity="1",e.style.pointerEvents="auto"});let e=document.querySelector(".js-list");fetch("http://localhost:3000/ice-cream").then(e=>e.json()).then(t=>e.innerHTML=t.map(({id:e,calories:t,description:l,image:s,price:i,title:a})=>`<li class="item">
    <span class"item-span">${e}</span>
    <img src="${s}" alt="${a}" class="image">
<h2 class="title">${a}</h2>
<p class"calories">${t}</p>
<p class"description">${l}</p>
<p class"price">${i}</p>
</li>`).join(""));let t=document.querySelector(".modal_form");t.addEventListener("submit",e=>{e.preventDefault();let{name:l,calories:s,prise:i,desk:a,link:r}=e.target.elements,c={name:l.value.trim(),calories:s.value.trim(),prise:i.value.trim(),desk:a.value.trim(),link:r.value.trim()};t.reset(),console.log(c)});
//# sourceMappingURL=fe1-2.0ea2fa60.js.map
