// Note: used https://codesandbox.io/

import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
  <table id="myTable">
    <tbody id="tableBody">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr id="tableRow">
        <td>Luke</td>
        <td>Belfield</td>
        <td>luke.belfield@yahoo.com</td>
      </tr>
    </tbody>
  </table>

    <input id="inputFirstName"></input>
    <input id="inputLastName"></input>
    <input id="inputEmail"></input>
    
    <button id="addButton" type="submit">Add</button>

    <input id="inputDelete"></input>
    <button id="deleteButton" type="submit">Delete</button>

</div>
`;

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", (e) => {
  const firstName = document.getElementById("inputFirstName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail").value;
  rerenderTable(firstName, lastName, email);
});

const rerenderTable = (firstName, lastName, email) => {
  const table = document.getElementById("myTable");
  const tableBodyCount = document.getElementById("tableBody").childElementCount;

  const row = table.insertRow(tableBodyCount);

  const firstNameCell = row.insertCell(0);
  const lastNameCell = row.insertCell(1);
  const emailCell = row.insertCell(2);

  firstNameCell.innerHTML = `${firstName}`;
  lastNameCell.innerHTML = `${lastName}`;
  emailCell.innerHTML = `${firstName}.${lastName}@${email}`;
};

let deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", (e) => {
  const inputDelete = document.getElementById("inputDelete").value;

  rerenderDeleteTable(inputDelete);
});

const rerenderDeleteTable = (rowNumber) => {
  const tableBody = document.getElementById("tableBody");
  tableBody.deleteRow(rowNumber);
  console.log("row number: ", rowNumber, `has been deleted`);
};
