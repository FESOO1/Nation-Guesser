const modeTwoNextButton = document.querySelector('#modeTwoNextButton');
const modeTwoCountryName = document.querySelector('.nation-guesser-mode-two-itself-country-name');
const modeTwoButtons = document.querySelectorAll('.nation-guesser-mode-two-itself-button-itself');
const modeTwoButtonsImages = document.querySelectorAll('.nation-guesser-mode-two-itself-button-itself-image');
let modeTwoRandomPickedCountry;
const countriesArrayTwo = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
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
let modeTwoPickedCountryName;
// RETRIEVE DATA FROM AN API

async function retrieveDataFromAnApi() {
    // RETRIEVING THE DATA FROM AN API
    for (let i = 0; i < modeTwoButtons.length; i++) {
        modeTwoRandomPickedCountry = countriesArrayTwo[Math.floor(Math.random() * countriesArrayTwo.length)];
        const response = await fetch('https://restcountries.com/v3.1/name/' + modeTwoRandomPickedCountry);
        const countryDataTwo = await response.json();

        modeTwoButtons[i].value = countryDataTwo[0].name.common.toLowerCase();
        modeTwoButtonsImages[i].src = countryDataTwo[0].flags.svg;
        modeTwoPickedCountryName = modeTwoButtons[Math.floor(Math.random() * modeTwoButtons.length)].value;
        modeTwoCountryName.textContent = modeTwoPickedCountryName;
    };

    // ENABLING THE MODE TWO BUTTONS
    for (const modeTwoButton of modeTwoButtons) {
        modeTwoButton.disabled = false;
        modeTwoButton.classList.remove('nation-guesser-mode-two-itself-button-itself-incorrect');
        modeTwoButton.classList.remove('nation-guesser-mode-two-itself-button-itself-correct');
    };

    // DISABLING THE NEXT BUTTON
    modeTwoNextButton.disabled = true;
};

// GUESSING THE FLAG OF A COUNTRY

for (let i = 0; i < modeTwoButtons.length; i++) {
    modeTwoButtons[i].addEventListener('click', () => {
        if (modeTwoPickedCountryName === modeTwoButtons[i].value) {
            for (const modeTwoButton of modeTwoButtons) {
                modeTwoButton.classList.add('nation-guesser-mode-two-itself-button-itself-incorrect');
            };

            modeTwoButtons[i].classList.remove('nation-guesser-mode-two-itself-button-itself-incorrect');
            modeTwoButtons[i].classList.add('nation-guesser-mode-two-itself-button-itself-correct');

            // ENABLING THE NEXT BUTTON
            modeTwoNextButton.disabled = false;

            // DISABLING THE MODE TWO BUTTONS
            for (const modeTwoButton of modeTwoButtons) {
                modeTwoButton.disabled = true;
            };
        } else {
            modeTwoButtons[i].classList.add('nation-guesser-mode-two-itself-button-itself-incorrect');
            modeTwoButtons[i].disabled = true;
        };
    });
};

// INITIALIZING BUTTONS
modeTwoNextButton.addEventListener('click', retrieveDataFromAnApi);