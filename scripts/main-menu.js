const mainMenuButtons = document.querySelectorAll('.nation-guesser-main-menu-itself-button-itself');
const modesButton = document.getElementById('modesButton');
const modesContainer = document.querySelector('.nation-guesser-main-menu-itself-mode-button');
let isModesContainerActivated = false;

// HOVER STATES
for (let i = 0; i < mainMenuButtons.length; i++) {
    // HOVER STATES

    // MOUSELEAVE
    mainMenuButtons[i].addEventListener('mouseleave', () => {
        mainMenuButtons[i].classList.remove('nation-guesser-main-menu-itself-button-itself-hover');
    });

    // MOUSEENTER
    mainMenuButtons[i].addEventListener('mouseenter', () => {
        if (!mainMenuButtons[i].classList.contains('nation-guesser-main-menu-itself-button-itself-active')) {
            mainMenuButtons[i].classList.add('nation-guesser-main-menu-itself-button-itself-hover');
        };
    });
};

// CHANGING THE MODES

function activatingTheModesContainer() {
    if (isModesContainerActivated === false) {
        modesContainer.classList.add('nation-guesser-main-menu-itself-mode-button-active');
        modesButton.classList.add('nation-guesser-main-menu-itself-button-itself-active');
        
        isModesContainerActivated = true;
    } else {
        modesContainer.classList.remove('nation-guesser-main-menu-itself-mode-button-active');
        modesButton.classList.remove('nation-guesser-main-menu-itself-button-itself-active');
        
        isModesContainerActivated = false;
    };
};

// INITIALIZE BUTTON
modesButton.addEventListener('click', activatingTheModesContainer);