export const HandleClick = (button, sectionToRemove, callback) => {
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (sectionToRemove) {
        sectionToRemove.remove();
      }
      callback();
    });
  }
};
