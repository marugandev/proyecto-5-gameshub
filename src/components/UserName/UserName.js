import "./UserName.css";

import { Button } from "../Button/Button";

export const UserName = () => {
  console.log("PRUEBA");
  const form = document.createElement("form");
  form.classList.add("form", "flex-container");

  form.innerHTML = `
    <label for="username" class="form__label"></label>
    <input type="text" id="userName" class="form__input" name="username" placeholder ="Introduce tu nombre de usuario" required>
  `;
  const buttonUserName = Button({
    type: "submit",
    textContent: "Entrar",
    importance: "tertiary",
    size: "m"
  });
  buttonUserName.classList.add("form__button");
  form.append(buttonUserName);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userNameInput = form.querySelector("#userName");
    const userName = userNameInput.value;

    if (userName) {
      localStorage.setItem("userName", userName);
      /* alert(`Nombre de usuario ${username} guardado.`); */
      /*  usernameInput.value = ""; */
      form.remove();
    }
  });

  document.querySelector("main").append(form);

  return form;
};
