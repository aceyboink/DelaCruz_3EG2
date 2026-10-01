
const themeToggle = document.getElementById("theme-toggle");


const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", function () {


    document.body.classList.toggle("dark-mode");

    
    const isDarkMode = document.body.classList.contains("dark-mode");

   
    if (isDarkMode) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }


    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );
});