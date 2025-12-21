// База данных портфолио
const semesters = [
    { id: 1, title: "1 Семестр", subjects: [{name: "Информатика", link: "https://github.com/"}, {name: "Математика", link: "#"}] },
    { id: 2, title: "2 Семестр", subjects: [{name: "Программирование", link: "https://github.com/"}] },
    { id: 3, title: "3 Семестр", subjects: [{name: "Базы данных", link: "https://github.com/"}] },
    { id: 4, title: "4 Семестр", subjects: [{name: "Сети", link: "https://github.com/"}] },
    { id: 5, title: "5 Семестр", subjects: [{name: "Web-дизайн", link: "https://github.com/"}] },
    { id: 6, title: "6 Семестр", subjects: [{name: "Тестирование", link: "https://github.com/"}] },
    { id: 7, title: "7 Семестр", subjects: [{name: "Защита инфо", link: "https://github.com/"}] },
    { id: 8, title: "8 Семестр", subjects: [{name: "Дипломное проектирование", link: "https://github.com/"}] }
];

const internships = [
    { title: "Учебная практика", desc: "Основы верстки", link: "https://github.com/" },
    { title: "Производственная практика", desc: "Работа с JS", link: "https://github.com/" },
    { title: "Технологическая практика", desc: "Backend разработка", link: "https://github.com/" },
    { title: "Преддипломная практика", desc: "Финальный проект", link: "https://github.com/" }
];

const contentDiv = document.getElementById('content');

// Шаблоны страниц
const pages = {
    home: `
        <section class="hero">
            <h1>Имя Фамилия</h1>
            <p>Студент IT-направления. Разрабатываю современные веб-интерфейсы и изучаю фронтенд.</p>
        </section>
    `,
    contacts: `
        <section class="hero">
            <h2>Контакты для связи</h2>
            <div class="grid">
                <a href="https://t.me/youruser" class="card"><h3>Telegram</h3><p>@youruser</p></a>
                <a href="mailto:mail@example.com" class="card"><h3>Email</h3><p>mail@example.com</p></a>
                <a href="https://github.com/" class="card"><h3>GitHub</h3><p>Мои репозитории</p></a>
            </div>
        </section>
    `,
    portfolio: `
        <h2 style="text-align:center">Моё обучение</h2>
        <h3 style="margin-top:20px">Семестры</h3>
        <div class="grid" id="semester-grid"></div>
        <h3 style="margin-top:40px">Практики</h3>
        <div class="grid" id="internship-grid"></div>
    `
};

// Навигация
function navigate(pageId) {
    contentDiv.innerHTML = pages[pageId];
    if (pageId === 'portfolio') {
        renderPortfolio();
    }
}

function renderPortfolio() {
    const semGrid = document.getElementById('semester-grid');
    const intGrid = document.getElementById('internship-grid');

    semesters.forEach(sem => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${sem.title}</h3><p>Смотреть дисциплины</p>`;
        div.onclick = () => showSubjects(sem);
        semGrid.appendChild(div);
    });

    internships.forEach(item => {
        const a = document.createElement('a');
        a.className = 'card';
        a.href = item.link;
        a.target = "_blank";
        a.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
        intGrid.appendChild(a);
    });
}

function showSubjects(sem) {
    contentDiv.innerHTML = `
        <button class="btn-back" onclick="navigate('portfolio')">← Назад</button>
        <h2>${sem.title}</h2>
        <div class="grid">
            ${sem.subjects.map(s => `
                <a href="${s.link}" target="_blank" class="card">
                    <h3>${s.name}</h3>
                    <p>Открыть проект на GitHub ↗</p>
                </a>
            `).join('')}
        </div>
    `;
}

// Инициализация меню
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        navigate(e.target.dataset.page);
    };
});

// Запуск главной страницы
navigate('home');