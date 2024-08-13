import "./styles.css";

import { Hero } from "./src/components/Hero/Hero";
import { UserName } from "./src/components/UserName/UserName";

const InitGameshub = () => {
  const main = document.createElement("main");
  document.body.append(main);

  UserName();
  Hero();
};

InitGameshub();
