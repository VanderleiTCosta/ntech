document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o objeto siteData existe antes de fazer qualquer coisa
  if (typeof siteData === "undefined") {
    console.error(
      "Erro: O arquivo data.js não foi carregado ou o objeto siteData não foi encontrado."
    );
    return;
  }

  // --- LÓGICA DE TROCA DE TEMA ---
  const themeToggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Função para aplicar o tema na carga da página
  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeToggleButton) themeToggleButton.textContent = "☀️"; // Lua
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeToggleButton) themeToggleButton.textContent = "🌙"; // Sol
    }
  }

  // Aplica o tema salvo no localStorage quando a página carrega
  if (currentTheme) {
    applyTheme(currentTheme);
  } else {
    // Se não houver tema salvo, aplica o tema claro como padrão
    applyTheme("light");
  }

  // Listener para o clique no botão de troca de tema
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      let newTheme = "light";
      // Verifica se o atributo data-theme NÃO está setado como 'dark'
      if (document.documentElement.getAttribute("data-theme") !== "dark") {
        newTheme = "dark";
      }
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  // --- CARREGAMENTO DE CONTEÚDO DINÂMICO ---

  // Popula a Seção Hero (só no index.html)
  if (document.getElementById("hero-title")) {
    document.getElementById("hero-title").textContent = siteData.hero.title;
    document.getElementById("hero-subtitle").textContent =
      siteData.hero.subtitle;
    const heroButton = document.getElementById("hero-button");
    heroButton.textContent = siteData.hero.buttonText;
    heroButton.href = siteData.hero.buttonLink;
  }

  // Popula a Grade de Pilares (só no index.html)
  const pillarsGridHome = document.getElementById("pillars-grid-home");
  if (pillarsGridHome) {
    siteData.pillars.forEach((pillar) => {
      const card = document.createElement("div");
      card.className = "pillar-card";
      card.innerHTML = `
                <img src="${pillar.icon}" alt="Ícone para ${pillar.title}">
                <h3>${pillar.title}</h3>
                <p>${pillar.shortDescription}</p>
            `;
      pillarsGridHome.appendChild(card);
    });
  }

  // Popula a página Ecossistema
  const ecosystemContainer = document.getElementById("ecosystem-container");
  if (ecosystemContainer) {
    siteData.pillars.forEach((pillar) => {
      const detailCard = document.createElement("div");
      detailCard.className = `ecosystem-detail-card ${
        pillar.status === "soon" ? "is-coming-soon" : ""
      }`;

      let buttonHTML = `<a href="${pillar.link}" target="_blank" class="btn-secondary">Visitar ${pillar.title}</a>`;
      if (pillar.status === "soon") {
        buttonHTML = `<button class="btn-secondary" disabled>Em Breve</button>`;
      }

      detailCard.innerHTML = `
                <div class="ecosystem-card-icon">
                    <img src="${pillar.icon}" alt="Ícone para ${pillar.title}">
                </div>
                <div class="ecosystem-card-content">
                    <h3>${pillar.title}</h3>
                    <p>${pillar.fullDescription}</p>
                    ${buttonHTML}
                </div>
            `;
      ecosystemContainer.appendChild(detailCard);
    });
  }

  // Popula a página Sobre
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    let aboutHTML = `<h1 class="page-header">${siteData.about.title}</h1>`;
    siteData.about.paragraphs.forEach((p) => (aboutHTML += `<p>${p}</p>`));

    if (
      siteData.about.teamSection &&
      siteData.about.teamSection.members.length > 0
    ) {
      aboutHTML += `<div class="team-section"><h2>${siteData.about.teamSection.title}</h2><div class="team-grid">`;
      siteData.about.teamSection.members.forEach((member) => {
        aboutHTML += `
                    <div class="team-member">
                        <img src="${member.image}" alt="Foto de ${member.name}">
                        <h3>${member.name}</h3>
                        <p>${member.position}</p>
                    </div>
                `;
      });
      aboutHTML += `</div></div>`;
    }
    aboutContainer.innerHTML = aboutHTML;
  }

  // Popula a página de Contato
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
            <h2>${siteData.contact.title}</h2>
            
            <div class="contact-item">
                <div class="contact-item-icon">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="contact-item-text">
                    <h4>Email</h4>
                    <a href="mailto:${siteData.contact.email}">${
      siteData.contact.email
    }</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-item-icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="contact-item-text">
                    <h4>Telefone</h4>
                    <a href="tel:${siteData.contact.phone.replace(
                      /\s/g,
                      ""
                    )}">${siteData.contact.phone}</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-item-icon">
                    <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                <div class="contact-item-text">
                    <h4>Endereço</h4>
                    <p>${siteData.contact.address}</p>
                </div>
            </div>
        `;
  }

  // --- LÓGICA DE ANIMAÇÃO E MENU MOBILE ---

  // Animação
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(
      ".pillar-card, .page-header, .ecosystem-detail-card, .about-content > *, .team-section > *, .contact-card, .footer-top, .footer-col"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Menu Mobile
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () =>
      navbarMenu.classList.toggle("active")
    );
  }
});
