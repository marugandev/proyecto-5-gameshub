import "./GameTemplate.css";

import { Menu } from "../Menu/Menu";

export const GameTemplate = ({
  sectionClass,
  h2Text,
  leyendText,
  containerClassELEMENT = "default"
}) => {
  document.querySelector("main").innerHTML = "";
  const existingFooter = document.querySelector("footer");

  if (existingFooter) {
    existingFooter.remove();
  }

  Menu();

  const section = document.createElement("section");
  section.classList.add(sectionClass, "flex-container");

  const h2 = document.createElement("h2");
  h2.textContent = h2Text;
  h2.classList.add(`${sectionClass}__title`);

  const leyend = document.createElement("p");
  leyend.textContent = leyendText;
  leyend.classList.add(`${sectionClass}__leyend`);

  const container = document.createElement("div");
  container.classList.add(
    `${sectionClass}__${containerClassELEMENT}-container`,
    "flex-container"
  );

  section.append(h2);
  section.append(leyend);
  section.append(container);

  document.querySelector("main").append(section);

  return section;
};
