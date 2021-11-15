getData = (company, address) => {
  console.log(company, address);
  let item = document.getElementById("item");
  item.innerHTML = `Works in  ${company} and is from ${address} `;
};

deleteAll = () => {
  let data = document.getElementById("data");
  data.innerHTML = "";
};

retrieveData = () => {
  let dataList = [];

  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    res.json().then((data) => {
      console.log(data);
      console.log(data.length);
      console.log(data[0]);
      dataList.push(data); //pushed to array out of fetch call.
      console.log(dataList);

      if (dataList.length > 0) {
        var temp = "";
        dataList[0].forEach((itemData) => {
          //looping through each item
          temp += "<tr>";
          temp += "<td>" + itemData.id + "</td>";

          temp += `<td>  <button class="button1" onclick="getData('${itemData.company.name}',  '${itemData.address.city}')"> ${itemData.name} </button>  </td> `;
          temp += "</tr>";
        });

        let data = document.getElementById("data"); //
        data.innerHTML = temp;
      }
    });
  });
};
