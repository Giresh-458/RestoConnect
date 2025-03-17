document.addEventListener("DOMContentLoaded", function () {
 
  document.getElementById("backButton").addEventListener("click", function () {
    window.history.back();
  });
});

function showForm() {
  document.getElementById("formContainer").style.display = "flex";
}

function addItem() {
  let name = document.getElementById("itemName").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let status = document.getElementById("status").value;

  if (!name || !category || !price || !description || !status) {
    alert("All fields are required!");
    return;
  }

  let table = document.getElementById("menuTable");
  let row = table.insertRow();
  let statusClass = getStatusClass(status);

  row.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>$${parseFloat(price).toFixed(2)}</td>
        <td>${description}</td>
        <td class='status ${statusClass}'>${status}</td>
        <td class="actions">
            <button class='edit' onclick='editItem(this)'>Edit</button>
            <button class='delete' onclick='deleteItem(this)'>Delete</button>
        </td>
    `;

  document.getElementById("formContainer").style.display = "none";
  document.getElementById("itemName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
  document.getElementById("status").value = "Available";
}

function deleteItem(element) {
  element.parentElement.parentElement.remove();
}

function editItem(element) {
  let row = element.parentElement.parentElement;
  document.getElementById("itemName").value = row.cells[0].innerText;
  document.getElementById("category").value = row.cells[1].innerText;
  document.getElementById("price").value = row.cells[2].innerText.replace(
    "$",
    ""
  );
  document.getElementById("description").value = row.cells[3].innerText;
  document.getElementById("status").value = row.cells[4].innerText;

  row.remove();
  showForm();
}

function getStatusClass(status) {
  if (status === "Available") return "status-available";
  if (status === "Out of Stock") return "status-outofstock";
  if (status === "Coming Soon") return "status-comingsoon";
}

