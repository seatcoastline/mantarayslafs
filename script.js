// Switch Pages
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

// Dark Mode Toggle
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

/* BLOG SYSTEM */
const blogPosts = [
    {
        title: "Apa itu Manta Ray? 🐋",
        content: "Manta Ray adalah spesies pari terbesar. Mereka lembut, pintar, dan sangat perlu dilindungi."
    },
    {
        title: "Belajar Limit dengan Cara Mudah ✨",
        content: "Limit itu intinya melihat nilai yang didekati suatu fungsi, bukan hasil tepatnya."
    },
    {
        title: "Termodinamika untuk Anak Kecil 🔥",
        content: "Panas selalu pindah dari benda panas ke benda dingin. Simple!"
    }
];

function loadBlog() {
    const container = document.getElementById("blogContainer");
    container.innerHTML = "";

    blogPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>⭐ ${post.title}</h3><p>${post.content}</p>`;
        container.appendChild(card);
    });
}

loadBlog();
