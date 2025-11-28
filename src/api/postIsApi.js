export const postIceApi = (icecrem) => {
    const options = {
      method: "POST",

      body: JSON.stringify(icecrem),

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

  return fetch("http://localhost:3000/ice-cream", options).then((res) => res.json());
};


