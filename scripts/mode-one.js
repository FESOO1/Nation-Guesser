const scoreCounterText = document.querySelector('.nation-guesser-mode-one-top-score-point');
const countryApi = 'https://restcountries.com/v3.1/all';
const guessByFlagInput = document.querySelector('#guessByFlagInput');
const submitGuessButton = document.querySelector('#submitGuessButton');
const modeOneNextButton = document.querySelector('#modeOneNextButton');
const modeOneIndicateButton = document.querySelector('#modeOneIndicateButton');
const modeOneCountryImage = document.querySelector('.nation-guesser-mode-one-itself-random-country-image-itself');
const modeOneCountryName = document.querySelector('.nation-guesser-mode-one-itself-random-country-name');
let countryName = '';
const countriesArray = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
"Cabo Verde",
"Cambodia",
"Cameroon",
"Canada",
"Central African Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo",
"Costa Rica",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Democratic Republic of the Congo",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Eswatini",
"Ethiopia",
"Fiji",
"Finland",
"France",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Greece",
"Grenada",
"Guatemala",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Holy See",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"North Korea",
"North Macedonia",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestine State",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Korea",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Sweden",
"Switzerland",
"Syria",
"Tajikistan",
"Tanzania",
"Thailand",
"Timor-Leste",
"Togo",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela",
"Vietnam",
"Yemen",
"Zambia",
"Zimbabwe"];
let randomCountryName = '';
let hiddenCountryName;
let scoreCounter = 0;


// RETRIEVE DATA FROM REST COUNTRIES API

async function getDataFromAnApi() {
    randomCountryName = countriesArray[Math.floor(Math.random() * countriesArray.length)];

    const response = await fetch('https://restcountries.com/v3.1/name/' + randomCountryName);
    const countryData = await response.json();

    console.log(countryData[0].name.common)
    modeOneCountryImage.src = countryData[0].flags.png;
    modeOneCountryImage.alt = countryData[0].flags.alt;
    modeOneCountryName.textContent = hideCountyName(countryData[0].name.common);
    hiddenCountryName = hideCountyName(countryData[0].name.common);
    countryName = countryData[0].name.common;

    // DISBALING THE NEXT BUTTON
    modeOneNextButton.disabled = true;

    // CLEARING THE INPUT AND FOCUSING ON IT
    guessByFlagInput.value = '';
    guessByFlagInput.focus();

    // ENABLING THE INPUT FIELD AND GUESS SUBMIT BUTTON
    guessByFlagInput.disabled = false;
    submitGuessButton.disabled = false;

    // SHOWING THE SCORE
    const scoreCounterLS = localStorage.getItem('scoreCounterLS');
    scoreCounterText.style.color = 'white';
    
    if (scoreCounterLS) {
        scoreCounterText.textContent = scoreCounterLS;
    } else {
        scoreCounterText.textContent = '0';
    };
};

// HIDE THE NAME OF THE COUNTRY THAT A USER IS GUESSING

function hideCountyName(name) {
    const regex = /./g;
    return name.replace(regex, '_ ');
};

// CHECK IF THE GUESS IS CORRECT

function checkIfTheGuessIsCorrect(e) {
    e.preventDefault();

    const inputItself = guessByFlagInput.value.toLowerCase();

    if (inputItself === countryName.toLowerCase()) {
        modeOneCountryName.textContent = countryName;
        modeOneNextButton.disabled = false;
        guessByFlagInput.style.border = '1px solid rgba(255,255,255,0.05)';

        // DISABLING THE INPUT FIELD AND GUESS SUBMIT BUTTON
        guessByFlagInput.disabled = true;
        submitGuessButton.disabled = true;

        // ADDING A POINT OF 100 FOR EACH CORRECT ANSWER
        scoreCounter += 100;
        scoreCounterText.style.color = 'rgb(64, 255, 0)';
        scoreCounterText.textContent = '+' + scoreCounter;
        localStorage.setItem('scoreCounterLS', scoreCounter);
    } else {
        guessByFlagInput.style.border = '1px solid red';
        
        // SUBTRACTING A POINT OF 20 FOR EACH INCORRECT ANSWER
        scoreCounter -= 20;
        scoreCounterText.textContent = '-' + scoreCounter;
        scoreCounterText.style.color = 'red';
        localStorage.setItem('scoreCounterLS', scoreCounter);
    };
};

// GIVE AN INDICATION SO THAT A USER CAN FIND THE COUNTRY'S NAME

function giveAnIndication() {
    let chosenRandomCharacter = countryName[Math.floor(Math.random() * countryName.length)];
    const chosenRandomCharacterNumber = countryName.indexOf(chosenRandomCharacter);
};

// INITIALIZE BUTTONS
submitGuessButton.addEventListener('click', checkIfTheGuessIsCorrect);
modeOneNextButton.addEventListener('click', getDataFromAnApi);
modeOneIndicateButton.addEventListener('click', giveAnIndication);

// LOCAL STORAGE

function displayTheScoreCounter() {
    const scoreCounterLS = localStorage.getItem('scoreCounterLS');

    if (scoreCounterLS) {
        scoreCounter = scoreCounterLS;
        scoreCounterText.textContent = scoreCounterLS;
    } else {
        scoreCounterText.textContent = '0';
    };
};

displayTheScoreCounter();