document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт кнопки загружен");

    const showMoreBtn = document.querySelector(".show-more-button"); // Обновленный селектор
    const hiddenCards = document.querySelectorAll(".hidden-cards");

    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function () {
            hiddenCards.forEach(card => card.style.display = "block");
            showMoreBtn.style.display = "none";
        });
    } else {
        console.log("Кнопка 'Показать ещё' не найдена");
    }
});
