import "./Trivial.css";
import { TrivialData } from "../../data/TrivialData/TrivialData";
import { Button } from "../../components/Button/Button";

export const Trivial = () => {
  const trivial = document.createElement("section");
  trivial.classList.add("trivial", "flex-container");
  const gameTitle = document.createElement("h2");
  gameTitle.textContent = "Trivial";
  gameTitle.classList.add("trivial__title");
  const leyend = document.createElement("p");
  leyend.classList.add("trivial__leyend");
  leyend.textContent = "20 preguntas | Sólo 1 respuesta válida";
  const trivialCardContainer = document.createElement("div");
  trivialCardContainer.classList.add(
    "trivial__card-container",
    "flex-container"
  );
  const buttonValidate = Button({
    textContent: "Comprobar",
    importance: "btn--tertiary"
  });
  buttonValidate.classList.add("trivial__button-validate");

  TrivialData.forEach((element) => {
    const trivialCard = document.createElement("ul");
    trivialCard.classList.add("trivial__card", "flex-container");
    trivialCard.textContent = element.question;

    element.answers.forEach((res) => {
      const responseLi = document.createElement("li");
      responseLi.classList.add("trivial__response-li");
      const responseButton = Button({
        textContent: res,
        size: "btn--s"
      });
      responseButton.classList.add("trivial__response-button");

      responseButton.addEventListener("click", () => {
        const allButtons = trivialCard.querySelectorAll(
          ".trivial__response-button"
        );
        allButtons.forEach((btn) =>
          btn.classList.remove("btn--primary-selected")
        );
        responseButton.classList.add("btn--primary-selected");
      });

      responseLi.append(responseButton);
      trivialCard.append(responseLi);
    });

    console.log(trivialCard);

    trivialCardContainer.append(trivialCard);
    trivialCardContainer.append(buttonValidate);
  });

  buttonValidate.addEventListener("click", () => {
    console.log("comprobar");
  });

  trivial.prepend(leyend);
  trivial.prepend(gameTitle);
  trivial.append(trivialCardContainer);
  document.querySelector("main").append(trivial);

  return trivial;
};
