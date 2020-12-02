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
    <button id="button" type="submit">Submit</button>

</div>
`;

let button = document.getElementById("button");

button.addEventListener("click", (e) => {
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
