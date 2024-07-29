function validateForm() {
  var name = document.getElementById("fname").value;
  var number = document.getElementById("mno").value;
  var mail = document.getElementById("email").value;
  var parksVisited = document.querySelectorAll('input[name="parks"]:checked');
  var passType = document.querySelector('input[name="passType"]:checked');
  var visitDate = document.getElementById("VisitDate").value;
  var count = document.getElementById("totalCount").value;

  if (name === "") {
    alert("Full name must be filled out.");
    return false;
  }

  if (number.length !== 10 || isNaN(number)) {
    alert(
      "Mobile number must have exactly 10 digits and contain only numbers."
    );
    return false;
  }

  if (parksVisited.length === 0) {
    alert("Please select at least one park.");
    return false;
  }

  if (!passType) {
    alert("Please select a pass type.");
    return false;
  }

  var currentDate = new Date().toISOString().split("T")[0];
  if (visitDate < currentDate) {
    alert("Please select a future date for the visit.");
    return false;
  }

  if (count < 1 || count > 20) {
    alert("Total people must be between 1 and 20.");
    return false;
  }

  // Display the "displaySection" after successful submission
  document.getElementById("displaySection").style.display = "block";

  // Display the submitted details
  document.getElementById("submittedName").textContent = name;
  document.getElementById("submittedMobile").textContent = number;
  document.getElementById("submittedEmail").textContent = mail;

  var selectedParks = [];
  parksVisited.forEach(function (checkbox) {
    selectedParks.push(checkbox.value);
  });
  document.getElementById("submittedParks").textContent =
    selectedParks.join(", ");

  document.getElementById("submittedPassType").textContent = passType.value;
  document.getElementById("submittedVisitDate").textContent = visitDate;
  document.getElementById("submittedCount").textContent = count;

  return false; // Prevent form submission for this example
}
