const translations = {
  pt: {
    name: "André F. C. Santos",
    phrase: "Desenvolvedor Full Stack (em formação)",
    about_me: "Sobre mim",
    description: "Sou desenvolvedor em formação, em transição de carreira para a área de Tecnologia da Informação. Atualmente estudo Java, Angular e fundamentos de desenvolvimento web, buscando minha primeira oportunidade como desenvolvedor júnior.",
    projects: "Projetos",
    boxer_pro_1: "Projeto 1",
    project_1: "Projeto 1",
    proj_1_desc:"Alguns projetos que desenvolvi para estudo e prática.",
    view_1: "ver projeto",
    boxer_pro_2: "Projeto 2",
    project_2: "Projeto 2",
    proj_2_desc:"Projeto simples para estudo de layout responsivo.",
    view_2: "ver projeto",
    contact: "Contato"
    
  },

  en: {
    name: "André F. C. Santos",
    phrase: "Full Stack Developer (in training)",
    about_me: "About",
    description: "I'm a developer in training, transitioning my career to the Information Technology field. I'm currently studying Java, Angular, and web development fundamentals, seeking my first opportunity as a junior developer.",
    projects: "Projects",
    project_1: "Project 1",
    proj_1_desc:"Some projects I developed for study and practice.",
    view_1: "view project",
    boxer_pro_2: "Project 2",
    project_2: "Project 2",
    proj_2_desc:"Simple project for studying responsive layout.",
    view_2: "view project",
    contact: "Contact"
   
  }
};

const elements = document.querySelectorAll("[data-i18n]");
const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[language][key];
  });

  document.documentElement.lang = language;
}

let currentLanguage = "pt";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  setLanguage(currentLanguage);

  languageToggle.textContent =
    currentLanguage === "pt" ? "🇺🇸 EN" : "🇧🇷 PT";
});

// idioma padrão
setLanguage("pt");

