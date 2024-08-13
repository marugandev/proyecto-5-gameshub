import "./Punctuation.css";
import { Button } from "../Button/Button";
import { HandleClick } from "../../utils/functions/EventListeners/HandleClick";
import { Hero } from "../Hero/Hero";

export const Punctuation = () => {
  const punctuation = Button({
    textContent: "Puntuación",
    importance: "btn--tertiary",
    size: "btn--s"
  });

  punctuation.classList.add("punctuation");

  HandleClick(punctuation, document.querySelector("main"), Hero);

  return punctuation;
};
