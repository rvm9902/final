function addUserToTable(name, email) {
    const tableBody = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0);
    nameCell.textContent = name; 
    const emailCell = newRow.insertCell(1);
    emailCell.textContent = email; 
}

function handleFormSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; 

    addUserToTable(name, email);

    document.getElementById("registrationForm").reset(); 
}

window.onload = function() {
    
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", handleFormSubmit);
