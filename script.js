// Данные для наполнения
const semesters = [
    { id: 1, title: "1 Семестр", subjects: [
        {name: "Дискретная математика", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Дискретная%20математика%20для%20программистов"},
        {name: "Информатика", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Информатика"},
        {name: "Основы комп. алгебры", link: "#"},
        {name: "Лин. алгебра и теория матриц", link: "#"},
        {name: "ИТ в математике", link: "#"},
        {name: "ИТ в физике", link: "#"},
        {name: "Физика", link: "#"},
        {name: "Философия", link: "#"},
        {name: "БЖД", link: "#"}
    ]},
    { id: 2, title: "2 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Математический анализ", link: "#"},
        {name: "Теория вероятностей и комб.", link: "#"},
        {name: "Информационные технологии", link: "#"}
    ]},
    { id: 3, title: "3 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Веб-проектирование", link: "#"},
        {name: "Анализ данных и Data Science", link: "#"},
        {name: "Вычислительная математика", link: "#"},
        {name: "Пакеты прикладных программ", link: "#"}
    ]},
    { id: 4, title: "4 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Базы данных", link: "#"},
        {name: "Операционные системы", link: "#"},
        {name: "СВТ", link: "#"},
        {name: "Вычислительная техника", link: "#"},
        {name: "Анализ данных и Data Science", link: "#"},
        {name: "Компьютерный практикум", link: "#"},
        {name: "Технологии комп. моделирования", link: "#"},
        {name: "Интегралы и дифф. уравнения", link: "#"},
        {name: "Английский язык", link: "#"}
    ]},
    { id: 5, title: "5 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Сети и телекоммуникации", link: "#"},
        {name: "Компьютерная графика", link: "#"},
        {name: "Мат. основы комп. графики", link: "#"},
        {name: "It-Менеджмент", link: "#"},
        {name: "Основы бизнес-информатики", link: "#"},
        {name: "Технологии публ. информации", link: "#"},
        {name: "Подготовка тех. документации", link: "#"},
        {name: "Пакеты прикладных программ", link: "#"},
        {name: "ИТ в изучении ин. языков", link: "#"}
    ]},
    { id: 6, title: "6 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Основы машинного обучения", link: "#"},
        {name: "Мат. основы глубокого обучения", link: "#"},
        {name: "Защита информации", link: "#"},
        {name: "Техники визуализации данных", link: "#"},
        {name: "ИТ и С бизнес-аналитики", link: "#"},
        {name: "Инженерная графика", link: "#"},
        {name: "Прикладные ИТ", link: "#"},
        {name: "Корпоративное эл. обучение", link: "#"},
        {name: "Основы эл. управления", link: "#"},
        {name: "Английский язык", link: "#"}
    ]},
    { id: 7, title: "7 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Управление прогр. проектами", link: "#"},
        {name: "Английский язык", link: "#"}
    ]},
    { id: 8, title: "8 Семестр", subjects: [
        {name: "Дипломное проектирование", link: "#"}
    ]}
];

const internships = [
    { title: "Учебная (эксплуатационная)", link: "#" },
    { title: "Учебная (технологическая)", link: "#" },
    { title: "Производственная (технологическая)", link: "#" },
    { title: "Производственная (НИР)", link: "#" },
    { title: "Производственная (преддипломная)", link: "#" }
];

const courseWorks = [
    { title: "Курсовая работа 1", subject: "Дискретная математика", link: "#" },
    { title: "Курсовая работа 2", subject: "ООП", link: "#" },
    { title: "Курсовая работа 3", subject: "Базы данных", link: "#" },
    { title: "Курсовая работа 4", subject: "Веб-разработка", link: "#" }
];

const vkr = {
    title: "ВКР (Диплом)",
    topic: "Разработка веб-портфолио студента с использованием современных фронтенд технологий",
    link: "#"
};

const contentDiv = document.getElementById('content');

// Шаблоны страниц
const pages = {
    home: `
        <section class="hero">
            <h1>Имя Фамилия</h1>
            <p>Студент-разработчик. Добро пожаловать в моё цифровое портфолио, где собраны все мои достижения за время обучения.</p>
        </section>
    `,
    contacts: `
        <section class="hero">
            <h2>Связаться со мной</h2>
            <div class="grid">
                <a href="#" class="card"><h3>Telegram</h3><p>@your_username</p></a>
                <a href="mailto:email@example.com" class="card"><h3>Email</h3><p>email@example.com</p></a>
                <a href="#" class="card"><h3>GitHub</h3><p>github.com/yourprofile</p></a>
            </div>
        </section>
    `,
    portfolio: `
        <h2 style="text-align:center">Мои работы</h2>
        
        <h3 class="section-subtitle">🎓 Выпускная квалификационная работа</h3>
        <div id="vkr-container"></div>

        <h3 class="section-subtitle">📑 Курсовые работы</h3>
        <div class="grid" id="cw-grid"></div>

        <h3 class="section-subtitle">🛠️ Практики</h3>
        <div class="grid" id="intern-grid"></div>

        <h3 class="section-subtitle">📚 Семестры</h3>
        <div class="grid" id="sem-grid"></div>
    `
};

// Функция навигации
function navigate(pageId) {
    contentDiv.innerHTML = pages[pageId];
    if (pageId === 'portfolio') renderPortfolio();
    
    // Анимация карточек
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => card.style.animationDelay = `${i * 0.05}s`);
}

function renderPortfolio() {
    // ВКР
    document.getElementById('vkr-container').innerHTML = `
        <a href="${vkr.link}" target="_blank" class="card" style="border: 2px solid var(--primary)">
            <h3>${vkr.title}</h3>
            <p>${vkr.topic}</p>
        </a>
    `;
    // Курсовые
    courseWorks.forEach(cw => {
        document.getElementById('cw-grid').innerHTML += `
            <a href="${cw.link}" target="_blank" class="card"><h3>${cw.title}</h3><p>${cw.subject}</p></a>
        `;
    });
    // Практики
    internships.forEach(int => {
        document.getElementById('intern-grid').innerHTML += `
            <a href="${int.link}" target="_blank" class="card"><h3>${int.title}</h3><p>Отчёт и материалы ↗</p></a>
        `;
    });
    // Семестры
    semesters.forEach(sem => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.cursor = 'pointer';
        div.innerHTML = `<h3>${sem.title}</h3><p>Дисциплины семестра</p>`;
        div.onclick = () => showSubjects(sem);
        document.getElementById('sem-grid').appendChild(div);
    });
}

function showSubjects(sem) {
    contentDiv.innerHTML = `
        <button class="btn-back" onclick="navigate('portfolio')">← Назад к портфолио</button>
        <h2>${sem.title}</h2>
        <div class="grid">
            ${sem.subjects.map(s => `
                <a href="${s.link}" target="_blank" class="card">
                    <h3>${s.name}</h3>
                    <p>Посмотреть проект на GitHub ↗</p>
                </a>
            `).join('')}
        </div>
    `;
}

// Переключатель темы
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

// Инициализация меню
document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        navigate(e.target.dataset.page);
    };
});

// Запуск главной
navigate('home');