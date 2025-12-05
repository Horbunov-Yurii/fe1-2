// export const postIceApi = (icecrem) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(icecrem),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch("http://localhost:3000/ice-cream", options).then((res) =>
//     res.json()
//   );
// };


export const postIceApi = async (icecrem) => {
  const options = {
    method: "POST",
    body: JSON.stringify(icecrem),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("http://localhost:3000/ice-cream", options)
  return res.json()
};
