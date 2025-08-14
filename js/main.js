/**
 * @file main.js
 * @description Script principal para o site institucional da Notreve Tecnologia. */
document.addEventListener("DOMContentLoaded", () => {
  // Verificação crítica da existência dos dados do site
  if (typeof siteData === "undefined") {
    console.error(
      "Erro Crítico: O arquivo data.js não foi encontrado ou está vazio."
    );
    return;
  }

  // ===================================================================
  // INICIALIZAÇÃO GERAL DAS FUNCIONALIDADES
  // ===================================================================
  initializeTheme();
  initializeMobileMenu();
  initializeHeaderScroll();
  initializeActiveLink();
  initializeHeroCarousel();
  loadDynamicContent(); 
  buildProductPage();
  initializeScrollAnimations();
});

// ===================================================================
// LÓGICA DO TEMA CLARO/ESCURO
// ===================================================================
function initializeTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Aplica o tema padrão (claro)
  const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    
    body.classList.toggle("light-theme", savedTheme !== "dark");
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      // Salva a nova preferência no localStorage
      localStorage.setItem(
        "theme",
        body.classList.contains("light-theme") ? "light" : "dark"
      );
    });
  }
  
  applySavedTheme();
}

// ===================================================================
// LÓGICA DO MENU MOBILE E NAVEGAÇÃO
// ===================================================================
function initializeMobileMenu() {
  const btnMobile = document.getElementById("btn-mobile");
  const header = document.getElementById("header");
  const menuLinks = document.querySelectorAll("#menu a");

  const toggleMenu = (event) => {
    if (event.type === "touchstart") event.preventDefault();
    header.classList.toggle("menu-active");
    const isActive = header.classList.contains("menu-active");
    btnMobile.setAttribute("aria-expanded", isActive);
    btnMobile.setAttribute(
      "aria-label",
      isActive ? "Fechar Menu" : "Abrir Menu"
    );
    document.body.classList.toggle("menu-active", isActive); // Bloqueia o scroll do body
  };

  if (btnMobile) {
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
  }

  // Fecha o menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("menu-active")) {
        header.classList.remove("menu-active");
        document.body.classList.remove("menu-active");
      }
    });
  });
}

// ===================================================================
// LÓGICA DO HEADER COM EFEITO DE SCROLL
// ===================================================================
function initializeHeaderScroll() {
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }
}

// ===================================================================
// LÓGICA PARA MARCAR O LINK ATIVO NO MENU
// ===================================================================
function initializeActiveLink() {
  const navLinks = document.querySelectorAll("#menu a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// ===================================================================
// LÓGICA DO CARROSSEL DE TEXTOS NO HERO
// ===================================================================
function initializeHeroCarousel() {
  const carousel = document.getElementById("hero-carousel");
  if (!carousel || !siteData.hero || !Array.isArray(siteData.hero.title))
    return;

  carousel.innerHTML = siteData.hero.title
    .map((title) => `<li><h1>${title}</h1></li>`)
    .join("");

  const heroItems = carousel.querySelectorAll("li");
  if (heroItems.length <= 1) {
    // Não inicia o carrossel se tiver 1 ou 0 itens
    if (heroItems.length === 1) heroItems[0].classList.add("active");
    return;
  }

  let currentIndex = 0;
  heroItems[currentIndex].classList.add("active");

  setInterval(() => {
    heroItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % heroItems.length;
    heroItems[currentIndex].classList.add("active");
  }, 5000);
}

// ===================================================================
// CARREGAMENTO DE CONTEÚDO DINÂMICO (PÁGINAS GERAIS)
// ===================================================================
function loadDynamicContent() {
  // --- Hero Section ---
  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent = siteData.hero.subtitle;
    const heroButton = document.getElementById("hero-button");
    heroButton.textContent = siteData.hero.buttonText;
    heroButton.href = siteData.hero.buttonLink;
  }

  // --- Grade de Produtos Simples (Home) ---
  const productsGridHome = document.getElementById("products-grid-home");
  if (productsGridHome) {
    productsGridHome.innerHTML = siteData.products
      .map((product) => {
        const isComingSoon = product.status === "soon";
        const link = isComingSoon ? "javascript:void(0);" : product.pageLink;
        const linkClass = isComingSoon ? "is-coming-soon" : "";

        return `
                    <a href="${link}" class="product-card ${linkClass} animate-on-scroll animate-fade-in-up">
                        <div>
                            <i class="${product.icon}"></i>
                            <h3>${product.title}</h3>
                            <p>${product.shortDescription}</p>
                        </div>
                    </a>`;
      })
      .join("");
  }

  // --- Grade de Produtos Detalhada (Página de Produtos) ---
  const productsContainerDetailed = document.getElementById(
    "products-container-detailed"
  );
  if (productsContainerDetailed) {
    productsContainerDetailed.innerHTML = siteData.products
      .map((product) => {
        const isComingSoon = product.status === "soon";
        const link = isComingSoon ? "javascript:void(0);" : product.pageLink;
        const linkClass = isComingSoon ? "is-coming-soon" : "";
        const buttonText = isComingSoon ? "Em Breve" : "Ver Detalhes";

        return `
                    <a href="${link}" class="product-detail-card ${linkClass} animate-on-scroll animate-fade-in-up">
                        <div class="product-detail-icon"><i class="${product.icon}"></i></div>
                        <div class="product-detail-content">
                            <h3>${product.title}</h3>
                            <p>${product.shortDescription}</p>
                            <span class="btn-primary">${buttonText}</span>
                        </div>
                    </a>`;
      })
      .join("");
  }

  // --- Seção Sobre ---
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = `<div class="section-header animate-on-scroll animate-fade-in-up"><h1>${
      siteData.about.title
    }</h1>${siteData.about.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("")}</div>`;
  }

  // --- Informações de Contato ---
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
            <h2>${siteData.contact.title}</h2>
            <div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div><div class="contact-item-text"><h4>Email</h4><a href="mailto:${
              siteData.contact.email
            }">${siteData.contact.email}</a></div></div>
            <div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-phone"></i></div><div class="contact-item-text"><h4>Telefone</h4><a href="tel:${siteData.contact.phone.replace(
              /\s/g,
              ""
            )}">${siteData.contact.phone}</a></div></div>
            <div class="contact-item"><div class="contact-item-icon"><i class="fa-solid fa-map-marker-alt"></i></div><div class="contact-item-text"><h4>Endereço</h4><p>${
              siteData.contact.address
            }</p></div></div>`;
  }

  // --- Footer ---
  const footerMain = document.querySelector(".footer-main");
  if (footerMain && siteData.footer) {
    // Cria o HTML da primeira coluna (logo e tagline)
    const firstColumnHTML = `
        <div class="footer-col animate-on-scroll animate-fade-in-up">
            <a href="index.html" class="logo"><img src="./assets/images/colorida.png" alt="Notreve Tecnologia Logo"/></a>
            <p class="footer-tagline">${siteData.footer.tagline}</p>
        </div>
      `;

    // Cria o HTML para as colunas de links dinamicamente
    const linkColumnsHTML = siteData.footer.columns
      .map(
        (column) => `
        <div class="footer-col animate-on-scroll animate-fade-in-up">
            <h4>${column.title}</h4>
            <ul class="footer-links">
                ${column.links
                  .map(
                    (link) => `
                    <li><a href="${link.href}">${link.text}</a></li>
                `
                  )
                  .join("")}
            </ul>
        </div>
      `
      )
      .join("");

    // Junta tudo e insere no DOM
    footerMain.innerHTML = firstColumnHTML + linkColumnsHTML;
  }
}

// ===================================================================
// LÓGICA PARA CONSTRUIR PÁGINAS DE PRODUTO ESPECÍFICAS
// ===================================================================
function buildProductPage() {
  const pageFileName = window.location.pathname.split("/").pop();
  // Chave de produto mais robusta, ex: 'gateway-pagamento.html' -> 'gateway'
  const productKey = pageFileName
    .replace(".html", "")
    .replace("-pagamento", "")
    .replace("api-", "");

  const productData = siteData.productPages[productKey];
  if (!productData) return; // Se não for uma página de produto, encerra a função

  const heroContent = document.querySelector(".product-hero-content");
  if (heroContent) {
    heroContent.querySelector("h1").textContent = productData.hero.title;
    heroContent.querySelector("p").textContent = productData.hero.subtitle;
  }

  const productContentSection = document.querySelector(
    ".product-content-section .container"
  );
  if (productContentSection) {
    productContentSection.innerHTML = productData.sections
      .map((section) => {
        let featuresHTML = "";
        if (section.features) {
          featuresHTML = `<ul class="features-list">${section.features
            .map(
              (feature) =>
                `<li><i class="${feature.icon}"></i><p>${feature.text}</p></li>`
            )
            .join("")}</ul>`;
        }
        // Adiciona as classes de animação diretamente na criação do bloco
        return `<div class="content-block animate-on-scroll animate-fade-in-up">
                            <h2>${section.title}</h2>
                            ${section.content || ""}
                            ${featuresHTML}
                        </div>`;
      })
      .join("");
  }
}

// ===================================================================
// LÓGICA DE ANIMAÇÃO NO SCROLL COM INTERSECTION OBSERVER
// ===================================================================
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  if (animatedElements.length === 0) return;

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          scrollObserver.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => scrollObserver.observe(el));
}
