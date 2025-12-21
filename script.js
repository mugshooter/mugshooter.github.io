const contentDiv = document.getElementById('content');

// Данные о семестрах
const semesters = [
    { id: 1, title: "1 Семестр", subjects: ["Информатика", "Математика", "История"] },
    { id: 2, title: "2 Семестр", subjects: ["Программирование", "Физика", "Английский"] },
    // Добавь остальные до 8...
];

const pages = {
    home: `
        <section class="hero">
            <h1>Привет! Я [Твое Имя]</h1>
            <p>Студент-разработчик. Специализируюсь на создании современных веб-интерфейсов.</p>
        </section>
    `,
    contacts: `
        <section class="hero">
            <h2>Мои контакты</h2>
            <p>Telegram: @username</p>
            <p>Email: example@mail.com</p>
            <p>GitHub: <a href="#">github.com/user</a></p>
        </section>
    `,
    portfolio: `
        <h2 style="text-align:center; margin-top:20px;">Мое обучение по семестрам</h2>
        <div class="grid" id="semester-grid"></div>
    `
};

// Функция навигации
function navigate(page) {
    contentDiv.innerHTML = pages[page];
    
    if (page === 'portfolio') {
        renderSemesters();
    }
}

// Отрисовка карточек семестров
function renderSemesters() {
    const grid = document.getElementById('semester-grid');
    semesters.forEach(sem => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${sem.title}</h3><p>Нажми, чтобы увидеть дисциплины</p>`;
        card.onclick = () => showSubjects(sem);
        grid.appendChild(card);
    });
}

// Показ дисциплин внутри семестра
function showSubjects(sem) {
    contentDiv.innerHTML = `
        <section class="hero">
            <button onclick="navigate('portfolio')">← Назад к семестрам</button>
            <h2>Дисциплины ${sem.id} семестра</h2>
            <ul style="list-style:none; padding:0;">
                ${sem.subjects.map(s => `<li class="card" style="margin:10px auto; max-width:400px;">${s}</li>`).join('')}
            </ul>
        </section>
    `;
}

// Обработка кликов по меню
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        navigate(e.target.dataset.page);
    };
});

// Стартовая страница
navigate('home');