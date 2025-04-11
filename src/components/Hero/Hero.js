import "./Hero.css";

import { Punctuation } from "../Punctuation/Punctuation";
import { Footer } from "../Footer/Footer";
import { GamesData } from "../../data/GamesData/GamesData";
import { Button } from "../Button/Button";
import { Navigate } from "../../utils/functions/Navigate/Navigate";

export const Hero = () => {
  document.querySelector("main").innerHTML = "";

  Punctuation();
  Footer();

  const sectionHero = document.createElement("section");
  sectionHero.classList.add("hero", "flex-container");

  const h1 = document.createElement("h1");
  h1.classList.add("hero__title");
  h1.textContent = "Gameshub";

  GamesData.forEach((game) => {
    const { name, id, path, page } = game;

    const gameButton = Button({ textContent: name, id: id });

    gameButton.addEventListener("click", (e) =>
      Navigate({ e, path: path, page: page })
    );

    sectionHero.append(gameButton);
  });

  document.querySelector("main").append(sectionHero);

  sectionHero.prepend(h1);
};
