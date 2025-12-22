const semesters = [
    { id: 1, title: "1 Семестр", subjects: [
        {name: "Дискретная математика", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Дискретная%20математика%20для%20программистов"},
        {name: "Информатика", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Информатика"},
        {name: "Основы комп. алгебры", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Основы%20компьютерной%20алгебры"},
        {name: "Лин. алгебра и теория матриц", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Линейная%20алгебра%20и%20теория%20матриц"},
        {name: "ИТ в математике", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Информационные%20технологии%20в%20математике"},
        {name: "ИТ в физике", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Информационные%20технологии%20в%20физике"},
        {name: "Физика", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Физика"},
        {name: "Философия", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Философия"},
        {name: "БЖД", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Безопасность%20жизнедеятельности"}
    ]},
    { id: 2, title: "2 Семестр", subjects: [
        {name: "Программирование", link: "https://github.com/mugshooter/repository/tree/main/2%20SEM/Программирование%202%20SEM"},
        {name: "Математический анализ", link: "https://github.com/mugshooter/repository/tree/main/2%20SEM/Математический%20анализ"},
        {name: "Теория вероятностей и комб.", link: "https://github.com/mugshooter/repository/tree/main/2%20SEM/Теория%20вероятностей%20и%20комбинаторика"},
        {name: "Информационные технологии", link: "https://github.com/mugshooter/repository/tree/main/2%20SEM/Информационные%20технологии"}
    ]},
    { id: 3, title: "3 Семестр", subjects: [
        {name: "Программирование", link: "https://github.com/mugshooter/repository/tree/main/3%20SEM/Программирование%203%20SEM"},
        {name: "Веб-проектирование", link: "https://github.com/mugshooter/repository/tree/main/3%20SEM/Веб-проектирование"},
        {name: "Анализ данных и Data Science", link: "https://github.com/mugshooter/repository/tree/main/3%20SEM/Анализ%20данных%20и%20основы%20Data%20science"},
        {name: "Вычислительная математика", link: "https://github.com/mugshooter/repository/tree/main/3%20SEM/Вычислительная%20математика"},
        {name: "Пакеты прикладных программ", link: "https://github.com/mugshooter/repository/tree/main/3%20SEM/Пакеты%20прикладных%20программ"}
    ]},
    { id: 4, title: "4 Семестр", subjects: [
        {name: "Программирование", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/программированиие%204%20SEM"},
        {name: "Базы данных", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Базы%20данных"},
        {name: "Операционные системы", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Операционные%20системы"},
        {name: "СВТ", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/СВТ"},
        {name: "Вычислительная техника", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Вычислительная%20техника"},
        {name: "Анализ данных и Data Science", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Анализ%20данных%20и%20основы%20Data%20science"},
        {name: "Компьютерный практикум", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Компьютерный%20практикум"},
        {name: "Технологии комп. моделирования", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Технологии%20компьютерного%20моделирования"},
        {name: "Интегралы и дифф. уравнения", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Интегралы%20и%20дифференциальные%20уравнения"},
        {name: "Английский язык", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Английский%204%20SEM"}
    ]},
    { id: 5, title: "5 Семестр", subjects: [
        {name: "Программирование", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Программирование%205%20SEM"},
        {name: "Сети и телекоммуникации", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Сети%20и%20телекоммуникации"},
        {name: "Компьютерная графика", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Компьютерная%20графика"},
        {name: "Мат. основы комп. графики", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Математические%20основы%20компьютерной%20графики"},
        {name: "It-Менеджмент", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/It-%20Менеджмент"},
        {name: "Основы бизнес-информатики", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Основы%20бизнес-информатики"},
        {name: "Технологии публ. информации", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Техника%20и%20технологии%20представления%20и%20публикации%20информации"},
        {name: "Подготовка тех. документации", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Системы%20и%20технологии%20подготовки%20технической%20и%20издательской%20документации"},
        {name: "Пакеты прикладных программ", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Пакеты%20прикладных%20программ"},
        {name: "ИТ в изучении ин. языков", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Информационные%20технологии%20в%20изучении%20иностранных%20языков"}
    ]},
    { id: 6, title: "6 Семестр", subjects: [
        {name: "Программирование", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Программирование%206%20SEM"},
        {name: "Основы машинного обучения", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Основы%20машинного%20обучения"},
        {name: "Мат. основы глубокого обучения", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Математические%20основы%20глубокого%20обучения"},
        {name: "Защита информации", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Защита%20информации"},
        {name: "Техники визуализации данных", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Техники%20и%20технологии%20визуализации%20данных"},
        {name: "ИТ и С бизнес-аналитики", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/ИТ%20и%20С%20бизнес-аналитики"},
        {name: "Инженерная графика", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Инженерная%20графика"},
        {name: "Прикладные ИТ", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Прикладные%20информационные%20технологии"},
        {name: "Корпоративное эл. обучение", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Основы%20корпоративного%20электронного%20обучения"},
        {name: "Основы эл. управления", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Основы%20электронного%20управления"},
        {name: "Английский язык", link: "https://github.com/mugshooter/repository/tree/main/6%20SEM/Английский%206%20SEM"}
    ]},
    { id: 7, title: "7 Семестр", subjects: [
        {name: "Программирование", link: "#"},
        {name: "Управление прогр. проектами", link: "https://github.com/mugshooter/repository/tree/main/7%20SEM/Управление%20программными%20проектами"},
        {name: "Английский язык", link: "https://github.com/mugshooter/repository/tree/main/7%20SEM/Английский%207%20SEM"}
    ]},
    { id: 8, title: "8 Семестр", subjects: [
        {name: "Дипломное проектирование", link: "#"}
    ]}
];

const internships = [
    { title: "Учебная (эксплуатационная)", link: "https://github.com/mugshooter/repository/tree/main/Практика%201%20курс" },
    { title: "Учебная (технологическая)", link: "https://github.com/mugshooter/repository/tree/main/Практика%202%20курс" },
    { title: "Производственная (технологическая)", link: "https://github.com/mugshooter/repository/tree/main/Практика%203%20курс" },
    { title: "Производственная (НИР)", link: "#" },
    { title: "Производственная (преддипломная)", link: "#" }
];

const courseWorks = [
    { title: "Курсовая работа 1", subject: "ИТ в физике", link: "https://github.com/mugshooter/repository/tree/main/1%20SEM/Информационные%20технологии%20в%20физике/Курсовая(%201%20курс)" },
    { title: "Курсовая работа 2", subject: "Технологии комп. моделирования", link: "https://github.com/mugshooter/repository/tree/main/4%20SEM/Технологии%20компьютерного%20моделирования/Курсовая" },
    { title: "Курсовая работа 3", subject: "Пакеты прикладных программ", link: "https://github.com/mugshooter/repository/tree/main/5%20SEM/Пакеты%20прикладных%20программ/Курсовая" },
    { title: "Курсовая работа 4", subject: "В разработке", link: "#" }
];

const vkr = {
    title: "ВКР (Диплом)",
    topic: "Разработка AI-сервиса техподдержки",
    link: "#"
};

const contentDiv = document.getElementById('content');

const pages = {
    home: `
        <section class="hero">
            <i class="fa-regular fa-eye main-icon" style="font-size: 5rem; color: var(--primary); margin-bottom: 20px; display: inline-block;"></i>
            <h1>Гневнов Артем</h1>
            <h3>Студент ИВТ РГПУ им. И.А. Герцена</h3>
            <p>В этом портфолио представлены мои работы и проекты, реализованные в ходе обучения.</p>
        </section>
    `,
    contacts: `
        <section class="hero">
            <h2>Контакты</h2>
            <div class="grid">
                <a href="https://t.me/mugshooter" target="_blank" class="card">
                    <i class="fab fa-telegram" style="color: #229ED9;"></i>
                    <h3>Telegram</h3><p>@mugshooter ↗</p>
                </a>
                <a href="https://github.com/mugshooter" target="_blank" class="card">
                    <i class="fab fa-github"></i>
                    <h3>GitHub</h3><p>mugshooter ↗</p>
                </a>
                <a href="mailto:gnevnov2016@gmail.com" class="card">
                    <i class="fas fa-envelope" style="color: #ea4335;"></i>
                    <h3>Email</h3><p>Написать письмо ↗</p>
                </a>
            </div>
        </section>
    `,
    portfolio: `
        <h2 style="text-align:center">Портфолио</h2>
        <h3 class="section-subtitle">🎓 Дипломная работа</h3>
        <div id="vkr-container"></div>
        <h3 class="section-subtitle">📑 Курсовые работы</h3>
        <div class="grid" id="cw-grid"></div>
        <h3 class="section-subtitle">🛠️ Практики</h3>
        <div class="grid" id="intern-grid"></div>
        <h3 class="section-subtitle">📚 Семестры</h3>
        <div class="grid" id="sem-grid"></div>
    `
};

function navigate(pageId, updateHistory = true, extra = null) {
    contentDiv.innerHTML = pages[pageId] || pages['home'];
    
    if (pageId === 'portfolio') {
        renderPortfolio();
        if (extra) {
            const sem = semesters.find(s => s.id == extra);
            if (sem) showSubjects(sem, false); 
        }
    }
    
    if (updateHistory) {
        const url = new URL(window.location);
        url.searchParams.set('page', pageId);
        if (extra) url.searchParams.set('sem', extra);
        else url.searchParams.delete('sem');
        
        window.history.pushState({ pageId, semId: extra }, '', url);
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => card.style.animationDelay = `${i * 0.05}s`);
}

function renderPortfolio() {
    document.getElementById('vkr-container').innerHTML = `
        <a href="${vkr.link}" target="_blank" class="card" style="border: 2px solid var(--primary)">
            <h3>${vkr.title}</h3><p>${vkr.topic}</p>
        </a>
    `;
    courseWorks.forEach(cw => {
        document.getElementById('cw-grid').innerHTML += `<a href="${cw.link}" target="_blank" class="card"><h3>${cw.title}</h3><p>${cw.subject}</p></a>`;
    });
    internships.forEach(int => {
        document.getElementById('intern-grid').innerHTML += `<a href="${int.link}" target="_blank" class="card"><h3>${int.title}</h3><p>Материалы ↗</p></a>`;
    });
    semesters.forEach(sem => {
        const div = document.createElement('div');
        div.className = 'card'; div.style.cursor = 'pointer';
        div.innerHTML = `<h3>${sem.title}</h3><p>Дисциплины</p>`;
        div.onclick = () => showSubjects(sem);
        document.getElementById('sem-grid').appendChild(div);
    });
}

function showSubjects(sem, updateHistory = true) {
    if (updateHistory) {
        navigate('portfolio', true, sem.id);
        return;
    }

    contentDiv.innerHTML = `
        <button class="btn-back" onclick="navigate('portfolio')"><i class="fas fa-arrow-left"></i> Назад</button>
        <h2>${sem.title}</h2>
        <div class="grid">${sem.subjects.map(s => `
            <a href="${s.link}" target="_blank" class="card">
                <h3>${s.name}</h3>
                <p>GitHub Repo ↗</p>
            </a>`).join('')}
        </div>
    `;
}

window.addEventListener('popstate', (event) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'home';
    const sem = params.get('sem');
    navigate(page, false, sem);
});

document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.onclick = (e) => { e.preventDefault(); navigate(e.target.dataset.page); };
});

const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

const urlParams = new URLSearchParams(window.location.search);
const initialPage = urlParams.get('page') || 'home';
const initialSem = urlParams.get('sem');
navigate(initialPage, false, initialSem);

const burger = document.getElementById('burger');
const navContainer = document.getElementById('nav-container');
const navLinks = document.querySelectorAll('.nav-links a');

// Открыть/закрыть по клику на бургер
burger.onclick = () => {
    navContainer.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-bars');
    burger.querySelector('i').classList.toggle('fa-times'); // Меняем полоски на крестик
};

// Закрыть меню при клике на любую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
        burger.querySelector('i').classList.add('fa-bars');
        burger.querySelector('i').classList.remove('fa-times');
    });
});