import "./Button.css";

export const Button = ({
  type = "button",
  name,
  id,
  textContent,
  importance = "btn--primary",
  size = "btn--m",
  title,
  ariaLabel
}) => {
  const Button = document.createElement("button");
  Button.type = type;
  if (name) Button.name = name;
  if (id) Button.id = id;
  if (textContent) Button.textContent = textContent;
  Button.classList.add("btn", importance, size);
  if (title) Button.title = title;
  if (ariaLabel) Button.setAttribute("aria-label", ariaLabel);

  return Button;
};

/* true o false */
