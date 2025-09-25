// NAVBAR TOGGLE
const navButton = document.querySelector(".nav-button");
const closeButton = document.querySelector(".close-button");
const navBar = document.querySelector(".nav-mobile");
const body = document.querySelector(".body");
console.log(body);

navButton.addEventListener("click", function () {
  navButton.classList.remove("toggle-nav");
  closeButton.style.display = "block";
  navBar.classList.remove("nav-mobile");
  document.body.classList.add("body-fix");
});

closeButton.addEventListener("click", function () {
  navButton.classList.add("toggle-nav");
  closeButton.style.display = "none";
  navBar.classList.add("nav-mobile");
  document.body.classList.remove("body-fix");
});

// NAV DISAPPEARS ON CLICK OF ANY NAV BUTTON
document.addEventListener("click", (e) => {
  if (navBar.contains(e.target)) {
    navBar.classList.add("nav-mobile");
    navButton.classList.add("toggle-nav");
    closeButton.style.display = "none";
    document.body.classList.remove("body-fix");
  }
});

// DARK MODE AND LIGHT MODE
// const darkmode = localStorage.getItem("darkmode");
// const changeTheme = document.querySelector(".modes");
// const toggleLight = document.querySelector("#light-mode");

// const disableDarkmode = () => {
//   document.body.classList.remove("body-dark");
//   localStorage.setItem("darkmode", null);
// };
// const enableDarkmode = () => {
//   document.body.classList.add("body-dark");
//   localStorage.setItem("darkmode", "active");
// };
// if (darkmode === "active") {
//   enableDarkmode();
// }
// changeTheme.addEventListener("click", function () {
//   if (darkmode !== "active") {
//     enableDarkmode();
//   } else {
//     disableDarkmode();
//   }
// });

// DARK MODE AND LIGHT MODE END

// COUNTER ANIMATION
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// PORTFOLIO FILTER
const portfolioFilter = document.querySelectorAll(".filter");
const projCon = document.querySelectorAll(".proj_con");
const appCon = document.querySelectorAll(".app");
const designCon = document.querySelectorAll(".design");
const webCon = document.querySelectorAll(".web");
const img = document.querySelectorAll(".Aimg");

portfolioFilter.forEach((portfolioFilter) => {
  portfolioFilter.addEventListener("click", function () {
    const itHas = portfolioFilter.getAttribute("class");
    // FILTER FOR ALL PORTFOLIO
    if (itHas.includes("all")) {
      // portfolioFilter.style.color = "red";
      appCon.forEach((appCon) => {
        appCon.classList.add("add-app");
        appCon.classList.remove("app");
      });

      designCon.forEach((designCon) => {
        designCon.classList.add("add-design");
        designCon.classList.remove("design");
      });

      webCon.forEach((webCon) => {
        webCon.classList.add("add-web");
        webCon.classList.remove("web");
      });
    }
    // FILTER FOR APP PORTFOLIO
    if (itHas.includes("app-nav")) {
      appCon.forEach((appCon) => {
        appCon.classList.add("add-app");
        appCon.classList.remove("app");
      });

      designCon.forEach((designCon) => {
        designCon.classList.add("design");
        designCon.classList.remove("add-design");
      });

      webCon.forEach((webCon) => {
        webCon.classList.add("web");
        webCon.classList.remove("add-web");
      });
    }

    // FILTER FOR DESIGN PORTFOLIO
    if (itHas.includes("design-nav")) {
      appCon.forEach((appCon) => {
        appCon.classList.add("app");
        appCon.classList.remove("add-app");
      });

      designCon.forEach((designCon) => {
        designCon.classList.add("add-design");
        designCon.classList.remove("design");
      });

      webCon.forEach((webCon) => {
        webCon.classList.add("web");
        webCon.classList.remove("add-web");
      });
    }

    // FILTER FOR WEB PORTFOLIO
    if (itHas.includes("web-nav")) {
      appCon.forEach((appCon) => {
        appCon.classList.add("app");
        appCon.classList.remove("add-app");
      });

      designCon.forEach((designCon) => {
        designCon.classList.add("design");
        designCon.classList.remove("add-design");
      });

      webCon.forEach((webCon) => {
        webCon.classList.add("add-web");
        webCon.classList.remove("web");
      });
    }
  });
});
