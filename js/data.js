const siteData = {
  // Conteúdo da Página Inicial
  hero: {
    title:
      "A infraestrutura completa para o crescimento do seu negócio digital.",
    subtitle:
      "Integramos nuvem, pagamentos e comunicação para criar soluções robustas que impulsionam sua empresa para o futuro.",
    buttonText: "Conheça nossas soluções",
    buttonLink: "ecossistema.html",
  },
  // Conteúdo usado tanto na home quanto na pág. ecossistema
  pillars: [
    {
      id: "cloud",
      icon: "./assets/images/icone colorido.png",
      title: "Notreve Cloud",
      shortDescription:
        "Performance e escalabilidade para suas aplicações com a máxima segurança.",
      fullDescription:
        "Com servidores de alta performance e proteção DDoS de ponta, a Notreve Cloud garante que sua aplicação esteja sempre online, rápida e segura, permitindo que você foque no crescimento do seu negócio. Nossos planos flexíveis se adaptam às suas necessidades, desde startups até grandes corporações.",
      link: "https://notrevecloud.com.br/",
      status: "live", // Serviço no ar
    },
    {
      id: "pay",
      icon: "./assets/images/icone colorido.png",
      title: "Notreve Pay",
      shortDescription:
        "Transações seguras e inteligentes com um gateway de pagamento completo.",
      fullDescription:
        "Ofereça múltiplos métodos de pagamento, gerencie cobranças recorrentes e tenha acesso a uma API de fácil integração. A Notreve Pay é a solução definitiva para monetizar seus serviços online de forma eficiente e segura.",
      link: "https://notrevepay.com.br/",
      status: "live", // Serviço no ar
    },
    {
      id: "comms",
      icon: "./assets/images/icone colorido.png",
      title: "APIs de Comunicação",
      shortDescription:
        "Automatize o engajamento e o suporte ao cliente com o ApiZap e ApiSMS.",
      fullDescription:
        "Crie chatbots inteligentes, envie notificações personalizadas em massa via WhatsApp e SMS, e integre essas funcionalidades diretamente em seus sistemas para otimizar a comunicação com seus clientes.",
      link: "#", // Coloque o link do ApiZap/ApiSMS aqui
      status: "live", // Serviço no ar
    },
    {
      id: "ai",
      icon: "./assets/images/icone colorido.png",
      title: "Notreve AI",
      shortDescription: "Inteligência Artificial para otimizar seus processos.",
      fullDescription:
        "Análise de dados, automação inteligente e insights de negócio potencializados por IA. O futuro da sua operação começa aqui.",
      link: "#",
      status: "soon", // EM BREVE
    },
  ],
  // Conteúdo da Página Sobre
  about: {
    title: "Nossa Missão: Impulsionar o Futuro Digital",
    paragraphs: [
      "A Notreve Tech nasceu da visão de que toda empresa, independentemente do seu tamanho, merece acesso a uma infraestrutura tecnológica de ponta. Somos mais do que uma holding; somos um ecossistema de soluções projetadas para trabalhar em sinergia, simplificando a complexidade do mundo digital.",
      "Nossa jornada é marcada pela inovação constante e pelo compromisso com a estabilidade e a segurança. Acreditamos que, ao fornecer as ferramentas certas — de servidores em nuvem a sistemas de pagamento e APIs de comunicação — capacitamos empreendedores e grandes corporações a alcançarem seu máximo potencial.",
      "Desde a nossa fundação, temos dedicado nossos esforços para entender as necessidades do mercado e desenvolver soluções que realmente fazem a diferença. Nossa equipe é composta por especialistas apaixonados por tecnologia e inovação, sempre buscando as últimas tendências para oferecer o melhor aos nossos clientes.",
    ],
    teamSection: {
      title: "Nossa Equipe",
      members: [
        {
          name: "Fulano de Tal",
          position: "CEO",
          image: "assets/images/team/fulano.jpg", // Substitua pelo caminho da imagem
        },
        {
          name: "Ciclano Silva",
          position: "CTO",
          image: "assets/images/team/ciclano.jpg", // Substitua pelo caminho da imagem
        },
        {
          name: "Beltrana Souza",
          position: "Diretora Comercial",
          image: "assets/images/team/beltrana.jpg", // Substitua pelo caminho da imagem
        },
      ],
    },
  },
  // Conteúdo da Página Contato
  contact: {
    title: "Vamos Conversar",
    email: "comercial@notrevetech.com.br",
    phone: "+55 (XX) XXXX-XXXX",
    address: "Rua da Inovação, 123, Sala 10, Tech Park, São Paulo - SP",
  },
};
