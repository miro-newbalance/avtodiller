document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт анимации загружен");

    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
});
