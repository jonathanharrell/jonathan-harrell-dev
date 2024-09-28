export function setInitialTheme() {
  try {
    const savedTheme = JSON.parse(localStorage.getItem("theme") ?? "");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    if (userPrefersDarkMode.matches) {
      document.documentElement.classList.add("dark");

      try {
        localStorage.setItem("theme", JSON.stringify("dark"));
      } catch {
        // fail silently
      }
    }
  }
}