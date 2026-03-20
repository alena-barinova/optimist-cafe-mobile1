// Internationalization (i18n) System with SEO optimization
let translations = {};
let currentLang = localStorage.getItem('language') || 'en'; // Default to English

// Load translations
async function loadTranslations() {
    try {
        // Try relative path first (works with file:// protocol)
        let response = await fetch('./data/translations.json');
        if (!response.ok) {
            // Fallback to absolute path
            response = await fetch('/data/translations.json');
        }
        translations = await response.json();
        return true;
    } catch (error) {
        console.error('Error loading translations:', error);
        return false;
    }
}

// Change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute for SEO
    document.documentElement.lang = lang;

    // Update all translatable elements
    updatePageContent();

    // Update meta tags for SEO
    updateMetaTags(lang);

    // Update active language button
    updateLanguageButtons();

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Update all page content
function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Get nested translation by key (e.g., "nav.home")
function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

// Update meta tags for SEO
function updateMetaTags(lang) {
    // Update title
    const titleMap = {
        'vi': 'Optimist Cafe - Nhà Hàng & Cà Phê Nha Trang | Ẩm Thực Việt-Pháp',
        'en': 'Optimist Cafe - Nha Trang Restaurant & Coffee | Vietnamese-French Cuisine',
        'fr': 'Optimist Cafe - Restaurant & Café Nha Trang | Cuisine Vietnamienne-Française',
        'ru': 'Optimist Cafe - Ресторан и Кофейня в Нячанге | Вьетнамско-Французская Кухня',
        'ko': 'Optimist Cafe - 나트랑 레스토랑 & 커피 | 베트남-프랑스 요리',
        'zh': 'Optimist Cafe - 芽庄餐厅与咖啡 | 越南-法国美食'
    };
    document.title = titleMap[lang] || titleMap['vi'];

    // Update description
    const descriptionMap = {
        'vi': 'Optimist Cafe - Nhà hàng cao cấp tại Nha Trang với ẩm thực Việt-Pháp đặc sắc. Đánh giá 4.7⭐ từ 742 khách hàng. Đặt bàn ngay!',
        'en': 'Optimist Cafe - Premium restaurant in Nha Trang serving exquisite Vietnamese-French cuisine. Rated 4.7⭐ by 742 customers. Book now!',
        'fr': 'Optimist Cafe - Restaurant premium à Nha Trang proposant une cuisine vietnamienne-française raffinée. Noté 4.7⭐ par 742 clients. Réservez maintenant!',
        'ru': 'Optimist Cafe - Премиум ресторан в Нячанге с изысканной вьетнамско-французской кухней. Оценка 4.7⭐ от 742 клиентов. Бронируйте сейчас!',
        'ko': 'Optimist Cafe - 정교한 베트남-프랑스 요리를 제공하는 나트랑 프리미엄 레스토랑. 742명의 고객이 4.7⭐ 평가. 지금 예약하세요!',
        'zh': 'Optimist Cafe - 芽庄高级餐厅，提供精致的越南-法国美食。742位顾客评分4.7⭐。立即预订！'
    };

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = descriptionMap[lang] || descriptionMap['vi'];

    // Update keywords
    const keywordsMap = {
        'vi': 'nhà hàng Nha Trang, cà phê Nha Trang, ẩm thực Việt Pháp, đặt bàn nhà hàng, Optimist Cafe, nhà hàng cao cấp',
        'en': 'Nha Trang restaurant, Nha Trang coffee, Vietnamese French cuisine, restaurant booking, Optimist Cafe, premium dining',
        'fr': 'restaurant Nha Trang, café Nha Trang, cuisine vietnamienne française, réservation restaurant, Optimist Cafe, gastronomie',
        'ru': 'ресторан Нячанг, кофейня Нячанг, вьетнамская французская кухня, бронирование ресторана, Optimist Cafe, премиум питание',
        'ko': '나트랑 레스토랑, 나트랑 커피, 베트남 프랑스 요리, 레스토랑 예약, Optimist Cafe, 프리미엄 다이닝',
        'zh': '芽庄餐厅, 芽庄咖啡, 越南法国美食, 餐厅预订, Optimist Cafe, 高级餐饮'
    };

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywordsMap[lang] || keywordsMap['vi'];

    // Update Open Graph tags
    updateOGTag('og:title', titleMap[lang]);
    updateOGTag('og:description', descriptionMap[lang]);

    const localeMap = {
        'vi': 'vi_VN',
        'en': 'en_US',
        'fr': 'fr_FR',
        'ru': 'ru_RU',
        'ko': 'ko_KR',
        'zh': 'zh_CN'
    };
    updateOGTag('og:locale', localeMap[lang] || 'vi_VN');
}

// Update or create Open Graph meta tag
function updateOGTag(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

// Update language button states
function updateLanguageButtons() {
    // Update all language buttons (menu, fixed, and dropdown)
    document.querySelectorAll('.lang-btn, .lang-btn-fixed, .lang-dropdown-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Initialize i18n system
async function initI18n() {
    const loaded = await loadTranslations();
    if (loaded) {
        changeLanguage(currentLang);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
