document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const productTypeRadios = document.getElementsByName("product-type");
    const optionsContainer = document.getElementById("options-container");
    const productOptions = document.getElementById("product-options");
    const featureContainer = document.getElementById("feature-container");
    const additionalFeatureCheckbox = document.getElementById("additional-feature");
    const resultDisplay = document.getElementById("result");
    const calculateBtn = document.getElementById("calculateBtn");

    productTypeRadios.forEach(radio => {
        radio.addEventListener("change", function() {
            updateOptionsDisplay();
            calculateTotal();
        });
    });

    quantityInput.addEventListener("input", calculateTotal);
    productOptions.addEventListener("change", calculateTotal);
    additionalFeatureCheckbox.addEventListener("change", calculateTotal);
    calculateBtn.addEventListener("click", calculateTotal);

    function updateOptionsDisplay() {
        const selectedType = document.querySelector('input[name="product-type"]:checked').value;

        if (selectedType === "type1") {
            optionsContainer.style.display = "none";
            featureContainer.style.display = "none";
        } else if (selectedType === "type2") {
            optionsContainer.style.display = "block";
            featureContainer.style.display = "none";
        } else if (selectedType === "type3") {
            optionsContainer.style.display = "none";
            featureContainer.style.display = "block";
        }
    }

    function calculateTotal() {
        const quantity = parseInt(quantityInput.value, 10);
        const selectedType = document.querySelector('input[name="product-type"]:checked').value;
        let basePrice = 0;

        if (selectedType === "type1") {
            basePrice = 100; // Примерная стоимость типа 1
        } else if (selectedType === "type2") {
            basePrice = parseInt(productOptions.value, 10);
        } else if (selectedType === "type3") {
            basePrice = 200; // Примерная стоимость типа 3
            if (additionalFeatureCheckbox.checked) {
                basePrice += 50; // Стоимость дополнительной функции
            }
        }

        if (!isNaN(quantity) && quantity > 0) {
            const totalCost = quantity * basePrice;
            resultDisplay.innerText = `Итоговая стоимость: ${totalCost.toFixed(2)} руб.`;
        } else {
            resultDisplay.innerText = "Пожалуйста, введите корректное количество товара.";
        }
    }

    updateOptionsDisplay();
});