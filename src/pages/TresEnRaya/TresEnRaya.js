import "./TresEnRaya.css";
import { GameTemplate } from "../../components/GameTemplate/GameTemplate";
import { Button } from "../../components/Button/Button";
import { TresEnRayaData } from "../../data/TresEnRayaData/TresEnRayaData";
import { HandleClick } from "../../utils/Listeners/HandleClick/HandleClick";
import { Punctuation } from "../../components/Punctuation/Punctuation";

export const TresEnRaya = () => {
  GameTemplate({
    sectionClass: "tres-en-raya",
    h2Text: "Tres en Raya",
    leyendText: "Gana o pierde [+1 o -1 punto]",
    containerClassELEMENT: "main"
  });

  const mainContainer = document.querySelector(".tres-en-raya__main-container");

  const userTitle = document.createElement("p");
  userTitle.classList.add("tres-en-raya__user-title");

  const computerTitle = document.createElement("p");
  computerTitle.classList.add("tres-en-raya__computer-title");

  let userSelection = null;
  let computerSelection = null;

  const userMoves = [];
  const computerMoves = [];

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let score = parseInt(localStorage.getItem("score")) || 0;

  const updateScore = () => {
    localStorage.setItem("score", score);
  };

  const selectGameToken = () => {
    const optionsUsersContainer = document.createElement("div");
    optionsUsersContainer.classList.add(
      "tres-en-raya__options-users-container",
      "flex-container"
    );
    optionsUsersContainer.textContent = "Elige tus fichas:";

    TresEnRayaData.forEach((element) => {
      const buttonOptions = Button({
        textContent: element.icon,
        importance: "tertiary",
        size: "s"
      });
      buttonOptions.classList.add("btn--tres-en-raya-options");

      buttonOptions.addEventListener("click", () => {
        if (!userSelection) {
          userSelection = element.icon;
          userTitle.textContent = `${localStorage.getItem(
            "userName"
          )}: ${userSelection}`;

          computerSelection = TresEnRayaData.find(
            (elem) => elem.icon !== userSelection
          ).icon;
          computerTitle.textContent = `Computer: ${computerSelection}`;

          optionsUsersContainer.remove();
          gameBoardPrint();
        }
      });

      optionsUsersContainer.append(buttonOptions);
    });

    mainContainer.append(optionsUsersContainer);
  };

  const gameBoardPrint = () => {
    const usersContainer = document.createElement("div");
    usersContainer.classList.add(
      "tres-en-raya__users-container",
      "flex-container"
    );

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("tres-en-raya__button-container");

    for (let i = 0; i < 9; i++) {
      const button = Button({});
      button.classList.add("tres-en-raya__button");
      button.dataset.index = i;

      button.addEventListener("click", () => {
        if (!button.textContent) {
          button.textContent = userSelection;
          button.classList.add("btn--primary-selected");

          userMoves.push(i);

          if (checkWinner(userMoves)) {
            score++;
            updateScore();
            resultsScreen(
              `¡¡Enhorabuena ${localStorage.getItem(
                "userName"
              )}!! 🙌🙌🎉🎉, ganaste la partida`
            );
            return;
          }

          if (userMoves.length + computerMoves.length === 9) {
            resultsScreen("Empataste 🤝");
            return;
          }

          makeComputerMove();
        }
      });

      buttonContainer.append(button);
    }

    usersContainer.append(userTitle);
    usersContainer.append(computerTitle);
    mainContainer.append(usersContainer);
    mainContainer.append(buttonContainer);
  };

  const makeComputerMove = () => {
    const emptyButtons = Array.from(
      document.querySelectorAll(".tres-en-raya__button")
    ).filter((button) => !button.textContent);

    if (emptyButtons.length > 0) {
      const randomButton =
        emptyButtons[Math.floor(Math.random() * emptyButtons.length)];
      const index = parseInt(randomButton.dataset.index);

      randomButton.textContent = computerSelection;
      randomButton.classList.add("btn--primary-selected");

      computerMoves.push(index);

      if (checkWinner(computerMoves)) {
        score--;
        updateScore();
        resultsScreen("Perdiste la partida 😔, Gana Computer");
        return;
      }
    }
  };

  const checkWinner = (playerMoves) => {
    return winPatterns.some((pattern) =>
      pattern.every((index) => playerMoves.includes(index))
    );
  };

  const resultsScreen = (resultText) => {
    const mainContainer = document.querySelector(
      ".tres-en-raya__main-container"
    );
    if (mainContainer) {
      mainContainer.remove();
    }

    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add(
      "tres-en-raya__results-container",
      "flex-container"
    );

    const finalResult = document.createElement("p");
    finalResult.classList.add("tres-en-raya__final-result");
    finalResult.textContent = resultText;

    const buttonPlayAgain = Button({
      textContent: "Volver a jugar",
      importance: "tertiary",
      size: "s"
    });
    buttonPlayAgain.classList.add("tres-en-raya__button-play-again");

    HandleClick(
      buttonPlayAgain,
      document.querySelector(".tres-en-raya"),
      TresEnRaya
    );

    resultsContainer.append(finalResult);
    resultsContainer.append(Punctuation("punctuation-relative"));
    resultsContainer.append(buttonPlayAgain);
    document.querySelector(".tres-en-raya").append(resultsContainer);
  };

  selectGameToken();
};
