const getJasonData = async () => {
  const response = await fetch("jasonarray.json");
  const data = await response.json();
  return data;
};

const displayCaptions = async () => {
  const data = await getJasonData();

  let dataDisplay = data.caption
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
