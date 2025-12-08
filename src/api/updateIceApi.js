// export const updateIceApi = (id, icecrem) => {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(icecrem),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`http://localhost:3000/ice-cream/${id}`, options).then((res) =>
//     res.json()
//   );
// };

 export const updateIceApi = async(id, icecrem) => {
   const options = {
     method: "PUT",
     body: JSON.stringify(icecrem),
     headers: {
       "Content-Type": "application/json",
     },
   };

   const res = await fetch(`http://localhost:3001/ice-cream/${id}`, options)
   return res.json();
 };
