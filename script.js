/*
  MaxFood AB Website Script
  This script handles multilingual text replacement, navigation highlighting,
  scroll-based header effects and simple product filtering for the MaxFood
  website. Translations are defined for English, Spanish, French and Swedish.
*/

// Translation dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_private_label: "Private Label",
    nav_quality: "Quality & Certifications",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_login: "Login",
    hero_title: "Swedish Quality, Mediterranean Taste — Fresh & Frozen",
    hero_subtitle: "Certified halal and plant-based foods made in Sweden for retailers, restaurants, and distributors across Europe.",
    hero_cta_view_products: "View Products",
    hero_cta_request_quote: "Request a Quote",
    hero_badge_halal: "Halal Certified",
    hero_badge_vegan: "Vegan",
    hero_badge_sweden: "Made in Sweden",
    hero_badge_haccp: "HACCP Approved",
    intro_text: "MaxFood AB is a modern Swedish food factory producing healthy, high-quality fresh and frozen foods for both retail and food service.",
    intro_highlight_title: "Modern Swedish Factory",
    cta_partner_text: "Partner with MaxFood AB – Join our European distribution network.",
    cta_partner_button: "Contact Us",
    product_page_title: "Our Products",
    filter_line: "Line",
    filter_format: "Format",
    private_label_title: "Produce Your Brand",
    private_label_intro: "We produce your brand – private label solutions.",
    private_label_step1: "Choose product",
    private_label_step2: "Send logo and label language",
    private_label_step3: "Approve design",
    private_label_step4: "Production and delivery",
    private_label_cta: "Request your private label offer",
    quality_title: "Quality & Certifications",
    quality_intro: "Our products meet strict quality standards and hold multiple certifications.",
    about_title: "About Us",
    about_mission: "Mission: Deliver high-quality and sustainable Swedish food solutions.",
    about_vision: "Vision: Be Europe’s most reliable producer of fresh and frozen halal and plant-based foods.",
    about_values: "Values: Quality, Integrity, Health, Innovation.",
    contact_title: "Contact Us",
    contact_form_title: "Get in Touch",
    contact_name: "Name",
    contact_company: "Company",
    contact_email: "Email",
    contact_country: "Country",
    contact_message: "Message",
    contact_submit: "Send Message"
  },
  es: {
    nav_home: "Inicio",
    nav_products: "Productos",
    nav_private_label: "Marca Propia",
    nav_quality: "Calidad & Certificaciones",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_login: "Iniciar Sesión",
    hero_title: "Calidad Sueca, Sabor Mediterráneo — Fresco y Congelado",
    hero_subtitle: "Alimentos certificados halal y de origen vegetal hechos en Suecia para minoristas, restaurantes y distribuidores en toda Europa.",
    hero_cta_view_products: "Ver Productos",
    hero_cta_request_quote: "Solicitar Cotización",
    hero_badge_halal: "Certificado Halal",
    hero_badge_vegan: "Vegano",
    hero_badge_sweden: "Hecho en Suecia",
    hero_badge_haccp: "Aprobado HACCP",
    intro_text: "MaxFood AB es una moderna fábrica sueca de alimentos que produce alimentos saludables y de alta calidad frescos y congelados para retail y servicio de alimentos.",
    intro_highlight_title: "Fábrica Sueca Moderna",
    cta_partner_text: "Asóciate con MaxFood AB – Únete a nuestra red de distribución europea.",
    cta_partner_button: "Contáctanos",
    product_page_title: "Nuestros Productos",
    filter_line: "Línea",
    filter_format: "Formato",
    private_label_title: "Produce tu Marca",
    private_label_intro: "Producimos tu marca – soluciones de marca propia.",
    private_label_step1: "Elige producto",
    private_label_step2: "Envía logo e idioma de la etiqueta",
    private_label_step3: "Aprueba diseño",
    private_label_step4: "Producción y entrega",
    private_label_cta: "Solicita tu oferta de marca propia",
    quality_title: "Calidad & Certificaciones",
    quality_intro: "Nuestros productos cumplen estrictos estándares de calidad y poseen múltiples certificaciones.",
    about_title: "Sobre Nosotros",
    about_mission: "Misión: Brindar soluciones alimentarias suecas de alta calidad y sostenibles.",
    about_vision: "Visión: Ser el productor más confiable de Europa de alimentos frescos y congelados halal y de origen vegetal.",
    about_values: "Valores: Calidad, Integridad, Salud, Innovación.",
    contact_title: "Contáctanos",
    contact_form_title: "Ponte en Contacto",
    contact_name: "Nombre",
    contact_company: "Empresa",
    contact_email: "Correo Electrónico",
    contact_country: "País",
    contact_message: "Mensaje",
    contact_submit: "Enviar Mensaje"
  },
  fr: {
    nav_home: "Accueil",
    nav_products: "Produits",
    nav_private_label: "Marque Privée",
    nav_quality: "Qualité & Certifications",
    nav_about: "À Propos",
    nav_contact: "Contact",
    nav_login: "Connexion",
    hero_title: "Qualité suédoise, goût méditerranéen — Frais & Surgelé",
    hero_subtitle: "Aliments certifiés halal et végétaux fabriqués en Suède pour les détaillants, restaurants et distributeurs à travers l'Europe.",
    hero_cta_view_products: "Voir Produits",
    hero_cta_request_quote: "Demander un Devis",
    hero_badge_halal: "Certifié Halal",
    hero_badge_vegan: "Végétalien",
    hero_badge_sweden: "Fabriqué en Suède",
    hero_badge_haccp: "Approuvé HACCP",
    intro_text: "MaxFood AB est une usine alimentaire suédoise moderne produisant des aliments frais et surgelés sains et de haute qualité pour le commerce de détail et la restauration.",
    intro_highlight_title: "Usine suédoise moderne",
    cta_partner_text: "Devenez partenaire de MaxFood AB – Rejoignez notre réseau de distribution européen.",
    cta_partner_button: "Contactez-nous",
    product_page_title: "Nos Produits",
    filter_line: "Ligne",
    filter_format: "Format",
    private_label_title: "Produisez Votre Marque",
    private_label_intro: "Nous produisons votre marque – solutions marque privée.",
    private_label_step1: "Choisir le produit",
    private_label_step2: "Envoyer le logo et la langue de l'étiquette",
    private_label_step3: "Approuver le design",
    private_label_step4: "Production et livraison",
    private_label_cta: "Demandez votre offre marque privée",
    quality_title: "Qualité & Certifications",
    quality_intro: "Nos produits répondent à des normes de qualité strictes et possèdent plusieurs certifications.",
    about_title: "À Propos de Nous",
    about_mission: "Mission : Offrir des solutions alimentaires suédoises de haute qualité et durables.",
    about_vision: "Vision : Être le producteur le plus fiable d'Europe d'aliments frais et surgelés halal et végétaux.",
    about_values: "Valeurs : Qualité, Intégrité, Santé, Innovation.",
    contact_title: "Contactez-nous",
    contact_form_title: "Entrer en contact",
    contact_name: "Nom",
    contact_company: "Entreprise",
    contact_email: "Email",
    contact_country: "Pays",
    contact_message: "Message",
    contact_submit: "Envoyer"
  },
  sv: {
    nav_home: "Hem",
    nav_products: "Produkter",
    nav_private_label: "Eget Varumärke",
    nav_quality: "Kvalitet & Certifieringar",
    nav_about: "Om Oss",
    nav_contact: "Kontakt",
    nav_login: "Logga In",
    hero_title: "Svensk Kvalitet, Medelhavssmak — Färsk & Fryst",
    hero_subtitle: "Certifierade halal- och växtbaserade livsmedel tillverkade i Sverige för återförsäljare, restauranger och distributörer i hela Europa.",
    hero_cta_view_products: "Visa Produkter",
    hero_cta_request_quote: "Begär Offert",
    hero_badge_halal: "Halal Certifierad",
    hero_badge_vegan: "Vegan",
    hero_badge_sweden: "Tillverkad i Sverige",
    hero_badge_haccp: "HACCP Godkänd",
    intro_text: "MaxFood AB är en modern svensk livsmedelsfabrik som producerar hälsosamma, högkvalitativa färska och frysta livsmedel för både detaljhandel och food service.",
    intro_highlight_title: "Modern svensk fabrik",
    cta_partner_text: "Bli partner med MaxFood AB – Gå med i vårt europeiska distributionsnätverk.",
    cta_partner_button: "Kontakta oss",
    product_page_title: "Våra Produkter",
    filter_line: "Linje",
    filter_format: "Format",
    private_label_title: "Skapa Ditt Varumärke",
    private_label_intro: "Vi producerar ditt varumärke – private label-lösningar.",
    private_label_step1: "Välj produkt",
    private_label_step2: "Skicka logotyp och etikett-språk",
    private_label_step3: "Godkänn design",
    private_label_step4: "Produktion och leverans",
    private_label_cta: "Begär ditt private label-erbjudande",
    quality_title: "Kvalitet & Certifieringar",
    quality_intro: "Våra produkter uppfyller stränga kvalitetsstandarder och har flera certifieringar.",
    about_title: "Om Oss",
    about_mission: "Mission: Leverera högkvalitativa och hållbara svenska livsmedelslösningar.",
    about_vision: "Vision: Vara Europas mest pålitliga producent av färska och frysta halal- och växtbaserade livsmedel.",
    about_values: "Värden: Kvalitet, Integritet, Hälsa, Innovation.",
    contact_title: "Kontakta Oss",
    contact_form_title: "Kontakta oss",
    contact_name: "Namn",
    contact_company: "Företag",
    contact_email: "E-post",
    contact_country: "Land",
    contact_message: "Meddelande",
    contact_submit: "Skicka"
  }
};

// Current language (default to English)
let currentLang = 'en';

// Apply translations to elements with data-key attribute
function applyTranslations() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  // Update placeholder attributes for form inputs
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });
}

// Set language when clicking language buttons
function setLanguage(lang) {
  currentLang = lang;
  // Mark active button
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  applyTranslations();
}

// Sticky header background change on scroll
function handleScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Product filtering (for products page)
function setupProductFilters() {
  const lineSelect = document.getElementById('filter-line');
  const formatSelect = document.getElementById('filter-format');
  if (!lineSelect || !formatSelect) return;
  function filterProducts() {
    const line = lineSelect.value;
    const format = formatSelect.value;
    document.querySelectorAll('.product-grid .product-card').forEach(card => {
      const cardLine = card.getAttribute('data-line');
      const cardFormat = card.getAttribute('data-format');
      const matchesLine = line === 'all' || cardLine === line;
      const matchesFormat = format === 'all' || cardFormat === format;
      card.style.display = (matchesLine && matchesFormat) ? 'block' : 'none';
    });
  }
  lineSelect.addEventListener('change', filterProducts);
  formatSelect.addEventListener('change', filterProducts);
  // initial filter
  filterProducts();
}

// Initialization on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Apply translations
  applyTranslations();
  // Setup language buttons
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  // Highlight active nav item based on current page
  const pathname = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && pathname === href) {
      link.classList.add('active');
    }
  });
  // Scroll event for header
  window.addEventListener('scroll', handleScroll);
  // Setup product filters if on products page
  setupProductFilters();
});