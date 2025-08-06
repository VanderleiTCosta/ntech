document.addEventListener("DOMContentLoaded", function () {
  // Garante que o objeto de dados foi carregado
  if (typeof siteData === "undefined") {
    console.error(
      "Erro Crítico: O arquivo data.js não foi encontrado ou está vazio."
    );
    return;
  }

  // ===================================================================
  // LÓGICA DE GESTÃO DO TEMA (CLARO/ESCURO)
  // ===================================================================
  const themeToggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeToggleButton) themeToggleButton.textContent = "☀️"; // Mostra Sol no tema escuro
    } else {
      document.documentElement.setAttribute("data-theme", "light"); // Garante que o atributo seja 'light'
      if (themeToggleButton) themeToggleButton.textContent = "🌙"; // Mostra Lua no tema claro
    }
  }

  // Aplica o tema salvo ao carregar a página
  applyTheme(currentTheme || "light");

  // Listener para o botão de troca de tema
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  // ===================================================================
  // LÓGICA DO MENU MOBILE
  // ===================================================================
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () =>
      navbarMenu.classList.toggle("active")
    );
  }

  // ===================================================================
  // LÓGICA DE LINK ATIVO NA NAVEGAÇÃO
  // ===================================================================
  const navLinks = document.querySelectorAll(".navbar-menu a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // ===================================================================
  // LÓGICA DO MODAL DE PRODUTOS
  // ===================================================================
  const modalOverlay = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalPlansContainer = document.getElementById("modal-plans-container");
  const modalPurchaseLink = document.getElementById("modal-purchase-link");
  const closeModalBtn = document.getElementById("close-modal-btn");

  function openModal(productId) {
    const product = siteData.products.find((p) => p.id === productId);
    if (!product || !modalOverlay) return;

    // Preenche o título e o link de compra
    modalTitle.textContent = `Planos e Preços - ${product.title}`;
    modalPurchaseLink.href = product.purchaseLink;

    // Limpa os planos anteriores e cria os novos
    modalPlansContainer.innerHTML = "";
    if (product.plans && product.plans.length > 0) {
      product.plans.forEach((plan) => {
        const planCard = document.createElement("div");
        planCard.className = "plan-card";

        const featuresHTML = plan.features
          .map((feature) => `<li>${feature}</li>`)
          .join("");

        planCard.innerHTML = `
                    <h3>${plan.name}</h3>
                    <p class="price">${plan.price}</p>
                    <ul>${featuresHTML}</ul>
                `;
        modalPlansContainer.appendChild(planCard);
      });
    } else {
      modalPlansContainer.innerHTML =
        "<p>Planos serão divulgados em breve.</p>";
    }

    modalOverlay.classList.add("active");
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  }

  // Adiciona listeners para fechar o modal
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalOverlay)
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });

  // ===================================================================
  // CARREGAMENTO DE CONTEÚDO DINÂMICO
  // ===================================================================

  // Seção Hero (só na index.html)
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.textContent = siteData.hero.title;
    document.getElementById("hero-subtitle").textContent =
      siteData.hero.subtitle;
    const heroButton = document.getElementById("hero-button");
    heroButton.textContent = siteData.hero.buttonText;
    heroButton.href = siteData.hero.buttonLink;
  }

  // Grade de Produtos na Home (só na index.html)
  const productsGridHome = document.getElementById("products-grid-home");
  if (productsGridHome) {
    siteData.products.forEach((product) => {
      const card = document.createElement("div");
      card.className = `product-card ${
        product.status === "soon" ? "is-coming-soon" : ""
      }`;
      card.innerHTML = `
                <div class="product-card-icon"><i class="${product.icon}"></i></div>
                <h3>${product.title}</h3>
                <p>${product.shortDescription}</p>
            `;
      productsGridHome.appendChild(card);
    });
  }

  // Página de Produtos Detalhada (produtos.html)
  const productsContainerDetailed = document.getElementById(
    "products-container-detailed"
  );
  if (productsContainerDetailed) {
    siteData.products.forEach((product) => {
      const detailCard = document.createElement("div");
      detailCard.className = `product-detail-card ${
        product.status === "soon" ? "is-coming-soon" : ""
      }`;

      let buttonHTML = `<button data-product-id="${product.id}" class="btn-primary">Saber Mais</button>`;
      if (product.status === "soon") {
        buttonHTML = `<button class="btn-secondary" disabled>Em Breve</button>`;
      }

      detailCard.innerHTML = `
                <div class="product-detail-icon"><i class="${product.icon}"></i></div>
                <div class="product-detail-content">
                    <h3>${product.title}</h3>
                    <p>${product.shortDescription}</p>
                    ${buttonHTML}
                </div>
            `;
      productsContainerDetailed.appendChild(detailCard);
    });

    // Event Delegation para abrir o modal
    productsContainerDetailed.addEventListener("click", (event) => {
      if (event.target && event.target.matches("[data-product-id]")) {
        const productId = event.target.getAttribute("data-product-id");
        openModal(productId);
      }
    });
  }

  // Página Sobre Nós
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = `
            <div class="section-header">
                <h1>${siteData.about.title}</h1>
                ${siteData.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
            </div>
        `;
  }

  // Página de Contato (Card de Informações)
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
            <h2>${siteData.contact.title}</h2>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="contact-item-text">
                    <h4>Email</h4>
                    <a href="mailto:${siteData.contact.email}">${
      siteData.contact.email
    }</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fa-solid fa-phone"></i></div>
                <div class="contact-item-text">
                    <h4>Telefone</h4>
                    <a href="tel:${siteData.contact.phone.replace(
                      /\s/g,
                      ""
                    )}">${siteData.contact.phone}</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fa-solid fa-map-marker-alt"></i></div>
                <div class="contact-item-text">
                    <h4>Endereço</h4>
                    <p>${siteData.contact.address}</p>
                </div>
            </div>
        `;
  }

  // ===================================================================
  // LÓGICA DE ANIMAÇÃO COM INTERSECTION OBSERVER
  // ===================================================================
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

  // Seleciona todos os elementos que devem ter a animação
  document
    .querySelectorAll(
      ".section-header, .product-card, .product-detail-card, .contact-card, .footer-top, .footer-col"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});
