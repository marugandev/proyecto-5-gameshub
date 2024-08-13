import "./Trivial.css";
import { TrivialData } from "../../data/TrivialData/TrivialData";
import { Button } from "../../components/Button/Button";
import { HandleClick } from "../../utils/functions/EventListeners/HandleClick";
import { Menu } from "../../components/Menu/Menu";

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
    importance: "btn--tertiary",
    size: "btn--s"
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
    const allCards = trivialCardContainer.querySelectorAll(".trivial__card");
    let count = 0;

    allCards.forEach((card, index) => {
      const selectedButton = card.querySelector(".btn--primary-selected");
      const correctAnswer = TrivialData[index].correct;

      if (selectedButton && selectedButton.textContent === correctAnswer) {
        count++;
      }
    });

    trivialCardContainer.remove();

    const resultsContainer = document.createElement("section");
    resultsContainer.classList.add(
      "trivial__results-container",
      "flex-container"
    );
    const results = document.createElement("p");
    results.classList.add("trivial__results");
    if (count === 20) {
      results.textContent =
        "¡¡Enhorabuena!!🙌🙌🎉🎉, todas tus respuestas son correctas.";
    } else {
      results.textContent = `Respuestas correctas: ${count} de ${TrivialData.length}`;
    }

    const buttonPlayAgain = Button({
      textContent: "Volver a jugar",
      importance: "btn--tertiary",
      size: "btn--s"
    });
    buttonPlayAgain.classList.add("trivial__button-play-again");

    HandleClick(buttonPlayAgain, trivial, Trivial);

    trivial.append(resultsContainer);
    resultsContainer.append(results);
    resultsContainer.append(buttonPlayAgain);
  });

  trivial.append(gameTitle);
  trivial.append(leyend);
  trivial.append(Menu());
  trivial.append(trivialCardContainer);
  document.querySelector("main").append(trivial);

  return trivial;
};
