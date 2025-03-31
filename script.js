let modeToggleButton; // Declare modeToggleButton globally

function toggleMode() {
    document.body.classList.toggle('light-mode');
    // Save user preference in localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        modeToggleButton.textContent = 'Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        modeToggleButton.textContent = 'Light Mode';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    modeToggleButton = document.getElementById('mode-toggle'); // Initialize modeToggleButton

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        modeToggleButton.textContent = 'Dark Mode';
    } else {
        // Set default theme to dark if no preference is saved
        localStorage.setItem('theme', 'dark');
        document.body.classList.remove('light-mode');
        modeToggleButton.textContent = 'Light Mode';
    }

    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', toggleMode);
    } else {
        console.error('Mode toggle button not found');
    }
});