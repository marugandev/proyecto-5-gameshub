import { Hero } from "../../../components/Hero/Hero";

/* export const PopStateListener = () => {
  window.addEventListener("popstate", () => {
    const link = GamesData.find(
      (link) => link.path === window.location.pathname
    );
    link?.page();

    if (!link) {
      Hero();
      window.history.pushState("", "", "/");
    }
  });
}; */

export const PopStateListener = ({
  links,
  defaultPage = Hero,
  defaultPath = "/"
}) => {
  window.addEventListener("popstate", () => {
    const link = links.find((link) => link.path === window.location.pathname);
    link?.page();

    if (!link) {
      defaultPage();
      window.history.pushState("", "", defaultPath);
    }
  });
};
