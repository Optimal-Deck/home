const menuToggle = document.querySelector('#menuToggle')
const mainMenu = document.querySelector('#mainMenu')

const mediaQuery = window.matchMedia("(max-width: 900px)")

const showMainMenu = () => mainMenu.style.display = 'flex';
const hiddenMainMenu = () => mainMenu.style.display = 'none';

menuToggle.addEventListener('click', () => {
    if(mainMenu.style.display === 'none'){
        showMainMenu()
    }else{
        hiddenMainMenu()
    }
})

mediaQuery.addEventListener('change', e => {
    if(e.matches){    
        hiddenMainMenu()
    }else{
        showMainMenu()
    }
})