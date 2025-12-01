let e=()=>fetch("http://localhost:3000/ice-cream").then(e=>e.json()),t=e=>e.map(({id:e,calories:t,description:i,image:n,price:a,title:o})=>`<li class="item" id="${e}">
    <span class="item-span">${e}</span>
    <img src="${n}" alt="${o}" class="image">
<h2 class="title">${o}</h2>
<p class="calories">${t}</p>
<p class="description">${i}</p>
<p class="price">${a}</p>
<button type="button" data-action="Delete">Delete It</button>
<button type="button" data-action="Edit">Edit this card</button>
</li>`).join(""),i=document.querySelector(".js-list"),n=document.querySelector(".modal_form"),a=document.querySelector(".bakdrop");document.querySelector(".open_modal").addEventListener("click",function(){a.style.opacity="1",a.style.pointerEvents="auto"}),n.addEventListener("submit",o=>{o.preventDefault();let{title:c,calories:l,price:s,description:r,image:p}=o.target.elements;fetch("http://localhost:3000/ice-cream",{method:"POST",body:JSON.stringify({title:c.value.trim(),calories:Number(l.value.trim()),price:Number(s.value.trim()),description:r.value.trim(),image:p.value.trim()}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e).then(e=>{i.innerHTML=t(e),n.reset(),a.style.opacity="0",a.style.pointerEvents="none"})}),i.addEventListener("click",n=>{if("Delete"===n.target.dataset.action){let a;(a=n.target.closest("li").id,fetch(`http://localhost:3000/ice-cream/${a}`,{method:"DELETE"}).then(e=>e.json())).then(e).then(e=>{i.innerHTML=t(e)})}}),e().then(e=>{i.innerHTML=t(e)});
//# sourceMappingURL=fe1-2.9b621a30.js.map
