document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт валидации загружен");

    const form = document.getElementById("feedbackForm");
    const phoneInput = document.getElementById("phoneInput");

    if (!form || !phoneInput) {
        console.log("Форма или поле телефона не найдены");
        return;
    }

    form.addEventListener("submit", function (event) {
        const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/; // Улучшенная проверка: только цифры, пробелы, тире и скобки
        if (!phoneRegex.test(phoneInput.value)) {
            event.preventDefault();
            alert("Введите корректный номер телефона! (только цифры, без букв)");
        }
    });
});
