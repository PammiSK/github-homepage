document.addEventListener('DOMContentLoaded', function () {
    const modeToggleButton = document.getElementById('mode-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        modeToggleButton.textContent = 'Dark Mode';
    }

    modeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        modeToggleButton.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
    });
});
