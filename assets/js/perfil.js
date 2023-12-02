const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá professor(a) ${userLogado.nome}!`;

/*Mudar foto*/

let photo = document.getElementById("foto");
let file = document.getElementById("flImage");

photo.addEventListener("click", () => {
  file.click();
});

file.addEventListener("change", () => {
  if (file.files.length <= 0) {
    return;
  }
  let reader = new FileReader();
  reader.onload = () => {
    photo.src = reader.result;
  };
  reader.readAsDataURL(file.files[0]);
});

/*popup*/

const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

button.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};
