import "./Button.css";

export const Button = ({
  type = "button",
  name,
  id,
  textContent,
  importance = "primary",
  size = "m",
  title,
  ariaLabel
}) => {
  const Button = document.createElement("button");
  Button.type = type;
  if (name) Button.name = name;
  if (id) Button.id = id;
  if (textContent) Button.textContent = textContent;
  Button.classList.add("btn", `btn--${importance}`, `btn--${size}`);
  if (title) Button.title = title;
  if (ariaLabel) Button.setAttribute("aria-label", ariaLabel);

  return Button;
};
