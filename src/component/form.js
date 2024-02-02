class Form {
  constructor(props) {
    const defaultProps = {
      title: "",
      inputs: [
        // array of inputs config
      ],
    };
    this.props = {
      ...defaultProps,
      ...props,
    };
  }
}

const fname = document.getElementById("fname");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const isAdult = document.getElementById("isAdult");
const submitButton = document.querySelector(".submit");

const submitData = async () => {
  const url = `https://test-api.codingbootcamp.cz/api/2a8117b3/events/1/registrations`;
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
  console.log(myUsableResponse);
};

submitButton.addEventListener("click", (event) => {
  console.log(event);
  submitData();
});

const modalWindow = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

const closeModal = () => {
  closeButton.addEventListener("click", (e) => {
    modalWindow.style.display = "none";
  });
};

const resultMessage = document.createElement("div");
resultMessage.classList.add("resultMessage");
const closeResult = document.createElement("button");
closeResult.classList.add("closeResult");
closeResult.textContent = "Close";
closeResult.addEventListener("click", (event) => {
  modalWindow.removeChild(resultMessage);
  modalWindow.removeChild(closeResult);
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
