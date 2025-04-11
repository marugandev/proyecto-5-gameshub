export const Navigate = ({ e, path, page }) => {
  e.preventDefault();

  window.history.pushState("", "", path);

  page();
};
