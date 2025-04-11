import "./Menu.css";

import { Button } from "../Button/Button";
import { Hero } from "../Hero/Hero";
import { Navigate } from "../../utils/functions/Navigate/Navigate";

export const Menu = () => {
  const menu = Button({
    textContent: "Menú",
    importance: "tertiary",
    size: "s"
  });

  menu.classList.add("menu");

  menu.path = "/";
  menu.page = Hero;

  menu.addEventListener("click", (e) =>
    Navigate({ e, path: menu.path, page: menu.page })
  );

  document.querySelector("main").append(menu);

  return menu;
};
