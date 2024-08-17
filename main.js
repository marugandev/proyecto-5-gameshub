import "./styles.css";

import { UserName } from "./src/components/UserName/UserName";
import { Hero } from "./src/components/Hero/Hero";
import { PopStateListener } from "./src/utils/Listeners/PopstateListener/PopstateListener";
import { GamesData } from "./src/data/GamesData/GamesData";

const InitGameshub = () => {
  const main = document.createElement("main");
  document.body.append(main);

  const showHero = () => {
    Hero();
    PopStateListener({ links: GamesData });
  };

  if (!localStorage.getItem("userName")) {
    UserName(showHero);
  } else {
    showHero();
  }
};

InitGameshub();
