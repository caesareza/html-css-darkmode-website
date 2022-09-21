const LIGHT_MODE = 'light'
const DARK_MODE = 'dark'
const buttonTheme = document.getElementById('button-dark-light')

if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
    alert("maaf browser anda tidak mendukung fitur dark mode")
}

const isDarkModeEnable = window.matchMedia('(prefers-color-scheme: dark)');
isDarkModeEnable.addEventListener('change', (e) => {
    const isDarkMode = e.matches
    console.log(`Dark mode is ${isDarkMode ? '🌒 on' : '☀️ off'}.`);
    document.documentElement.className = isDarkMode ? DARK_MODE : LIGHT_MODE
})

const chooseTheme = () => {
    console.log('chooseTheme')
    const currentTheme = localStorage.getItem('mode')

    if (currentTheme === 'light') {
        document.documentElement.className = DARK_MODE
        localStorage.setItem('mode', DARK_MODE)
        return
    }

    document.documentElement.className = LIGHT_MODE
    localStorage.setItem('mode', LIGHT_MODE)
}

const loadThemeOnRefresh = () => {
    const currentTheme = localStorage.getItem('mode')

    if (currentTheme) {
        document.documentElement.className = currentTheme
    }
}

buttonTheme.addEventListener('click', chooseTheme)
window.addEventListener('load', loadThemeOnRefresh)