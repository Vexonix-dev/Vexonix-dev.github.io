document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateBtn").addEventListener("click", function () {
        const quantity = parseInt(document.getElementById("quantity").value, 10);
        const productPrice = parseFloat(document.getElementById("product").value);

        if (!isNaN(quantity) && quantity > 0) {
            const totalCost = quantity * productPrice;
            document.getElementById("result").innerText = `Итоговая стоимость: ${totalCost.toFixed(2)} руб.`;
        } else {
            document.getElementById("result").innerText = "Пожалуйста, введите корректное количество товара.";
        }
    });
});
