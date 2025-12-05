// export const delIceApi = (id) => {
//   return fetch(`http://localhost:3000/ice-cream/${id}`, {
//     method: "DELETE",
//   }).then((res) => res.json());
// };


export const delIceApi = async (id) => {
 const res = await fetch(`http://localhost:3000/ice-cream/${id}`, {
    method: "DELETE",
 });
  const date = res.json()
  return date
};
