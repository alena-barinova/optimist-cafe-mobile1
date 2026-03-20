/**
 * Optimist Cafe - Vue.js Application
 * Improved version with modern JavaScript practices
 */

// Wait for DOM and Vue to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if Vue is loaded
    if (typeof Vue === 'undefined') {
        console.error('Vue.js failed to load');
        document.querySelector('#app').innerHTML = '<div class="alert alert-danger m-5">Failed to load application. Please refresh the page.</div>';
        return;
    }

    const { createApp } = Vue;

    // Translations
    const translations = {
        en: {
            login: 'Login',
            today: 'Today',
            closed: 'Closed',
            totalVisits: 'Total Visits',
            seriesProgress: 'Series Progress',
            freeCoffee: 'Free Coffee!',
            listView: 'List',
            gridView: 'Grid',
            showMore: 'Show More',
            vegetarian: 'Vegetarian',
            qrCodes: 'QR Codes',
            yourVisitQR: 'Your Visit QR Code',
            showQRToStaff: 'Show this QR code to staff to get points',
            points: 'points',
            generateNew: 'Generate New',
            qrCodeExpires: 'QR code expires',
            scanQR: 'Scan QR Code',
            scanToEarnPoints: 'Scan customer QR code to award points',
            openScanner: 'Open Scanner',
            recentScans: 'Recent scans',
            pointsHistory: 'Points History',
            date: 'Date',
            action: 'Action',
            balance: 'Balance',
            scanQRCode: 'Scan QR Code',
            pointCamera: 'Point camera at QR code',
            close: 'Close',
            visitScanned: 'Visit scanned successfully',
            pointsAdded: 'points added',
            invalidQR: 'Invalid QR code',
            qrAlreadyUsed: 'QR code already used',
            visit: 'Visit'
        },
        ru: {
            login: 'Войти',
            today: 'Сегодня',
            closed: 'Выходной',
            totalVisits: 'Всего посещений',
            seriesProgress: 'Прогресс серии',
            freeCoffee: 'Любой кофе бесплатно!',
            listView: 'Список',
            gridView: 'Плитки',
            showMore: 'Показать ещё',
            vegetarian: 'Вегетарианское',
            qrCodes: 'QR Коды',
            yourVisitQR: 'Ваш QR код посещения',
            showQRToStaff: 'Покажите этот QR код персоналу для получения баллов',
            points: 'баллов',
            generateNew: 'Создать новый',
            qrCodeExpires: 'QR код истекает',
            scanQR: 'Сканировать QR код',
            scanToEarnPoints: 'Отсканируйте QR код клиента для начисления баллов',
            openScanner: 'Открыть сканер',
            recentScans: 'Недавние сканирования',
            pointsHistory: 'История баллов',
            date: 'Дата',
            action: 'Действие',
            balance: 'Баланс',
            scanQRCode: 'Сканировать QR код',
            pointCamera: 'Наведите камеру на QR код',
            close: 'Закрыть',
            visitScanned: 'Посещение отсканировано успешно',
            pointsAdded: 'баллов добавлено',
            invalidQR: 'Неверный QR код',
            qrAlreadyUsed: 'QR код уже использован',
            visit: 'Посещение'
        },
        vn: {
            login: 'Đăng nhập',
            today: 'Hôm nay',
            closed: 'Đóng cửa',
            totalVisits: 'Tổng lượt viếng thăm',
            seriesProgress: 'Tiến trình chuỗi',
            freeCoffee: 'Cà phê miễn phí!',
            listView: 'Danh sách',
            gridView: 'Lưới',
            showMore: 'Hiển thị thêm',
            vegetarian: 'Chay',
            qrCodes: 'Mã QR',
            yourVisitQR: 'Mã QR của bạn',
            showQRToStaff: 'Hiển thị mã QR này cho nhân viên để nhận điểm',
            points: 'điểm',
            generateNew: 'Tạo mới',
            qrCodeExpires: 'Mã QR hết hạn',
            scanQR: 'Quét mã QR',
            scanToEarnPoints: 'Quét mã QR của khách để tặng điểm',
            openScanner: 'Mở máy quét',
            recentScans: 'Quét gần đây',
            pointsHistory: 'Lịch sử điểm',
            date: 'Ngày',
            action: 'Hành động',
            balance: 'Số dư',
            scanQRCode: 'Quét mã QR',
            pointCamera: 'Hướng máy ảnh vào mã QR',
            close: 'Đóng',
            visitScanned: 'Quét thành công',
            pointsAdded: 'điểm đã thêm',
            invalidQR: 'Mã QR không hợp lệ',
            qrAlreadyUsed: 'Mã QR đã được sử dụng',
            visit: 'Ghé thăm'
        },
        kr: {
            login: '로그인',
            today: '오늘',
            closed: '휴무',
            totalVisits: '총 방문 횟수',
            seriesProgress: '시리즈 진행률',
            freeCoffee: '무료 커피!',
            listView: '목록',
            gridView: '그리드',
            showMore: '더 보기',
            vegetarian: '채식주의자',
            qrCodes: 'QR 코드',
            yourVisitQR: '방문 QR 코드',
            showQRToStaff: '포인트를 받으려면 직원에게 이 QR 코드를 보여주세요',
            points: '포인트',
            generateNew: '새로 생성',
            qrCodeExpires: 'QR 코드 만료',
            scanQR: 'QR 코드 스캔',
            scanToEarnPoints: '고객 QR 코드를 스캔하여 포인트 부여',
            openScanner: '스캐너 열기',
            recentScans: '최근 스캔',
            pointsHistory: '포인트 내역',
            date: '날짜',
            action: '작업',
            balance: '잔액',
            scanQRCode: 'QR 코드 스캔',
            pointCamera: '카메라를 QR 코드에 맞추세요',
            close: '닫기',
            visitScanned: '스캔 성공',
            pointsAdded: '포인트 추가됨',
            invalidQR: '유효하지 않은 QR 코드',
            qrAlreadyUsed: '이미 사용된 QR 코드',
            visit: '방문'
        }
    };

    // Menu Data
    const menuData = [
        {
            id: 'sandwiches',
            name: 'Сэндвичи',
            icon: 'egg-fried',
            expanded: false,
            items: [
                {
                    id: 's1',
                    name: 'Сэндвич с ветчиной и сыром, соусом песто и томатным мармеладом',
                    price: 89000,
                    image: 'https://imloyal.to/uploads/offers/offer-5d0d1a99-ba41-46d9-a818-1799f34cba70-5q8rrz-large.webp',
                    vegetarian: false
                },
                {
                    id: 's2',
                    name: 'Сэндвич с пастрами из буйволиного молока, маринованными огурцами и айоли',
                    price: 95000,
                    image: 'https://imloyal.to/uploads/offers/offer-c5225bff-762e-4a64-bd37-1b8caf3f6b38-zipfbj-large.webp',
                    vegetarian: false
                },
                {
                    id: 's3',
                    name: 'Сэндвич с курицей, запеченным болгарским перцем и медово-горчичным соусом',
                    price: 89000,
                    // This image will fail to load - we'll show placeholder
                    image: 'https://imloyal.to/uploads/offers/offer-482af592-36f1-462c-af83-3ba52b4a1060-zsx9srf-large.webp',
                    vegetarian: false
                },
                {
                    id: 's4',
                    name: 'Вегетарианский сэндвич с салатом латук, брокколи, гуакамоле и пастой из кешью',
                    price: 75000,
                    vegetarian: true
                },
                {
                    id: 's5',
                    name: 'Сэндвич с яичным салатом, капустным салатом и авокадо',
                    price: 80000,
                    vegetarian: true
                }
            ]
        },
        {
            id: 'breakfast',
            name: 'Breakfast',
            icon: 'sunrise',
            expanded: false,
            items: [
                {
                    id: 'b1',
                    name: 'Scrambled Eggs with Truffle Oil & Mango Shrimp Fusion',
                    price: 165000,
                    vegetarian: false
                },
                {
                    id: 'b2',
                    name: 'Scrambled Eggs with Avocado and Beetroot Hummus',
                    price: 145000,
                    vegetarian: true
                },
                {
                    id: 'b3',
                    name: 'Cacio e Pepe Omelette',
                    price: 130000,
                    vegetarian: true
                },
                {
                    id: 'b4',
                    name: 'Cacio e Pepe Omelette with Bacon',
                    price: 155000,
                    vegetarian: false
                },
                {
                    id: 'b5',
                    name: 'Cacio e Pepe Omelette with Salmon',
                    price: 165000,
                    vegetarian: false
                }
            ]
        },
        {
            id: 'crepes',
            name: 'Crepes',
            icon: 'circle',
            expanded: false,
            items: [
                {
                    id: 'c1',
                    name: 'Salmon Crepes with Coriander Sauce',
                    price: 125000,
                    vegetarian: false
                },
                {
                    id: 'c2',
                    name: 'Chicken Crepes with Dill Sauce',
                    price: 99000,
                    vegetarian: false
                },
                {
                    id: 'c3',
                    name: 'Banana Chocolate Crepes',
                    price: 75000,
                    vegetarian: true
                },
                {
                    id: 'c4',
                    name: 'Crepes Suzette with Mango Jam & Salted Caramel',
                    price: 85000,
                    vegetarian: true
                }
            ]
        },
        {
            id: 'lunch',
            name: 'Lunch',
            icon: 'brightness-high',
            expanded: false,
            items: [
                {
                    id: 'l1',
                    name: 'Roasted Buffalo Salad with Baked Bell Peppers & Tapenade',
                    price: 155000,
                    vegetarian: false
                },
                {
                    id: 'l2',
                    name: 'Chicken Salad with Cherry Tomatoes & Coriander Sauce',
                    price: 139000,
                    vegetarian: false
                },
                {
                    id: 'l3',
                    name: 'Green Salad with Avocado & Pumpkin Seeds',
                    price: 95000,
                    vegetarian: true
                },
                {
                    id: 'l4',
                    name: 'Salmon Brioche with Guacamole',
                    price: 135000,
                    vegetarian: false
                },
                {
                    id: 'l5',
                    name: 'Tomato Toast with Mozzarella and Cinnamon',
                    price: 95000,
                    vegetarian: true
                }
            ]
        },
        {
            id: 'dinner',
            name: 'Dinner',
            icon: 'moon-stars',
            expanded: false,
            items: [
                {
                    id: 'd1',
                    name: 'Mixed Olives with Italian Herbs',
                    price: 160000,
                    vegetarian: true
                },
                {
                    id: 'd2',
                    name: 'Black Pasta with Shrimps in Cream & Pesto Sauce',
                    price: 240000,
                    vegetarian: false
                },
                {
                    id: 'd3',
                    name: 'Pan-Seared Seabass with Thyme & Pumpkin Purée',
                    price: 250000,
                    vegetarian: false
                },
                {
                    id: 'd4',
                    name: 'Roasted Buffalo with Tonnato Sauce, Served with Fried Vegetables',
                    price: 210000,
                    vegetarian: false
                },
                {
                    id: 'd5',
                    name: 'Cauliflower Steak with Romanesco Sauce',
                    price: 120000,
                    vegetarian: true
                }
            ]
        },
        {
            id: 'desserts',
            name: 'Desserts',
            icon: 'cookie',
            expanded: false,
            items: [
                {
                    id: 'ds1',
                    name: 'Optimist Cinnamon Roll',
                    price: 70000,
                    vegetarian: true
                },
                {
                    id: 'ds2',
                    name: 'Peanut Cheesecake with Salted Caramel',
                    price: 85000,
                    vegetarian: true
                },
                {
                    id: 'ds3',
                    name: 'Mulberry Brioche with Cashew & Salted Caramel',
                    price: 85000,
                    vegetarian: true
                },
                {
                    id: 'ds4',
                    name: 'Lime Curd Pavlova',
                    price: 65000,
                    vegetarian: true
                },
                {
                    id: 'ds5',
                    name: 'Blueberry Confiture & Fresh Strawberry Pavlova',
                    price: 65000,
                    vegetarian: true
                }
            ]
        },
        {
            id: 'coffee',
            name: 'Coffee',
            icon: 'cup-hot',
            expanded: false,
            items: [
                { id: 'cf1', name: 'Espresso', price: 30000, vegetarian: true },
                { id: 'cf2', name: 'Espresso Romano', price: 35000, vegetarian: true },
                { id: 'cf3', name: 'Americano (Hot or Cold)', price: 45000, vegetarian: true },
                { id: 'cf4', name: 'Cappucino', price: 60000, vegetarian: true },
                { id: 'cf5', name: 'Latte (Hot or Cold)', price: 55000, vegetarian: true },
                { id: 'cf6', name: 'Flat White', price: 60000, vegetarian: true }
            ]
        },
        {
            id: 'tea',
            name: 'Tea (Hot & Iced)',
            icon: 'droplet',
            expanded: false,
            items: [
                { id: 't1', name: 'Hot Teapot (Black Tea / Green Tea / Hibiscus / Butterfly Pea / Herbal)', price: 90000, vegetarian: true },
                { id: 't2', name: 'Hot Cup (Black Tea / Green Tea / Hibiscus / Butterfly Pea / Herbal)', price: 45000, vegetarian: true },
                { id: 't3', name: 'Cherry Black Iced Tea', price: 55000, vegetarian: true },
                { id: 't4', name: 'Pea Flowers and Lime Iced Tea', price: 55000, vegetarian: true },
                { id: 't5', name: 'Hibiscus and Peach Iced Tea', price: 55000, vegetarian: true }
            ]
        },
        {
            id: 'fresh',
            name: 'Fresh Drinks',
            icon: 'cup-straw',
            expanded: false,
            items: [
                { id: 'f1', name: 'Classic Lemonade', price: 55000, vegetarian: true },
                { id: 'f2', name: 'Strawberry and Basil', price: 65000, vegetarian: true },
                { id: 'f3', name: 'Strawberry and Orange', price: 65000, vegetarian: true },
                { id: 'f4', name: 'Cucumber and Passion Fruit', price: 95000, vegetarian: true },
                { id: 'f5', name: 'Summer Lemonade (Jar)', price: 95000, vegetarian: true }
            ]
        },
        {
            id: 'soft',
            name: 'Soft Drinks',
            icon: 'moisture',
            expanded: false,
            items: [
                { id: 'sd1', name: 'Coca Cola (300 ml)', price: 25000, vegetarian: true },
                { id: 'sd2', name: 'Tonic (320 ml)', price: 20000, vegetarian: true },
                { id: 'sd3', name: 'Danh Thanh Sparkling Water (400 ml)', price: 15000, vegetarian: true }
            ]
        },
        {
            id: 'matcha',
            name: 'Matcha',
            icon: 'gem',
            expanded: false,
            items: [
                { id: 'm1', name: 'Matcha Latte', price: 60000, vegetarian: true },
                { id: 'm2', name: 'Strawberry Matcha Latte', price: 65000, vegetarian: true },
                { id: 'm3', name: 'Orange Matcha', price: 60000, vegetarian: true },
                { id: 'm4', name: 'Matcha Classic Lemonade', price: 60000, vegetarian: true }
            ]
        }
    ];

    // Tasks Data
    const tasksData = [
        {
            id: 'task1',
            title: 'Tell stories',
            description: 'Create a instagram story and send us a link',
            icon: 'instagram',
            points: 100
        },
        {
            id: 'task2',
            title: 'Rate us on Google Maps!',
            description: 'Create a review and send us screenshot!',
            icon: 'google',
            points: 100
        }
    ];

    // Create Vue App
    const app = createApp({
        data() {
            return {
                // App state
                loading: true,
                darkMode: false,
                currentLanguage: 'ru',
                menuView: 'list', // 'list' or 'grid'

                // Loyalty data
                visits: 0,
                seriesProgress: 0, // out of 7

                // QR Code functionality
                userPoints: 0,
                qrCode: null,
                qrExpireTime: '',
                showScanner: false,
                html5QrCode: null,
                lastScanResult: '',
                scanError: '',
                recentScans: [],
                pointsHistory: [],

                // Menu
                menuCategories: menuData,

                // Tasks
                tasks: tasksData,

                // Translations
                translations: translations
            };
        },

        mounted() {
            // Initialize app
            this.init();

            // Add image lazy loading
            this.setupLazyLoading();

            // Setup image error handling
            this.setupImageErrorHandling();

            // Setup scroll reveal animations
            this.setupScrollReveal();

            // Load QR data
            this.loadQRData();

            // Generate initial QR code after libraries load
            setTimeout(() => {
                this.generateNewQR();
            }, 1000);
        },

        methods: {
            /**
             * Initialize application
             */
            init() {
                console.log('Optimist Cafe App initializing...');

                // Load saved preferences
                this.loadPreferences();

                // Apply theme
                this.applyTheme();

                // Simulate data loading (in real app, this would be API call)
                setTimeout(() => {
                    this.loading = false;
                    console.log('App loaded successfully');
                }, 500);

                // Report ready to monitoring
                this.reportPageLoad();
            },

            /**
             * Load user preferences from localStorage
             */
            loadPreferences() {
                try {
                    const savedTheme = localStorage.getItem('theme');
                    const savedLanguage = localStorage.getItem('language');
                    const savedView = localStorage.getItem('menuView');

                    if (savedTheme) {
                        this.darkMode = savedTheme === 'dark';
                    }

                    if (savedLanguage) {
                        this.currentLanguage = savedLanguage;
                    }

                    if (savedView) {
                        this.menuView = savedView;
                    }
                } catch (error) {
                    console.error('Failed to load preferences:', error);
                }
            },

            /**
             * Save user preferences to localStorage
             */
            savePreferences() {
                try {
                    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
                    localStorage.setItem('language', this.currentLanguage);
                    localStorage.setItem('menuView', this.menuView);
                } catch (error) {
                    console.error('Failed to save preferences:', error);
                }
            },

            /**
             * Toggle dark mode
             */
            toggleTheme() {
                this.darkMode = !this.darkMode;
                this.applyTheme();
                this.savePreferences();
            },

            /**
             * Apply theme to document
             */
            applyTheme() {
                document.documentElement.setAttribute(
                    'data-theme',
                    this.darkMode ? 'dark' : 'light'
                );
            },

            /**
             * Translate text
             */
            t(key) {
                const lang = this.translations[this.currentLanguage];
                return lang && lang[key] ? lang[key] : key;
            },

            /**
             * Select menu item (for ordering, etc.)
             */
            selectMenuItem(item) {
                console.log('Selected menu item:', item);
                // In real app, this would open modal or add to cart
                alert(`Selected: ${item.name} - ${item.price.toLocaleString()} ₫`);
            },

            /**
             * Handle image loading error
             */
            handleImageError(event) {
                const img = event.target;
                console.warn('Image failed to load:', img.src);

                // Set placeholder
                img.src = this.getPlaceholderImage();
                img.setAttribute('data-error', 'true');

                // Report to monitoring
                this.reportImageError(img.src);
            },

            /**
             * Get placeholder image (SVG data URI)
             */
            getPlaceholderImage() {
                // Simple SVG placeholder
                return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
            },

            /**
             * Setup lazy loading for images
             */
            setupLazyLoading() {
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                img.classList.add('loaded');
                                observer.unobserve(img);
                            }
                        });
                    });

                    // Observe all lazy images
                    this.$nextTick(() => {
                        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                            imageObserver.observe(img);
                        });
                    });
                }
            },

            /**
             * Setup global image error handling
             */
            setupImageErrorHandling() {
                document.addEventListener('error', (e) => {
                    if (e.target.tagName === 'IMG') {
                        this.handleImageError(e);
                    }
                }, true);
            },

            /**
             * Setup scroll reveal animations for premium design
             */
            setupScrollReveal() {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                // Observe all elements with scroll-reveal class
                this.$nextTick(() => {
                    document.querySelectorAll('.scroll-reveal').forEach(element => {
                        revealObserver.observe(element);
                    });
                });
            },

            /**
             * Report page load to analytics
             */
            reportPageLoad() {
                // In real app, send to Google Analytics, Sentry, etc.
                console.log('Page loaded at:', new Date().toISOString());

                // Example: Send to Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_view', {
                        page_title: document.title,
                        page_location: window.location.href,
                        page_path: window.location.pathname
                    });
                }
            },

            /**
             * Report image error to monitoring
             */
            reportImageError(imageUrl) {
                // In real app, send to Sentry or similar
                console.error('Image 404:', imageUrl);

                // Example: Send to analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'exception', {
                        description: `Image 404: ${imageUrl}`,
                        fatal: false
                    });
                }
            },

            // ==================== QR CODE METHODS ====================

            /**
             * Generate new QR code for user visit
             */
            generateNewQR() {
                try {
                    // Clear old QR code
                    const qrContainer = document.getElementById('qrcode');
                    if (qrContainer) {
                        qrContainer.innerHTML = '';
                    }

                    // Generate unique visit ID
                    const visitId = this.generateVisitId();
                    const expireDate = new Date();
                    expireDate.setMinutes(expireDate.getMinutes() + 15); // QR expires in 15 minutes

                    // Create QR code data
                    const qrData = {
                        type: 'visit',
                        visitId: visitId,
                        userId: this.getUserId(),
                        timestamp: Date.now(),
                        expires: expireDate.getTime(),
                        points: 10 // Points per visit
                    };

                    // Generate QR code
                    if (typeof QRCode !== 'undefined' && qrContainer) {
                        new QRCode(qrContainer, {
                            text: JSON.stringify(qrData),
                            width: 200,
                            height: 200,
                            colorDark: this.darkMode ? '#ffffff' : '#000000',
                            colorLight: this.darkMode ? '#212529' : '#ffffff',
                            correctLevel: QRCode.CorrectLevel.H
                        });

                        // Update expire time display
                        this.qrExpireTime = expireDate.toLocaleTimeString(this.currentLanguage, {
                            hour: '2-digit',
                            minute: '2-digit'
                        });

                        // Save QR data
                        this.saveQRCode(qrData);

                        console.log('✅ QR code generated:', visitId);
                    } else {
                        console.error('QRCode library not loaded');
                    }
                } catch (error) {
                    console.error('Failed to generate QR code:', error);
                }
            },

            /**
             * Generate unique visit ID
             */
            generateVisitId() {
                return 'visit_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            },

            /**
             * Get or create user ID
             */
            getUserId() {
                let userId = localStorage.getItem('userId');
                if (!userId) {
                    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                    localStorage.setItem('userId', userId);
                }
                return userId;
            },

            /**
             * Save QR code data
             */
            saveQRCode(qrData) {
                try {
                    const qrCodes = JSON.parse(localStorage.getItem('qrCodes') || '[]');
                    qrCodes.push(qrData);
                    // Keep only last 10 QR codes
                    if (qrCodes.length > 10) {
                        qrCodes.shift();
                    }
                    localStorage.setItem('qrCodes', JSON.stringify(qrCodes));
                } catch (error) {
                    console.error('Failed to save QR code:', error);
                }
            },

            /**
             * Open QR code scanner
             */
            openScanner() {
                this.showScanner = true;
                this.scanError = '';

                // Wait for modal to render
                this.$nextTick(() => {
                    this.startScanner();
                });
            },

            /**
             * Close QR code scanner
             */
            closeScanner() {
                this.stopScanner();
                this.showScanner = false;
            },

            /**
             * Start QR code scanner
             */
            startScanner() {
                try {
                    if (typeof Html5Qrcode === 'undefined') {
                        this.scanError = 'QR Scanner library not loaded';
                        console.error('Html5Qrcode library not loaded');
                        return;
                    }

                    const html5QrCode = new Html5Qrcode("qr-reader");
                    this.html5QrCode = html5QrCode;

                    const config = {
                        fps: 10,
                        qrbox: { width: 250, height: 250 }
                    };

                    html5QrCode.start(
                        { facingMode: "environment" },
                        config,
                        (decodedText) => {
                            this.handleScan(decodedText);
                        },
                        (errorMessage) => {
                            // Silent scanning errors
                        }
                    ).catch(err => {
                        console.error('Failed to start scanner:', err);
                        this.scanError = 'Failed to access camera. Please allow camera permissions.';
                    });
                } catch (error) {
                    console.error('Scanner error:', error);
                    this.scanError = error.message;
                }
            },

            /**
             * Stop QR code scanner
             */
            stopScanner() {
                if (this.html5QrCode) {
                    this.html5QrCode.stop().then(() => {
                        this.html5QrCode = null;
                    }).catch(err => {
                        console.error('Failed to stop scanner:', err);
                    });
                }
            },

            /**
             * Handle QR code scan
             */
            handleScan(decodedText) {
                try {
                    const qrData = JSON.parse(decodedText);

                    // Validate QR code
                    if (!qrData.type || qrData.type !== 'visit') {
                        this.scanError = this.t('invalidQR');
                        return;
                    }

                    // Check if QR code is expired
                    if (qrData.expires && qrData.expires < Date.now()) {
                        this.scanError = this.t('qrAlreadyUsed');
                        return;
                    }

                    // Check if already scanned
                    if (this.isQRScanned(qrData.visitId)) {
                        this.scanError = this.t('qrAlreadyUsed');
                        return;
                    }

                    // Award points
                    this.awardPoints(qrData);

                    // Close scanner
                    this.closeScanner();

                } catch (error) {
                    console.error('Invalid QR code:', error);
                    this.scanError = this.t('invalidQR');
                }
            },

            /**
             * Check if QR code already scanned
             */
            isQRScanned(visitId) {
                try {
                    const scannedQRs = JSON.parse(localStorage.getItem('scannedQRs') || '[]');
                    return scannedQRs.includes(visitId);
                } catch (error) {
                    return false;
                }
            },

            /**
             * Award points to user
             */
            awardPoints(qrData) {
                try {
                    // Add points
                    const points = qrData.points || 10;
                    this.userPoints += points;
                    this.visits += 1;
                    this.seriesProgress = this.visits % 7;

                    // Save scanned QR
                    const scannedQRs = JSON.parse(localStorage.getItem('scannedQRs') || '[]');
                    scannedQRs.push(qrData.visitId);
                    localStorage.setItem('scannedQRs', JSON.stringify(scannedQRs));

                    // Add to recent scans
                    const scan = {
                        id: Date.now(),
                        date: new Date().toLocaleString(this.currentLanguage),
                        points: points
                    };
                    this.recentScans.unshift(scan);
                    if (this.recentScans.length > 5) {
                        this.recentScans.pop();
                    }

                    // Add to points history
                    this.addToPointsHistory(this.t('visit'), points);

                    // Save points
                    localStorage.setItem('userPoints', this.userPoints.toString());
                    localStorage.setItem('visits', this.visits.toString());

                    // Show success message
                    this.lastScanResult = `${this.t('visitScanned')}! +${points} ${this.t('pointsAdded')}`;

                    console.log(`✅ Points awarded: +${points}, Total: ${this.userPoints}`);
                } catch (error) {
                    console.error('Failed to award points:', error);
                }
            },

            /**
             * Add record to points history
             */
            addToPointsHistory(action, points) {
                const record = {
                    id: Date.now(),
                    date: new Date().toLocaleString(this.currentLanguage, {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    }),
                    action: action,
                    points: points,
                    balance: this.userPoints,
                    icon: points > 0 ? 'plus-circle' : 'dash-circle'
                };

                this.pointsHistory.unshift(record);

                // Keep only last 20 records
                if (this.pointsHistory.length > 20) {
                    this.pointsHistory.pop();
                }

                // Save to localStorage
                try {
                    localStorage.setItem('pointsHistory', JSON.stringify(this.pointsHistory));
                } catch (error) {
                    console.error('Failed to save points history:', error);
                }
            },

            /**
             * Load QR data from localStorage
             */
            loadQRData() {
                try {
                    // Load user points
                    const savedPoints = localStorage.getItem('userPoints');
                    if (savedPoints) {
                        this.userPoints = parseInt(savedPoints, 10);
                    }

                    // Load visits
                    const savedVisits = localStorage.getItem('visits');
                    if (savedVisits) {
                        this.visits = parseInt(savedVisits, 10);
                        this.seriesProgress = this.visits % 7;
                    }

                    // Load points history
                    const savedHistory = localStorage.getItem('pointsHistory');
                    if (savedHistory) {
                        this.pointsHistory = JSON.parse(savedHistory);
                    }

                    // Load recent scans
                    const scannedQRs = JSON.parse(localStorage.getItem('scannedQRs') || '[]');
                    this.recentScans = scannedQRs.slice(0, 5).map((id, index) => ({
                        id: index,
                        date: new Date().toLocaleDateString(this.currentLanguage),
                        points: 10
                    }));

                } catch (error) {
                    console.error('Failed to load QR data:', error);
                }
            }
        },

        watch: {
            /**
             * Watch language changes
             */
            currentLanguage(newLang) {
                console.log('Language changed to:', newLang);
                this.savePreferences();

                // Update document language
                document.documentElement.setAttribute('lang', newLang);
            },

            /**
             * Watch menu view changes
             */
            menuView(newView) {
                console.log('Menu view changed to:', newView);
                this.savePreferences();
            }
        }
    });

    // Mount the app
    app.mount('#app');

    console.log('✅ Optimist Cafe app mounted successfully');
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    // Measure page load time
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`📊 Page load time: ${loadTime}ms`);

        // Report to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'load',
                value: loadTime,
                event_category: 'Performance'
            });
        }
    }

    // Web Vitals (if available)
    if (typeof getCLS !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getLCP(console.log);
    }
});
