// Minimal, dependency-free theme toggle.
// Respects the visitor's system preference by default; the toggle button
// lets them override it for the current visit (no data is stored).

(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!toggle) return;

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentIsDark() {
    var explicit = root.getAttribute("data-theme");
    if (explicit === "dark") return true;
    if (explicit === "light") return false;
    return prefersDark();
  }

  toggle.addEventListener("click", function () {
    root.setAttribute("data-theme", currentIsDark() ? "light" : "dark");
  });
})();
