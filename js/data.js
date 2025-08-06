const siteData = {
  // Conteúdo da Página Inicial
  hero: {
    title: "APIs Poderosas para Automatizar e Escalar seu Negócio.",
    subtitle:
      "A infraestrutura de comunicação e pagamentos que a sua empresa precisa, com a robustez e a confiança da Notreve Tecnologia.",
    buttonText: "Conheça nossas soluções",
    buttonLink: "produtos.html",
  },
  // Produtos vendidos pela Notreve Tech
  products: [
    {
      id: "whatsapp",
      icon: "fa-brands fa-whatsapp",
      title: "API de WhatsApp",
      shortDescription:
        "Integre o canal de comunicação mais popular do Brasil diretamente em seus sistemas para automação, vendas e suporte.",
      status: "live",
      purchaseLink: "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-whatsapp",
      plans: [
        {
          name: "Básico",
          price: "R$ 99/mês",
          features: ["1 Conexão", "1.000 Mensagens/mês", "Suporte via Ticket"]
        },
        {
          name: "Profissional",
          price: "R$ 299/mês",
          features: ["5 Conexões", "5.000 Mensagens/mês", "API de Status", "Suporte Prioritário"]
        },
        {
          name: "Empresarial",
          price: "Personalizado",
          features: ["Conexões Ilimitadas", "Volume de Mensagens Sob Demanda", "Gestor de Contas Dedicado"]
        }
      ]
    },
    {
      id: "sms",
      icon: "fa-solid fa-comment-sms",
      title: "API de SMS",
      shortDescription:
        "Envie notificações, alertas de segurança e campanhas de marketing com uma API de SMS confiável e de alta entrega.",
      status: "live",
      purchaseLink: "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-sms",
      plans: [
        {
          name: "Starter",
          price: "R$ 0,10 por SMS",
          features: ["Pacote de 1.000 SMS", "API REST", "Relatórios de Entrega"]
        },
        {
          name: "Business",
          price: "R$ 0,08 por SMS",
          features: ["Pacote de 10.000 SMS", "Shortcode Opcional", "Suporte Prioritário"]
        }
      ]
    },
    {
      id: "gateway",
      icon: "fa-solid fa-credit-card",
      title: "Gateway de Pagamento",
      shortDescription:
        "Processe pagamentos de forma segura e eficiente com uma API robusta e de fácil integração para seus produtos e serviços.",
      status: "live",
      purchaseLink: "https://app.notrevetech.com.br/index.php?rp=/store/servidores-and-vps", // Assumindo que este link é para o Gateway
      plans: [
        {
          name: "Transacional",
          price: "Sob Consulta",
          features: ["API de PIX", "API de Boletos", "Taxas Competitivas por Volume", "Dashboard Financeiro"]
        }
      ]
    },
    {
      id: "chatbot",
      icon: "fa-solid fa-robot",
      title: "Chatbot com IA",
      shortDescription:
        "Automatize o atendimento ao cliente com um chatbot inteligente que aprende e resolve as necessidades dos seus usuários.",
      status: "soon",
      purchaseLink: "#",
      plans: []
    },
  ],
  // Conteúdo da Página Sobre (agora focado na Notreve Tech)
  about: {
    title: "Nós Somos a Notreve Tecnologia",
    paragraphs: [
      "Na Notreve Tech, somos apaixonados por resolver problemas complexos com tecnologia de ponta. Nossa missão é fornecer a desenvolvedores e empresas as ferramentas de API mais robustas e confiáveis do mercado para comunicação e pagamentos.",
      "Cada linha de código que escrevemos é pensada para ser escalável, segura e fácil de integrar, permitindo que nossos clientes foquem no que fazem de melhor: inovar e crescer seus negócios.",
    ],
  },
  // Conteúdo da Página Contato
  contact: {
    title: "Fale com um Especialista",
    email: "contato@notrevetech.com.br",
    phone: "+55 (XX) XXXX-XXXX",
    address: "Rua da Tecnologia, 456, Sala 20, São Paulo - SP",
  },
};
