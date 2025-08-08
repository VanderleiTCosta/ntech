const siteData = {
  // Conteúdo da Página Inicial
  hero: {
    title: "Plataformas White Label para Automatizar e Escalar seu Negócio.",
    subtitle:
      "Oferecemos a infraestrutura completa para a sua empresa criar seu próprio gateway de pagamentos e soluções de comunicação com a sua marca.",
    buttonText: "Conheça Nossos Produtos",
    buttonLink: "produtos.html",
  },
  // Produtos vendidos pela Notreve Tech
  products: [
    {
      id: "gateway",
      icon: "fa-solid fa-credit-card",
      title: "Gateway de Pagamento White Label",
      shortDescription:
        "Tenha seu próprio gateway de pagamentos. Oferecemos a plataforma completa para a sua empresa processar transações com a sua marca.",
      status: "live",
      pageLink: "gateway-pagamento.html",
    },
    {
      id: "whatsapp",
      icon: "fa-brands fa-whatsapp",
      title: "API de WhatsApp",
      shortDescription:
        "Integre o canal de comunicação mais popular do Brasil diretamente em seus sistemas para automação, vendas e suporte.",
      status: "live",
      pageLink: "api-whatsapp.html",
    },
    {
      id: "sms",
      icon: "fa-solid fa-comment-sms",
      title: "API de SMS",
      shortDescription:
        "Envie notificações, alertas e campanhas de marketing com uma API de SMS confiável e de alta entrega.",
      status: "live",
      pageLink: "api-sms.html",
    },
    {
      id: "chatbot",
      icon: "fa-solid fa-robot",
      title: "Chatbot com IA",
      shortDescription:
        "Automatize o atendimento ao cliente com um chatbot inteligente que aprende e resolve as necessidades dos seus usuários.",
      status: "soon",
      pageLink: "#",
    },
  ],
  // ===================================================================
  // CONTEÚDO DETALHADO PARA AS PÁGINAS DE PRODUTO
  // ===================================================================
  productPages: {
    gateway: {
      hero: {
        title: "Sua Marca, Suas Regras: Crie seu Próprio Gateway de Pagamento",
        subtitle: "Com a nossa plataforma White Label, a sua empresa pode oferecer uma solução de pagamentos completa, sem se preocupar com a complexidade da infraestrutura financeira."
      },
      sections: [
        {
          title: "O que é a Plataforma de Gateway White Label?",
          content: "<p>É uma solução completa que permite que a sua empresa processe transações de PIX, boletos e cartões de crédito sob a sua própria marca. Nós cuidamos de toda a tecnologia, segurança e conformidade regulatória, enquanto você foca em escalar o seu negócio и fortalecer a sua marca no mercado.</p>"
        },
        {
          title: "Funcionalidades Incluídas",
          features: [
            { icon: "fa-solid fa-server", text: "API RESTful robusta e de fácil integração." },
            { icon: "fa-solid fa-shield-halved", text: "Segurança de ponta e conformidade com o Banco Central." },
            { icon: "fa-solid fa-chart-line", text: "Dashboard administrativo para gestão de clientes e transações." },
            { icon: "fa-solid fa-file-invoice-dollar", text: "Liquidação automática e relatórios financeiros detalhados." },
            { icon: "fa-solid fa-headset", text: "Suporte técnico especializado para a sua equipa." }
          ]
        },
        {
          title: "Como Funciona?",
          content: "<p>Nossa equipa trabalha consigo para personalizar a plataforma com a sua identidade visual. Após a configuração, você recebe acesso à nossa API e a um painel de controlo completo para começar a operar. É a forma mais rápida e segura de se tornar um provedor de pagamentos.</p>"
        }
      ]
    },
    whatsapp: {
      hero: {
        title: "Conecte-se Instantaneamente com a API de WhatsApp",
        subtitle: "Automatize conversas, envie notificações e ofereça suporte de alto nível no canal de comunicação preferido dos seus clientes."
      },
      sections: [
        {
          title: "Por que integrar a API de WhatsApp?",
          content: "<p>O WhatsApp é mais do que um aplicativo de mensagens; é uma ferramenta de negócios poderosa. Com a nossa API, a sua empresa pode centralizar a comunicação, automatizar respostas e criar experiências personalizadas que aumentam o engajamento e as vendas.</p>"
        },
        {
          title: "Casos de Uso Principais",
          features: [
            { icon: "fa-solid fa-bell", text: "Envio de notificações transacionais (confirmação de pedido, status de entrega)." },
            { icon: "fa-solid fa-headset", text: "Automação de atendimento ao cliente com ou sem chatbots." },
            { icon: "fa-solid fa-rocket", text: "Campanhas de marketing e recuperação de carrinhos abandonados." },
            { icon: "fa-solid fa-user-check", text: "Verificação de contas e autenticação de dois fatores (2FA)." }
          ]
        }
      ]
    },
    sms: {
      hero: {
        title: "Comunicação Direta e Confiável com a API de SMS",
        subtitle: "Alcance qualquer cliente, a qualquer momento, com uma API de SMS de alta performance e taxas de entrega garantidas."
      },
      sections: [
        {
          title: "O Poder da Simplicidade do SMS",
          content: "<p>Apesar das novas tecnologias, o SMS continua a ser o canal de comunicação mais universal e com a maior taxa de abertura. É a ferramenta ideal para mensagens críticas que precisam de ser lidas imediatamente.</p>"
        },
        {
          title: "Ideal para",
          features: [
            { icon: "fa-solid fa-key", text: "Tokens de segurança e senhas de uso único (OTP)." },
            { icon: "fa-solid fa-calendar-check", text: "Lembretes de agendamentos, consultas e vencimentos." },
            { icon: "fa-solid fa-truck-fast", text: "Alertas de logística e atualizações de status de pedidos." },
            { icon: "fa-solid fa-bullhorn", text: "Comunicações de emergência e avisos importantes." }
          ]
        }
      ]
    }
  },
  // About, contact
  about: {
    title: "Nós Somos a Notreve Tecnologia",
    paragraphs: [
      "Na Notreve Tech, somos apaixonados por resolver problemas complexos com tecnologia de ponta. Nossa missão é fornecer a desenvolvedores e empresas as plataformas e APIs mais robustas do mercado.",
      "Cada solução que construímos é pensada para ser escalável, segura e fácil de integrar, permitindo que nossos clientes foquem no que fazem de melhor: inovar e crescer seus negócios.",
    ],
  },
  contact: {
    title: "Fale com um Especialista",
    email: "contato@notrevetech.com.br",
    phone: "+55 (XX) XXXX-XXXX",
    address: "Rua da Tecnologia, 456, Sala 20, São Paulo - SP",
  },
};