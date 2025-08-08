document.addEventListener("DOMContentLoaded", function () {
  if (typeof siteData === "undefined") {
    console.error(
      "Erro Crítico: O arquivo data.js não foi encontrado ou está vazio."
    );
    return;
  }

  // ===================================================================
  // LÓGICA DE GESTÃO DO TEMA, MENU MOBILE E LINK ATIVO
  // ===================================================================
  const themeToggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");
  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeToggleButton) themeToggleButton.textContent = "☀️";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      if (themeToggleButton) themeToggleButton.textContent = "🌙";
    }
  }
  applyTheme(currentTheme || "light");
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
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () =>
      navbarMenu.classList.toggle("active")
    );
  }
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
  // FUNÇÃO PARA CONSTRUIR PÁGINAS DE PRODUTO
  // ===================================================================
  function buildProductPage(productId) {
    const productData = siteData.productPages[productId];
    if (!productData) return;

    const heroContent = document.querySelector(".product-hero-content");
    if (heroContent) {
      heroContent.querySelector("h1").textContent = productData.hero.title;
      heroContent.querySelector("p").textContent = productData.hero.subtitle;
    }

    const productContentSection = document.querySelector(
      ".product-content-section .container"
    );
    if (productContentSection) {
      
      productContentSection.innerHTML = "";

      productData.sections.forEach((section) => {
        let sectionHTML = `<h2>${section.title}</h2>`;
        if (section.content) {
          sectionHTML += section.content;
        }
        if (section.features) {
          sectionHTML += `<ul class="features-list">`;
          section.features.forEach((feature) => {
            sectionHTML += `<li><i class="${feature.icon}"></i><p>${feature.text}</p></li>`;
          });
          sectionHTML += `</ul>`;
        }
        productContentSection.innerHTML += `<div class="content-block">${sectionHTML}</div>`;
      });
    }
  }

  // Identifica a página de produto atual e constrói o conteúdo
  const pageFileName = window.location.pathname.split("/").pop();
  if (pageFileName === "gateway-pagamento.html") {
    buildProductPage("gateway");
  } else if (pageFileName === "api-whatsapp.html") {
    buildProductPage("whatsapp");
  } else if (pageFileName === "api-sms.html") {
    buildProductPage("sms");
  }

  // ===================================================================
  // CARREGAMENTO DE CONTEÚDO DINÂMICO
  // ===================================================================
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.textContent = siteData.hero.title;
    document.getElementById("hero-subtitle").textContent =
      siteData.hero.subtitle;
    const heroButton = document.getElementById("hero-button");
    heroButton.textContent = siteData.hero.buttonText;
    heroButton.href = siteData.hero.buttonLink;
  }

  const productsGridHome = document.getElementById("products-grid-home");
  if (productsGridHome) {
    siteData.products.forEach((product) => {
      const cardLink = document.createElement("a");
      cardLink.href = product.pageLink;
      cardLink.className = `product-card ${
        product.status === "soon" ? "is-coming-soon" : ""
      }`;
      if (product.status === "soon") {
        cardLink.removeAttribute("href");
        cardLink.style.cursor = "default";
      }
      cardLink.innerHTML = `
                <div class="product-card-icon"><i class="${product.icon}"></i></div>
                <h3>${product.title}</h3>
                <p>${product.shortDescription}</p>
            `;
      productsGridHome.appendChild(cardLink);
    });
  }

  const productsContainerDetailed = document.getElementById(
    "products-container-detailed"
  );
  if (productsContainerDetailed) {
    siteData.products.forEach((product) => {
      const detailLink = document.createElement("a");
      detailLink.href = product.pageLink;
      detailLink.className = `product-detail-card ${
        product.status === "soon" ? "is-coming-soon" : ""
      }`;

      let buttonText = product.status === "soon" ? "Em Breve" : "Ver Detalhes";

      detailLink.innerHTML = `
                <div class="product-detail-icon"><i class="${product.icon}"></i></div>
                <div class="product-detail-content">
                    <h3>${product.title}</h3>
                    <p>${product.shortDescription}</p>
                    <span class="btn-primary">${buttonText}</span>
                </div>
            `;
      if (product.status === "soon") {
        detailLink.removeAttribute("href");
        detailLink.style.cursor = "default";
      }
      productsContainerDetailed.appendChild(detailLink);
    });
  }

  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = `<div class="section-header"><h1>${
      siteData.about.title
    }</h1>${siteData.about.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("")}</div>`;
  }

  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `<h2>${
      siteData.contact.title
    }</h2><div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div><div class="contact-item-text"><h4>Email</h4><a href="mailto:${
      siteData.contact.email
    }">${
      siteData.contact.email
    }</a></div></div><div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-phone"></i></div><div class="contact-item-text"><h4>Telefone</h4><a href="tel:${siteData.contact.phone.replace(
      /\s/g,
      ""
    )}">${
      siteData.contact.phone
    }</a></div></div><div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-map-marker-alt"></i></div><div class="contact-item-text"><h4>Endereço</h4><p>${
      siteData.contact.address
    }</p></div></div>`;
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

  document
    .querySelectorAll(
      ".section-header, .product-card, .product-detail-card, .contact-card, .footer-top, .footer-col, .hero-content, .hero-visual, .product-hero, .content-block"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});
