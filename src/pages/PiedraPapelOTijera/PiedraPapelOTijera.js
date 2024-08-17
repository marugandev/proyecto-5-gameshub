import "./PiedraPapelOTijera.css";
import { GameTemplate } from "../../components/GameTemplate/GameTemplate";
import { PiedraPapelOTijeraData } from "../../data/PiedraPapelOTijeraData/PiedraPapelOTijeraData";
import { Button } from "../../components/Button/Button";
import { Punctuation } from "../../components/Punctuation/Punctuation";
import { HandleClick } from "../../utils/Listeners/HandleClick/HandleClick";

export const PiedraPapelOTijera = () => {
  GameTemplate({
    sectionClass: "piedra-papel-o-tijera",
    h2Text: "Piedra, papel o tijera",
    leyendText: "Al mejor de 3 rondas | Gana o pierde [+1 o -1 punto]",
    containerClassELEMENT: "main"
  });

  const mainContainer = document.querySelector(
    ".piedra-papel-o-tijera__main-container"
  );

  const userTitle = document.createElement("p");
  userTitle.textContent = `${localStorage.getItem("userName")}: `;
  userTitle.classList.add("piedra-papel-o-tijera__user-title");

  const userIconsContainer = document.createElement("div");
  userIconsContainer.classList.add(
    "piedra-papel-o-tijera__user-icons-container",
    "flex-container"
  );

  const computerTitle = document.createElement("p");
  computerTitle.textContent = "Computer:";
  computerTitle.classList.add("piedra-papel-o-tijera__computer-title");

  const computerIconContainer = document.createElement("div");
  computerIconContainer.textContent = "❔";
  computerIconContainer.classList.add(
    "piedra-papel-o-tijera__computer-icon-container",
    "flex-container"
  );

  const result = document.createElement("p");
  result.textContent = "Resultado:";
  result.classList.add("piedra-papel-o-tijera__result-title", "flex-container");

  let countUser = 0;
  let countComputer = 0;

  const resultsScreen = (resultText) => {
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add(
      "piedra-papel-o-tijera__results-container",
      "flex-container"
    );

    const finalResult = document.createElement("p");
    finalResult.classList.add("piedra-papel-o-tijera__final-result");
    finalResult.textContent = resultText;

    const buttonPlayAgain = Button({
      textContent: "Volver a jugar",
      importance: "tertiary",
      size: "s"
    });
    buttonPlayAgain.classList.add("piedra-papel-o-tijera__button-play-again");
    const div = document.querySelector("piedra-papel-o-tijera__main-container");
    HandleClick(buttonPlayAgain, div, PiedraPapelOTijera);

    resultsContainer.append(finalResult);
    resultsContainer.append(Punctuation("punctuation-relative"));
    resultsContainer.append(buttonPlayAgain);
    document.querySelector(".piedra-papel-o-tijera").append(resultsContainer);
  };

  PiedraPapelOTijeraData.forEach((element) => {
    const icon = Button({
      textContent: element.icon
    });
    icon.classList.add("piedra-papel-o-tijera__btn");

    icon.addEventListener("click", () => {
      userIconsContainer
        .querySelectorAll(".piedra-papel-o-tijera__btn")
        .forEach((btn) => btn.classList.remove("btn--primary-selected"));
      icon.classList.add("btn--primary-selected");

      const computerElection =
        PiedraPapelOTijeraData[
          Math.floor(Math.random() * PiedraPapelOTijeraData.length)
        ].icon;

      computerIconContainer.textContent = computerElection;

      const userElection = icon.textContent;

      if (userElection === computerElection) {
        result.textContent = `Resultado: ${userElection} vs ${computerElection} [Empate]`;
      } else if (
        (userElection === "✊" && computerElection === "✌️") ||
        (userElection === "🖐️" && computerElection === "✊") ||
        (userElection === "✌️" && computerElection === "🖐️")
      ) {
        result.textContent = `Resultado: ${userElection} vs ${computerElection} [Gana ${localStorage.getItem(
          "userName"
        )}]`;
        countUser++;
      } else {
        result.textContent = `Resultado: ${userElection} vs ${computerElection} [Gana computer]`;
        countComputer++;
      }

      userTitle.textContent = `${localStorage.getItem(
        "userName"
      )}: [${countUser}]`;
      computerTitle.textContent = `Computer: [${countComputer}]`;

      let score = parseInt(localStorage.getItem("score")) || 0;

      if (countUser === 3) {
        document
          .querySelector(".piedra-papel-o-tijera__main-container")
          .remove();
        resultsScreen(
          `¡¡Enhorabuena ${localStorage.getItem(
            "userName"
          )}!! 🙌🙌🎉🎉, ganaste la partida`
        );
        score++;
        localStorage.setItem("score", score);
      } else if (countComputer === 3) {
        document
          .querySelector(".piedra-papel-o-tijera__main-container")
          .remove();
        resultsScreen("Perdiste la partida 😔, Gana Computer");
        score--;
        localStorage.setItem("score", score);
      }

      setTimeout(() => {
        computerIconContainer.textContent = "❔";
      }, 3000);
    });

    userIconsContainer.append(icon);
  });

  mainContainer.append(userTitle);
  mainContainer.append(userIconsContainer);
  mainContainer.append(computerTitle);
  mainContainer.append(computerIconContainer);
  mainContainer.append(result);
};
