/* =========================================
   LENDI.GE — MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       CONFIG
    ========================================= */

  const WHATSAPP_NUMBER = "995598172937";

  const LANGUAGE_STORAGE_KEY = "lendi-language";

  /* =========================================
       ELEMENTS
    ========================================= */

  const header = document.getElementById("header");

  const mobileMenuButton = document.getElementById("mobileMenuButton");

  const mainNav = document.getElementById("mainNav");

  const languageButton = document.getElementById("languageButton");

  const languageSwitcher = document.querySelector(".language-switcher");

  const currentLanguage = document.getElementById("currentLanguage");

  const languageOptions = document.querySelectorAll("[data-lang]");

  const contactForm = document.getElementById("contactForm");

  const formSuccess = document.getElementById("formSuccess");

  const currentYear = document.getElementById("currentYear");

  /* =========================================
       TRANSLATIONS
    ========================================= */

  const translations = {
    ka: {
      nav_services: "სერვისები",
      nav_pricing: "ფასები",
      nav_process: "როგორ ვმუშაობთ",
      nav_why: "რატომ Lendi",
      nav_contact: "კონტაქტი",
      nav_cta: "შეკვეთა",

      hero_badge: "ვებსაიტები ახალი და მზარდი ბიზნესებისთვის",

      hero_title: "შენი ბიზნესი იმსახურებს კარგ ვებსაიტს.",

      hero_description:
        "ვქმნით თანამედროვე, სწრაფ და მობილურზე სრულად მორგებულ ვებსაიტებს, რომლებიც შენს ბიზნესს პროფესიონალურად წარმოაჩენს და მომხმარებელს მოქმედებისკენ უბიძგებს.",

      hero_button: "შეუკვეთე საიტი",

      hero_whatsapp: "მოგვწერე WhatsApp-ზე",

      hero_trust_1: "თანამედროვე დიზაინი",

      hero_trust_2: "მობილურზე მორგებული",

      hero_trust_3: "სწრაფი კომუნიკაცია",

      visual_from: "საიტები",

      visual_mobile: "ყველა მოწყობილობაზე",

      services_label: "რას ვაკეთებთ",

      services_title: "ყველაფერი, რაც კარგ ბიზნეს-საიტს სჭირდება.",

      services_description:
        "მარტივი იდეიდან სრულფასოვან ვებსაიტამდე — ყველაფერს ერთ სივრცეში ვაწყობთ.",

      service_1_title: "ვებსაიტის დიზაინი",

      service_1_text:
        "თანამედროვე და ვიზუალურად გამორჩეული დიზაინი, რომელიც შენს ბრენდს პროფესიონალურად წარმოაჩენს.",

      service_2_title: "ვებ-დეველოპმენტი",

      service_2_text:
        "სწრაფი და ფუნქციური ვებსაიტი, რომელიც კომპიუტერზე, ტაბლეტსა და ტელეფონზე მუშაობს.",

      service_3_title: "ბიზნესის ონლაინ-წარმოდგენა",

      service_3_text:
        "ვებსაიტი, რომელიც მომხმარებელს მარტივად აჩვენებს ვინ ხარ, რას აკეთებ და როგორ დაგიკავშირდეს.",

      service_4_title: "მობილური ოპტიმიზაცია",

      service_4_text:
        "ყველა ეკრანის ზომისთვის შექმნილი ინტერფეისი, რომ საიტი ნებისმიერ მოწყობილობაზე კარგად გამოიყურებოდეს.",

      pricing_label: "ფასები",

      pricing_title: "აირჩიე შენი ბიზნესისთვის შესაფერისი პაკეტი.",

      pricing_description: "გამჭვირვალე ფასები დამატებითი სიურპრიზების გარეშე.",

      price_1_name: "START",

      price_1_description:
        "მარტივი და თანამედროვე ვებსაიტი ახალი ბიზნესისთვის.",

      price_1_feature_1: "ერთგვერდიანი საიტი",

      price_1_feature_2: "თანამედროვე დიზაინი",

      price_1_feature_3: "მობილურზე ადაპტაცია",

      price_1_feature_4: "საკონტაქტო ფორმა",

      price_2_name: "BUSINESS",

      price_2_description: "სრულყოფილი ბიზნეს-საიტი მეტი შესაძლებლობით.",

      price_2_feature_1: "მრავალსექციური One Page",

      price_2_feature_2: "უნიკალური დიზაინი",

      price_2_feature_3: "მობილური ოპტიმიზაცია",

      price_2_feature_4: "საკონტაქტო ფორმა",

      price_2_feature_5: "WhatsApp ინტეგრაცია",

      price_3_name: "PREMIUM",

      price_3_description:
        "ინდივიდუალური გადაწყვეტა უფრო რთული პროექტებისთვის.",

      price_3_feature_1: "ინდივიდუალური დიზაინი",

      price_3_feature_2: "რთული ფუნქციები",

      price_3_feature_3: "მორგებული სტრუქტურა",

      price_3_feature_4: "ინტეგრაციები",

      price_3_feature_5: "პროექტის ინდივიდუალური შეფასება",

      popular: "ყველაზე პოპულარული",

      price_button: "შეკვეთა",

      process_label: "პროცესი",

      process_title: "იდეიდან გაშვებამდე — მარტივად.",

      process_description:
        "არ არის საჭირო ტექნიკური ცოდნა. ჩვენ ნაბიჯ-ნაბიჯ გაგატარებთ მთელ პროცესში.",

      process_1_title: "ვსაუბრობთ იდეაზე",

      process_1_text:
        "ვიგებთ შენს ბიზნესს, მიზნებს და იმას, როგორი საიტი გჭირდება.",

      process_2_title: "ვქმნით დიზაინს",

      process_2_text:
        "ვაწყობთ ვიზუალურ სტრუქტურას და დიზაინს, რომელიც შენს ბიზნესს შეესაბამება.",

      process_3_title: "ვაშენებთ საიტს",

      process_3_text: "დიზაინს ვაქცევთ სწრაფ და სრულად ფუნქციურ ვებსაიტად.",

      process_4_title: "ვუშვებთ ონლაინ",

      process_4_text:
        "საბოლოო შემოწმების შემდეგ შენი საიტი მზად არის მომხმარებლებისთვის.",

      why_label: "რატომ Lendi",

      why_title: "კარგი საიტი მხოლოდ ლამაზი არ უნდა იყოს.",

      why_description:
        "ის უნდა იყოს სწრაფი, მარტივი, გასაგები და მომხმარებელს სწორი მოქმედებისკენ უნდა მიჰყავდეს.",

      why_button: "დავიწყოთ პროექტი",

      why_1_title: "თანამედროვე ვიზუალი",

      why_1_text: "სუფთა, თანამედროვე და პროფესიონალური დიზაინი.",

      why_2_title: "სწრაფი კომუნიკაცია",

      why_2_text: "მარტივი კომუნიკაცია ტელეფონით და WhatsApp-ით.",

      why_3_title: "მობილურზე სრულად მორგებული",

      why_3_text: "საიტი კარგად მუშაობს ტელეფონზე, ტაბლეტსა და კომპიუტერზე.",

      why_4_title: "ბიზნესზე ორიენტირებული",

      why_4_text:
        "დიზაინი და სტრუქტურა იქმნება არა მხოლოდ სილამაზისთვის, არამედ შედეგისთვის.",

      contact_label: "დაგვიკავშირდი",

      contact_title: "გაქვს იდეა? მოდი დავიწყოთ.",

      contact_description:
        "მოგვწერე რამდენიმე სიტყვით შენს ბიზნესზე და დაგიკავშირდებით პროექტის დეტალების განსახილველად.",

      contact_phone_label: "დაგვირეკე",

      contact_whatsapp_label: "მოგვწერე WhatsApp-ზე",

      form_title: "მოგვწერე",

      form_name: "სახელი",

      form_name_placeholder: "შენი სახელი",

      form_phone: "ტელეფონი",

      form_phone_placeholder: "+995 5XX XX XX XX",

      form_service: "რა ტიპის საიტი გჭირდება?",

      form_service_default: "აირჩიე",

      form_service_1: "Start — 500 ₾",

      form_service_2: "Business — 700 ₾",

      form_service_3: "Premium — 1000 ₾+",

      form_service_4: "ინდივიდუალური პროექტი",

      form_message: "მოკლე აღწერა",

      form_message_placeholder:
        "მოგვიყევი შენი ბიზნესისა და სასურველი საიტის შესახებ...",

      form_submit: "გაგზავნა WhatsApp-ზე",

      form_note:
        "ფორმის გაგზავნის შემდეგ WhatsApp გაიხსნება შევსებული შეტყობინებით.",

      form_success: "შეტყობინება მზად არის გასაგზავნად.",

      footer_text: "თანამედროვე ვებსაიტები თანამედროვე ბიზნესისთვის.",

      floating_whatsapp: "მოგვწერე",
    },

    /* =====================================
           RUSSIAN
        ===================================== */

    ru: {
      nav_services: "Услуги",

      nav_pricing: "Цены",

      nav_process: "Как работаем",

      nav_why: "Почему Lendi",

      nav_contact: "Контакты",

      nav_cta: "Заказать",

      hero_badge: "Сайты для новых и развивающихся бизнесов",

      hero_title: "Ваш бизнес заслуживает хорошего сайта.",

      hero_description:
        "Мы создаём современные, быстрые и адаптивные сайты, которые профессионально представляют ваш бизнес и помогают клиентам сделать следующий шаг.",

      hero_button: "Заказать сайт",

      hero_whatsapp: "Написать в WhatsApp",

      hero_trust_1: "Современный дизайн",

      hero_trust_2: "Адаптация под мобильные",

      hero_trust_3: "Быстрая коммуникация",

      visual_from: "Сайты",

      visual_mobile: "На всех устройствах",

      services_label: "Что мы делаем",

      services_title: "Всё необходимое для хорошего бизнес-сайта.",

      services_description:
        "От простой идеи до полноценного сайта — всё в одном месте.",

      service_1_title: "Дизайн сайта",

      service_1_text:
        "Современный и визуально выразительный дизайн, который профессионально представляет ваш бренд.",

      service_2_title: "Веб-разработка",

      service_2_text:
        "Быстрый и функциональный сайт, который работает на компьютере, планшете и телефоне.",

      service_3_title: "Представительство бизнеса онлайн",

      service_3_text:
        "Сайт, который понятно показывает клиенту, кто вы, чем занимаетесь и как с вами связаться.",

      service_4_title: "Мобильная оптимизация",

      service_4_text:
        "Интерфейс для любых размеров экрана, чтобы сайт отлично выглядел на любом устройстве.",

      pricing_label: "Цены",

      pricing_title: "Выберите пакет для вашего бизнеса.",

      pricing_description: "Прозрачные цены без неприятных сюрпризов.",

      price_1_name: "START",

      price_1_description: "Простой и современный сайт для нового бизнеса.",

      price_1_feature_1: "Одностраничный сайт",

      price_1_feature_2: "Современный дизайн",

      price_1_feature_3: "Адаптация под мобильные",

      price_1_feature_4: "Контактная форма",

      price_2_name: "BUSINESS",

      price_2_description:
        "Полноценный бизнес-сайт с дополнительными возможностями.",

      price_2_feature_1: "Много секций на одной странице",

      price_2_feature_2: "Уникальный дизайн",

      price_2_feature_3: "Мобильная оптимизация",

      price_2_feature_4: "Контактная форма",

      price_2_feature_5: "Интеграция WhatsApp",

      price_3_name: "PREMIUM",

      price_3_description: "Индивидуальное решение для более сложных проектов.",

      price_3_feature_1: "Индивидуальный дизайн",

      price_3_feature_2: "Сложные функции",

      price_3_feature_3: "Индивидуальная структура",

      price_3_feature_4: "Интеграции",

      price_3_feature_5: "Индивидуальная оценка проекта",

      popular: "Самый популярный",

      price_button: "Заказать",

      process_label: "Процесс",

      process_title: "От идеи до запуска — просто.",

      process_description:
        "Технические знания не нужны. Мы проведём вас через весь процесс шаг за шагом.",

      process_1_title: "Обсуждаем идею",

      process_1_text: "Изучаем ваш бизнес, цели и то, какой сайт вам нужен.",

      process_2_title: "Создаём дизайн",

      process_2_text: "Создаём визуальную структуру и дизайн под ваш бизнес.",

      process_3_title: "Разрабатываем сайт",

      process_3_text:
        "Превращаем дизайн в быстрый и полностью функциональный сайт.",

      process_4_title: "Запускаем онлайн",

      process_4_text: "После финальной проверки сайт готов для ваших клиентов.",

      why_label: "Почему Lendi",

      why_title: "Хороший сайт должен быть не только красивым.",

      why_description:
        "Он должен быть быстрым, понятным и вести пользователя к правильному действию.",

      why_button: "Начать проект",

      why_1_title: "Совремальный визуал",

      why_1_text: "Чистый, современный и профессиональный дизайн.",

      why_2_title: "Быстрая коммуникация",

      why_2_text: "Простая связь по телефону и через WhatsApp.",

      why_3_title: "Полная адаптация",

      why_3_text: "Сайт отлично работает на телефоне, планшете и компьютере.",

      why_4_title: "Ориентация на бизнес",

      why_4_text:
        "Дизайн и структура создаются не только ради красоты, но и ради результата.",

      contact_label: "Связаться",

      contact_title: "Есть идея? Давайте начнём.",

      contact_description:
        "Расскажите нам немного о вашем бизнесе, и мы свяжемся с вами для обсуждения проекта.",

      contact_phone_label: "Позвонить",

      contact_whatsapp_label: "Написать в WhatsApp",

      form_title: "Напишите нам",

      form_name: "Имя",

      form_name_placeholder: "Ваше имя",

      form_phone: "Телефон",

      form_phone_placeholder: "+995 5XX XX XX XX",

      form_service: "Какой сайт вам нужен?",

      form_service_default: "Выберите",

      form_service_1: "Start — 500 ₾",

      form_service_2: "Business — 700 ₾",

      form_service_3: "Premium — 1000 ₾+",

      form_service_4: "Индивидуальный проект",

      form_message: "Краткое описание",

      form_message_placeholder:
        "Расскажите о вашем бизнесе и желаемом сайте...",

      form_submit: "Отправить в WhatsApp",

      form_note:
        "После отправки формы откроется WhatsApp с готовым сообщением.",

      form_success: "Сообщение подготовлено для отправки.",

      footer_text: "Современные сайты для современного бизнеса.",

      floating_whatsapp: "Написать",
    },

    /* =====================================
           ENGLISH
        ===================================== */

    en: {
      nav_services: "Services",

      nav_pricing: "Pricing",

      nav_process: "Process",

      nav_why: "Why Lendi",

      nav_contact: "Contact",

      nav_cta: "Order",

      hero_badge: "Websites for new and growing businesses",

      hero_title: "Your business deserves a good website.",

      hero_description:
        "We create modern, fast and responsive websites that present your business professionally and guide customers toward taking action.",

      hero_button: "Order a website",

      hero_whatsapp: "Message us on WhatsApp",

      hero_trust_1: "Modern design",

      hero_trust_2: "Mobile friendly",

      hero_trust_3: "Fast communication",

      visual_from: "Websites",

      visual_mobile: "On every device",

      services_label: "What we do",

      services_title: "Everything a good business website needs.",

      services_description:
        "From a simple idea to a complete website — everything in one place.",

      service_1_title: "Website design",

      service_1_text:
        "Modern and visually distinctive design that presents your brand professionally.",

      service_2_title: "Web development",

      service_2_text:
        "A fast and functional website that works across desktop, tablet and mobile.",

      service_3_title: "Business online presence",

      service_3_text:
        "A website that clearly tells customers who you are, what you do and how to contact you.",

      service_4_title: "Mobile optimization",

      service_4_text:
        "An interface designed for every screen size so your website looks great on any device.",

      pricing_label: "Pricing",

      pricing_title: "Choose the right package for your business.",

      pricing_description: "Transparent pricing without unexpected surprises.",

      price_1_name: "START",

      price_1_description: "A simple and modern website for a new business.",

      price_1_feature_1: "One-page website",

      price_1_feature_2: "Modern design",

      price_1_feature_3: "Mobile responsive",

      price_1_feature_4: "Contact form",

      price_2_name: "BUSINESS",

      price_2_description:
        "A complete business website with more possibilities.",

      price_2_feature_1: "Multi-section One Page",

      price_2_feature_2: "Unique design",

      price_2_feature_3: "Mobile optimization",

      price_2_feature_4: "Contact form",

      price_2_feature_5: "WhatsApp integration",

      price_3_name: "PREMIUM",

      price_3_description: "A custom solution for more complex projects.",

      price_3_feature_1: "Custom design",

      price_3_feature_2: "Advanced functionality",

      price_3_feature_3: "Custom structure",

      price_3_feature_4: "Integrations",

      price_3_feature_5: "Individual project estimate",

      popular: "Most popular",

      price_button: "Order",

      process_label: "Process",

      process_title: "From idea to launch — simply.",

      process_description:
        "No technical knowledge required. We guide you through the entire process step by step.",

      process_1_title: "We discuss the idea",

      process_1_text:
        "We learn about your business, goals and what kind of website you need.",

      process_2_title: "We create the design",

      process_2_text:
        "We build the visual structure and design around your business.",

      process_3_title: "We build the website",

      process_3_text:
        "We turn the design into a fast and fully functional website.",

      process_4_title: "We launch online",

      process_4_text:
        "After the final check, your website is ready for customers.",

      why_label: "Why Lendi",

      why_title: "A good website shouldn't only look beautiful.",

      why_description:
        "It should be fast, clear and guide users toward the right action.",

      why_button: "Start a project",

      why_1_title: "Modern visual",

      why_1_text: "Clean, modern and professional design.",

      why_2_title: "Fast communication",

      why_2_text: "Easy communication by phone and WhatsApp.",

      why_3_title: "Fully responsive",

      why_3_text:
        "The website works beautifully on phones, tablets and computers.",

      why_4_title: "Business focused",

      why_4_text:
        "Design and structure are created not only for looks, but for results.",

      contact_label: "Contact us",

      contact_title: "Have an idea? Let's start.",

      contact_description:
        "Tell us a little about your business and we'll contact you to discuss the project.",

      contact_phone_label: "Call us",

      contact_whatsapp_label: "Message on WhatsApp",

      form_title: "Send us a message",

      form_name: "Name",

      form_name_placeholder: "Your name",

      form_phone: "Phone",

      form_phone_placeholder: "+995 5XX XX XX XX",

      form_service: "What type of website do you need?",

      form_service_default: "Choose",

      form_service_1: "Start — 500 ₾",

      form_service_2: "Business — 700 ₾",

      form_service_3: "Premium — 1000 ₾+",

      form_service_4: "Custom project",

      form_message: "Short description",

      form_message_placeholder:
        "Tell us about your business and the website you want...",

      form_submit: "Send via WhatsApp",

      form_note:
        "After submitting, WhatsApp will open with your message prepared.",

      form_success: "Your message is ready to send.",

      footer_text: "Modern websites for modern businesses.",

      floating_whatsapp: "Message us",
    },
  };

  /* =========================================
       LANGUAGE FUNCTIONS
    ========================================= */

  function getSavedLanguage() {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    return "ka";
  }

  function translatePage(language) {
    const dictionary = translations[language];

    if (!dictionary) {
      return;
    }

    /* ---------- Text ---------- */

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    /* ---------- Placeholders ---------- */

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }
    });

    /* ---------- HTML lang ---------- */

    document.documentElement.lang = language;

    /* ---------- Language button ---------- */

    const languageLabels = {
      ka: "GE",
      ru: "RU",
      en: "EN",
    };

    currentLanguage.textContent = languageLabels[language];

    /* ---------- Save ---------- */

    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    /* ---------- Close menu ---------- */

    languageSwitcher.classList.remove("open");
  }

  /* =========================================
       INITIAL LANGUAGE
    ========================================= */

  const initialLanguage = getSavedLanguage();

  translatePage(initialLanguage);

  /* =========================================
       LANGUAGE MENU
    ========================================= */

  languageButton.addEventListener("click", (event) => {
    event.stopPropagation();

    languageSwitcher.classList.toggle("open");
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const language = option.dataset.lang;

      translatePage(language);
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageSwitcher.contains(event.target)) {
      languageSwitcher.classList.remove("open");
    }
  });

  /* =========================================
       MOBILE MENU
    ========================================= */

  mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("active");

    mainNav.classList.toggle("open");

    document.body.classList.toggle("menu-open");
  });

  /* ---------- Close mobile menu ---------- */

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuButton.classList.remove("active");

      mainNav.classList.remove("open");

      document.body.classList.remove("menu-open");
    });
  });

  /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  handleHeaderScroll();

  /* =========================================
       CONTACT FORM → WHATSAPP
    ========================================= */

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
      contactForm.reportValidity();

      return;
    }

    /* ---------- Service label ---------- */

    const serviceElement = document.getElementById("service");

    const serviceText =
      serviceElement.options[serviceElement.selectedIndex].textContent.trim();

    /* ---------- WhatsApp message ---------- */

    const whatsappMessage =
      `გამარჯობა, მინდა ვებსაიტის შეკვეთა.%0A%0A` +
      `სახელი: ${encodeURIComponent(name)}%0A` +
      `ტელეფონი: ${encodeURIComponent(phone)}%0A` +
      `პაკეტი: ${encodeURIComponent(serviceText)}%0A%0A` +
      `შეტყობინება:%0A${encodeURIComponent(message)}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    /* ---------- Success state ---------- */

    formSuccess.classList.add("show");

    /* ---------- Open WhatsApp ---------- */

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    /* ---------- Reset ---------- */

    setTimeout(() => {
      contactForm.reset();

      formSuccess.classList.remove("show");
    }, 1800);
  });

  /* =========================================
       CURRENT YEAR
    ========================================= */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =========================================
       SMOOTH SCROLL
    ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* =========================================
       SCROLL REVEAL
    ========================================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .process-item, .why-feature, .contact-wrapper",
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  /* =========================================
       CLOSE LANGUAGE / MOBILE MENU
       WITH ESCAPE
    ========================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    languageSwitcher.classList.remove("open");

    mobileMenuButton.classList.remove("active");

    mainNav.classList.remove("open");

    document.body.classList.remove("menu-open");
  });

  /* =========================================
       PHONE NUMBER — CLEAN INPUT
    ========================================= */

  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/[^\d+\s()-]/g, "");
    });
  }

  /* =========================================
       DONE
    ========================================= */

  console.log("Lendi.ge website initialized successfully.");
});
