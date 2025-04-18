document.addEventListener("DOMContentLoaded", () => {
    fetch("species.json")
        .then(response => response.json())
        .then(data => {
            const speciesContainer = document.querySelector(".species-container");
            data.forEach(species => {
                const card = document.createElement("div");
                card.classList.add("species-card");
                card.innerHTML = `
                    <h3>${species.name}</h3>
                    <p><strong>Population:</strong> ${species.population}</p>
                    <p><strong>Habitat:</strong> ${species.habitat}</p>
                `;
                speciesContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading species data:", error));
});