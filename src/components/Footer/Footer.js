import "./Footer.css";

export const Footer = () => {
  const existingFooter = document.querySelector("footer");

  if (existingFooter) {
    existingFooter.remove();
  }

  const footer = document.createElement("footer");
  footer.classList.add("footer", "flex-container");

  const footerText = document.createElement("p");
  footerText.textContent = "Creado por:";
  footerText.classList.add("footer__text");

  const footerImg = document.createElement("img");
  footerImg.src = "https://marugandev.netlify.app/assets/logo-negativo.svg";
  footerImg.alt = "Marugandev";
  footerImg.classList.add("footer__img");

  document.querySelector("body").append(footer);
  footer.append(footerText);
  footer.append(footerImg);

  return footer;
};
