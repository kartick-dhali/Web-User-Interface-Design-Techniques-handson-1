function onFormSubmit() {
  // call all the below functions here to use this function in the form while implementing onsubmit.
   // Read form data
   const formData = readFormData();
 
   // Check if any field is empty
   if (!formData.firstName || !formData.lastName || !formData.officeLocation) {
     alert("input field cannot be empty");
     return false;
   }
   
   // Insert new record
   insertNewRecord(formData);
   
   // Reset form
   resetForm();
   
   // Prevent default form submission
   return false;
}


function readFormData() {
 // return all the input values from three input fields here.
  // Get form values
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const officeLocation = document.getElementById("location").value;
 
  // Return form data
  return { firstName, lastName, officeLocation };
}


function insertNewRecord(data) {
// this function should insert a new row with data in the table.
// Get table body element
const tableBody = document.getElementById("tabledata");


// Create new row
const newRow = tableBody.insertRow();


// Insert cells into the row
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);


// Set cell values
cell1.textContent = data.firstName;
cell2.textContent = data.lastName;
cell3.textContent = data.officeLocation;
}
function resetForm() {
 // this function should reset the form fields.
 document.getElementById("formvalue").reset();
}
if (typeof exports !== "undefined") {
  module.exports = {
    onFormSubmit,
    readFormData,
    insertNewRecord,
    resetForm,
  };
}
