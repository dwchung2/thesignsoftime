function fetchData() {
  console.log("run fetchData function!");
  fetch("./messages.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("response error");
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const disPlayData = data
        .map((item) => {
          return `<div id="jsonData_container">
                    <div id="jsonData_name">Name: ${item.name} (${item.id})</div>
                    <div id="jsonData_message"> Message: ${item.message} </div>
                    <br/>
                    </div>`;
        })
        .join("");
      console.log(disPlayData);
      document
        .querySelector("#messageData")
        .insertAdjacentHTML("afterbegin", disPlayData);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
