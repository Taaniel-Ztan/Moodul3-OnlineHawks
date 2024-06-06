document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category-select");
    const priceSelect = document.getElementById("price-select"); // Uus lisatud element
    const productCards = document.querySelectorAll(".product-card");

    // Kategooriafiltriga sarnane funktsioon hinnafiltrile
    priceSelect.addEventListener("change", function() {
        const selectedPriceRange = this.value;

        productCards.forEach(card => {
            const cardPrice = parseFloat(card.querySelector(".product-price").textContent.replace("$", ""));
            if (selectedPriceRange === "all" || isInRange(selectedPriceRange, cardPrice)) {
                card.style.display = "block"; // Näita toodet
            } else {
                card.style.display = "none"; // Peida toode
            }
        });
    });

    // Funktsioon, mis kontrollib, kas toote hind kuulub valitud vahemikku
    function isInRange(range, price) {
        const [min, max] = range.split("-").map(parseFloat);
        return price >= min && price <= max;
    }
});
