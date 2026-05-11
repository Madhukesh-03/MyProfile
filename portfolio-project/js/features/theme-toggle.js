const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

/* =========================
   APPLY SAVED THEME
========================= */

function applyTheme(theme){

    if(theme === "light"){

        body.classList.add("light-theme");

        themeToggle.innerHTML = "☀️ Day Mode";

    }else{

        body.classList.remove("light-theme");

        themeToggle.innerHTML = "🌙 Night Mode";

    }

}

/* =========================
   LOAD THEME
========================= */

const savedTheme =
    localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

/* =========================
   TOGGLE BUTTON
========================= */

themeToggle.addEventListener("click", () => {

    const isLight =
        body.classList.contains("light-theme");

    if(isLight){

        applyTheme("dark");

        localStorage.setItem("theme","dark");

    }else{

        applyTheme("light");

        localStorage.setItem("theme","light");

    }

});