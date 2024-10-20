const name = document.getElementById("name");
const umur = document.getElementById("age");
const availability = document.getElementById("availability");
const loc = document.getElementById("loc");
const exp = document.getElementById("exp");
const email = document.getElementById("email");

// Store value into local storage
function storeData() {
  const dataUser = {
    name: "Zunnatul Arvy",
    age: "21",
    role: "Web Developer",
    availability: "Full time",
    location: "Jakarta Selatan",
    yoe: "1",
    email: "zunarvy@gmail.com",
  };

  localStorage.setItem("biodataUser", JSON.stringify(dataUser));
}
// storeData();

// get data and show data
function getUserData() {
  try {
    const data = localStorage.getItem("biodataUser");

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error when parsing user data", error);
  }
}
getUserData();

async function getData() {
  const userData = getUserData();

  if (userData) {
    name.textContent = userData.name;
    umur.textContent = userData.age;
    availability.textContent = userData.availability;
    loc.textContent = userData.location;
    exp.textContent = userData.yoe;
    email.textContent = userData.email;
  } else {
    console.warn("Data tidak ditemukan!");
  }
}
getData();

// show data and edit data
function tampilkanData() {
  const showData = getUserData();

  // show data
  document.getElementById("nameInput").value = showData.name;
  document.getElementById("roleInput").value = showData.role;
  document.getElementById("availabilityInput").value = showData.availability;
  document.getElementById("ageInput").value = showData.age;
  document.getElementById("locationInput").value = showData.location;
  document.getElementById("locationInput").value = showData.location;
  document.getElementById("yoeInput").value = showData.yoe;
  document.getElementById("emailInput").value = showData.email;
}
tampilkanData();

// Update Data
function updateUserData() {
  const updatedData = {
    name: document.getElementById("nameInput").value,
    role: document.getElementById("roleInput").value,
    availability: document.getElementById("availabilityInput").value,
    age: document.getElementById("ageInput").value,
    location: document.getElementById("locationInput").value,
    yoe: document.getElementById("yoeInput").value,
    email: document.getElementById("emailInput").value,
  };

  localStorage.setItem("biodataUser", JSON.stringify(updatedData));

  console.log("Data has been updated:", updatedData);
}

// Attach event listener
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  updateUserData();
  alert("Data has been updated successfully!");
});
