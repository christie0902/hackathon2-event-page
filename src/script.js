import { Event } from "./component/event.js";
const form = document.querySelector(".modal");
const fname = document.getElementById("fname");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const isAdult = document.getElementById("isAdult");
const submitButton = document.querySelector(".submit");
//get data from api
//loop throgh the items
//create elements
//atach to the contsainer

// should return the array of events

loadAndRenderEvents();
async function fetchData() {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/2a8117b3/events"
  );
  const dataArr = await response.json();
  return dataArr;
}

let eventID;

async function loadAndRenderEvents() {
  const container = document.querySelector(".container");
  const events = await fetchData();
  for (const event of events) {
    const newEvent = new Event(event);
    container.appendChild(newEvent.element);
    newEvent.button.addEventListener("click", (event) => {
      form.style.display = "block";
      form.setAttribute("id", `${newEvent.id}`);
      container.style.display = "none";
    });
  }
}

submitButton.addEventListener("click", (event) => {
  eventID = form.getAttribute("id");
  submitData(eventID);
});
const submitData = async (id) => {
  const url = `https://test-api.codingbootcamp.cz/api/2a8117b3/events/${id}/registrations`;
  const myDataObject = {
    firstname: `${fname.value}`,
    surname: `${surname.value}`,
    email: `${email.value}`,
    phone: `${phone.value}`,
    adult: `${isAdult}`,
  };
  const myResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify(myDataObject),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse);
  resultPage(myUsableResponse);
};

const container = document.querySelector(".container");
const modalWindow = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

closeButton.addEventListener("click", (e) => {
  modalWindow.style.display = "none";
  container.style.display = "block";
});

const resultMessage = document.createElement("div");
resultMessage.classList.add("resultMessage");
const closeResult = document.createElement("button");
closeResult.classList.add("closeResult");
closeResult.textContent = "Close";
closeResult.addEventListener("click", (event) => {
  modalWindow.removeChild(resultMessage);
  modalWindow.removeChild(closeResult);
  container.style.display = "block";
});

const resultPage = (myUsableResponse) => {
  modalContent.style.display = "none";
  if (!myUsableResponse.message) {
    resultMessage.textContent = "Registered!";
  } else {
    resultMessage.textContent = `${myUsableResponse.message}. Please try again`;
  }
  modalWindow.appendChild(resultMessage);
  modalWindow.appendChild(closeResult);
};
