function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Установка начальной темы при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'theme-light';
setTheme(savedTheme);

document.getElementById('themeBtn').addEventListener('click', toggleTheme);