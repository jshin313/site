// Toggle theme

const theme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = theme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

if (theme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark
    ? metaThemeColor.setAttribute("content", "#252627")
    : metaThemeColor.setAttribute("content", "#fafafa");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  document.body.classList.contains("dark-theme")
    ? metaThemeColor.setAttribute("content", "#252627")
    : metaThemeColor.setAttribute("content", "#fafafa");

  let elements = document.getElementsByClassName("ui image");

  for (let element of elements) {
    let src = element.src;
    let splitted = src.split("/");
    let filename = splitted[splitted.length - 1];
    
    // Replace image with dark theme equivalent
    if (document.body.classList.contains("dark-theme")) {
      filename = filename.replace('.svg', '_dark.svg');
      splitted[splitted.length -1] = filename;
    } 
    // Replace image with light theme equivalent
    else {
      filename = filename.replace('_dark', '');
      splitted[splitted.length -1] = filename;
    }
    element.src = splitted.join('/');
  };

});
