const progressBar =
    document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / totalHeight) * 100;

    progressBar.style.width =
        `${progress}%`;

});