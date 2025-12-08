//  export const getIceApi = () => {
//   return fetch("http://localhost:3000/ice-cream").then((res) => res.json());
// }

 export const getIceApi = async() => {
   const res = await fetch("http://localhost:3001/ice-cream");
   return res.json();
 };
