// HandleClick.js
export const HandleClick = (button, callback, sectionToRemove) => {
  document.addEventListener("DOMContentLoaded", () => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        callback();
        if (sectionToRemove) {
          sectionToRemove.remove();
        }
      });
    }
  });
};
