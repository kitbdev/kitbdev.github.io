function toggledarkmode() {
    console.log("toggleing dark mode");
    document.getElementById("main").classList.toggle("darkmode");
    document.getElementById("nav").classList.toggle("darkmode");
    /* todo persist between page changes */
}