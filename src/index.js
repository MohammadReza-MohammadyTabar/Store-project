// * adding event on dark mode toggle btn
const toggle = document.querySelector("#darkmode-toggle");
toggle.addEventListener("input", (e) => {
  console.log(e.target.checked);

  if (e.target.checked) {
    document.querySelector("html").setAttribute("data-theme", "dark");
  } else {
    document.querySelector("html").setAttribute("data-theme", "garden");
  }
});
//********************************************************************************************* */
