document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openFormButton = document.getElementById("openFormButton");
    const closeButton = document.getElementById("closeButton");
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    openFormButton.addEventListener("click", function () {
        modal.style.display = "block";
        history.pushState({ formOpen: true }, "", "#contact-form");
    });

    // закрытие формы
    function closeForm() {
        modal.style.display = "none";
        responseMessage.textContent = "";
        history.back();
    }

    closeButton.addEventListener("click", closeForm);

    // закрываю форму кнопкой "назад"
    window.addEventListener("popstate", function (event) {
        if (!event.state || !event.state.formOpen) {
            closeForm();
        }
    });

    // восстановление данных
    const fields = ["name", "email", "phone", "organization", "message"];
    fields.forEach(field => {
        const savedValue = localStorage.getItem(field);
        if (savedValue) {
            document.getElementById(field).value = savedValue;
        }
    });

    // сохранение данных при вводе
    contactForm.addEventListener("input", function (event) {
        localStorage.setItem(event.target.id, event.target.value);
    });

    // отправка данных формы
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        if (!document.getElementById("consent").checked) {
            responseMessage.textContent = "Необходимо согласиться с политикой обработки данных.";
            responseMessage.style.color = "red";
            return;
        }
    
        const formData = new FormData(contactForm);
    
        fetch("https://formcarry.com/s/rq3Ppc_sIJZ", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // сервер успешно ответил
            } else {
                throw new Error("Ошибка отправки на сервер. Код: " + response.status);
            }
        })
        .then(data => {
            responseMessage.textContent = "Форма успешно отправлена!";
            responseMessage.style.color = "green";
            contactForm.reset();
            fields.forEach(field => localStorage.removeItem(field)); // очистка сохраненных данных
        })
        .catch(error => {
            responseMessage.textContent = "Ошибка при отправке формы.";
            responseMessage.style.color = "red";
            console.error("Ошибка:", error);
        });
    });
    
});