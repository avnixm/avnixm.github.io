document.addEventListener("DOMContentLoaded", () => {
    const languagesContainer = document.getElementById("languages-container");
    const updateTime = document.getElementById("update-time");
    const updateButton = document.getElementById("update-button");

    function fetchProgrammingLanguages() {
        return [
            { name: "Python", users: "8.2M" },
            { name: "JavaScript", users: "11.3M" },
            { name: "Java", users: "7.6M" },
            { name: "C#", users: "6.5M" },
            { name: "PHP", users: "5.3M" },
        ];
    }

    function renderProgrammingLanguages() {
        const languages = fetchProgrammingLanguages();
        languagesContainer.innerHTML = "";

        languages.forEach((language) => {
            const card = document.createElement("div");
            card.className = "language-card";

            card.innerHTML = `
                <h3>${language.name}</h3>
                <p>${language.users} users</p>
            `;
            languagesContainer.appendChild(card);
        });

        const now = new Date();
        updateTime.textContent = `Last updated: ${now.toLocaleTimeString()}`;
    }

    renderProgrammingLanguages();
    updateButton.addEventListener("click", renderProgrammingLanguages);
    setInterval(renderProgrammingLanguages, 30000);
});
