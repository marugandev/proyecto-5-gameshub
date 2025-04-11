import "./Punctuation.css";
import { Button } from "../Button/Button";
import { HandleClick } from "../../utils/Listeners/HandleClick/HandleClick";

export const Punctuation = (altClass) => {
  const punctuation = Button({
    textContent: "Puntuación",
    importance: "tertiary",
    size: "s"
  });

  punctuation.classList.add("punctuation");
  punctuation.classList.add(altClass);

  let isScoreVisible = false;

  const showUserName = () => {
    const userName = localStorage.getItem("userName");
    const score = localStorage.getItem("score") || 0;

    if (userName) {
      if (isScoreVisible) {
        punctuation.textContent = "Puntuación";
      } else {
        punctuation.textContent = `${userName}: ${score} puntos`;
      }
      isScoreVisible = !isScoreVisible;
    }
  };
  HandleClick(punctuation, "", showUserName);

  document.querySelector("main").append(punctuation);

  return punctuation;
};
