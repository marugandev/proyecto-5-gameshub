import "./Hero.css";
import { Button } from "../Button/Button";
import { GamesData } from "../../data/GamesData.js/GamesData";
import { HandleClick } from "../../utils/functions/EventListeners/HandleClick";
import { Punctuation } from "../Punctuation/Punctuation";

export const Hero = () => {
  const sectionHero = document.createElement("section");
  sectionHero.classList.add("hero", "flex-container");

  const h1 = document.createElement("h1");
  h1.classList.add("hero__title");
  h1.textContent = "Gameshub";

  GamesData.forEach((game) => {
    const gameButton = Button({ textContent: game.name, id: game.id });

    const callback = game.function;
    if (callback) {
      HandleClick(gameButton, sectionHero, callback);
    }

    sectionHero.append(gameButton);
  });

  document.querySelector("main").append(sectionHero);
  sectionHero.append(Punctuation());
  sectionHero.prepend(h1);
};
