import "./Menu.css";
import { Button } from "../Button/Button";
import { HandleClick } from "../../utils/functions/EventListeners/HandleClick";
import { Hero } from "../Hero/Hero";

export const Menu = () => {
  const menu = Button({
    textContent: "Menú",
    importance: "btn--tertiary",
    size: "btn--s"
  });

  menu.classList.add("menu");

  HandleClick(menu, document.querySelector("main"), Hero);

  return menu;
};
