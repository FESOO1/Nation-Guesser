const startGameButton = document.getElementById('startGameButton');
const modesButton = document.getElementById('modesButton');
const modeOne = document.querySelector('.nation-guesser-mode-one');
const modeTwo = document.querySelector('.nation-guesser-mode-two');
const mainMenu = document.querySelector('.nation-guesser-main-menu');
const mainMenuButtons = document.querySelectorAll('.nation-guesser-main-menu-itself-button-itself');
const mainMenuModeButtons = document.querySelectorAll('.nation-guesser-main-menu-itself-mode-button-itself');
const modesContainer = document.querySelector('.nation-guesser-main-menu-itself-mode-button');
let isModesContainerActivated = false;
let chosenModeIsTwo = false;

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

// MODE BUTTONS

for (let i = 0; i < mainMenuModeButtons.length; i++) {
    mainMenuModeButtons[i].addEventListener('click', () => {
        for (const mainMenuModeButton of mainMenuModeButtons) {
            mainMenuModeButton.classList.remove('nation-guesser-main-menu-itself-mode-button-itself-active');
        };

        mainMenuModeButtons[i].classList.add('nation-guesser-main-menu-itself-mode-button-itself-active');
    });
};

// START THE GAME BASED ON THE MODE CHOSEN

function startTheGameBasedOneTheChoseMode() {
    if (mainMenuModeButtons[0].classList.contains('nation-guesser-main-menu-itself-mode-button-itself-active')) {
        getDataFromAnApi();
        modeOne.classList.add('nation-guesser-mode-one-active');
        modeTwo.classList.remove('nation-guesser-mode-one-active');
    } else {
        modeOne.classList.remove('nation-guesser-mode-one-active');
        modeTwo.classList.add('nation-guesser-mode-one-active');
    };
};

// INITIALIZE BUTTON
modesButton.addEventListener('click', activatingTheModesContainer);
startGameButton.addEventListener('click', startTheGameBasedOneTheChoseMode);