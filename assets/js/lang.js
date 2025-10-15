async function loadLang(lang) {
    const res = await fetch(`assets/lang/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.innerHTML = translations[key] || key;
    });

    document.title = translations["page-title"];

    document.querySelectorAll(".lang-switch button").forEach(b => b.classList.remove("active"));
    document.getElementById(`${lang}-btn`).classList.add("active");

    localStorage.setItem("lang", lang);
}

function changeLang(lang) {
    loadLang(lang);
}

const savedLang = localStorage.getItem("lang") || "pl";
loadLang(savedLang);