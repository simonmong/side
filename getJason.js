const getData = async () => {
  const res = await fetch("jasonarray.json");
  const data = await res.json();
  return data;
};

const displayCaptions = async () => {
  const payload = await getData();

  let dataDisplay = payload.caption
    .map((object) => {
      const { id, text, body } = object;

      return `
      <div class = "container">
        <p>id : ${id} </p>
        <p>text : ${text} </p>
        <p>body : ${body} </p>
      </div>
  
      `;
    })
    .join("");
  const display = document.querySelector("#display-data");
  display.innerHTML = dataDisplay;
};

export { displayCaptions };
