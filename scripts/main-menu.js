const modesButton = document.querySelector('#modesButton');
const modesContainer = document.querySelector('.nation-guesser-main-menu-itself-mode-button');
let isModesContainerActivated = false;

// CHANGING THE MODES

function activatingTheModesContainer() {
    if (isModesContainerActivated === false) {
        modesContainer.classList.add('nation-guesser-main-menu-itself-mode-button-active');
        
        isModesContainerActivated = true;
    } else {
        modesContainer.classList.remove('nation-guesser-main-menu-itself-mode-button-active');
        
        isModesContainerActivated = false;
    };
};