import { combineReducers } from 'redux';

const updateSearchQueryReducer = (query = null, action) => {
    let selection = query || "";
    if(action.type === 'QUERY_UPDATED')
    {
        selection = action.payload;
    }
    return selection;
}

//its a static array, its a bit overkill. But good to show as an example
const resultsReducer = () => {
    return [
    "Bangladesh",
    "Belgium",
    "Burkina Faso",
    "Bulgaria",
    "Bosnia and Herzegovina",
    "Barbados",
    "Wallis & Futuna Islands",
    "St. Barthélemy",
    "Bermuda",
    "Brunei Darussalam",
    "Bolivia",
    "Bahrain",
    "Burundi",
    "Benin",
    "Bhutan",
    "Jamaica",
    "Bouvet Island",
    "Botswana",
    "Samoa",
    "Bonaire, Sint Eustatius and Saba",
    "Brazil",
    "Bahamas",
    "Jersey",
    "Belarus",
    "Belize",
    "Russia",
    "Rwanda",
    "Serbia",
    "East Timor",
    "Reunion",
    "Turkmenistan",
    "Tajikistan",
    "Romania",
    "Tokelau",
    "Guinea-Bissau",
    "Guam",
    "Guatemala",
    "S.Georgia & S.Sandwich Islands",
    "Greece",
    "Equatorial Guinea",
    "Guadeloupe",
    "Japan",
    "Guyana",
    "Guernsey",
    "French Guiana",
    "Georgia",
    "Grenada",
    "United Kingdom",
    "Gabon",
    "Guinea",
    "Gambia",
    "Greenland",
    "Gibraltar",
    "Ghana",
    "Oman",
    "Tunisia",
    "Jordan",
    "Croatia",
    "Haiti",
    "Hungary",
    "Hong Kong",
    "Honduras",
    "Heard & McDonald Islands",
    "Venezuela",
    "Puerto Rico",
    "Palestine",
    "Palau",
    "Portugal",
    "Saint Kitts And Nevis",
    "Paraguay",
    "Iraq",
    "Panama",
    "French Polynesia",
    "Papua New Guinea",
    "Peru",
    "Pakistan",
    "Philippines",
    "Pitcairn",
    "Poland",
    "St. Pierre & Miquelon",
    "Zambia",
    "Western Sahara",
    "Estonia",
    "Egypt",
    "South Africa",
    "Ecuador",
    "Italy",
    "Viet Nam",
    "Solomon Islands",
    "Ethiopia",
    "Somalia",
    "Zimbabwe",
    "Saudi Arabia",
    "Spain",
    "Eritrea",
    "Montenegro",
    "Moldova",
    "Madagascar",
    "St. Martin",
    "Morocco",
    "Monaco",
    "Uzbekistan",
    "Myanmar",
    "Mali",
    "Macau",
    "Mongolia",
    "Marshall Islands",
    "Macedonia, the Former Yugoslav Republic Of",
    "Mauritius",
    "Malta",
    "Malawi",
    "Maldives",
    "Martinique",
    "Northern Mariana Islands",
    "Montserrat",
    "Mauritania",
    "Isle of Man",
    "Uganda",
    "Tanzania",
    "Malaysia",
    "Mexico",
    "Israel",
    "France",
    "Aruba",
    "Saint Helena, Ascension and Tristan Da Cunha",
    "Svalbard & Jan Mayen Islands",
    "Finland",
    "Fiji",
    "Falkland Islands",
    "Micronesia, Federated States Of",
    "Faroe Islands",
    "Nicaragua",
    "Netherlands",
    "Norway",
    "Namibia",
    "Vanuatu",
    "New Caledonia",
    "Niger",
    "Norfolk Island",
    "Nigeria",
    "New Zealand",
    "Nepal",
    "Nauru",
    "Niue",
    "Cook Islands",
    "Côte D'Ivoire",
    "Switzerland",
    "Colombia",
    "China",
    "Cameroon",
    "Chile",
    "Cocos  Islands",
    "Canada",
    "Congo",
    "Central African Republic",
    "Congo, The Democratic Republic Of The",
    "Czech Republic",
    "Cyprus",
    "Christmas Island",
    "Costa Rica",
    "Curaçao",
    "Cape Verde",
    "Cuba",
    "Swaziland",
    "Syria",
    "St. Maarten",
    "Kyrgyzstan",
    "Kenya",
    "South Sudan",
    "Suriname",
    "Kiribati",
    "Cambodia",
    "El Salvador",
    "Comoros",
    "Sao Tome and Principe",
    "Slovakia",
    "Korea, Republic of",
    "Slovenia",
    "Korea, Democratic People's Republic Of",
    "Kuwait",
    "Senegal",
    "San Marino",
    "Sierra Leone",
    "Seychelles",
    "Kazakhstan",
    "Cayman Islands",
    "Singapore",
    "Sweden",
    "Sudan",
    "Dominican Republic",
    "Dominica",
    "Djibouti",
    "Denmark",
    "Virgin Islands",
    "Germany",
    "Yemen",
    "Algeria",
    "United States",
    "Uruguay",
    "Mayotte",
    "United States Minor Outlying Islands",
    "Lebanon",
    "Saint Lucia",
    "Laos",
    "Tuvalu",
    "Taiwan",
    "Trinidad and Tobago",
    "Turkey",
    "Sri Lanka",
    "Liechtenstein",
    "Latvia",
    "Tonga",
    "Lithuania",
    "Luxembourg",
    "Liberia",
    "Lesotho",
    "Thailand",
    "French Southern Territories",
    "Togo",
    "Chad",
    "Turks & Caicos Islands",
    "Libya",
    "Vatican City",
    "Saint Vincent And The Grenadines",
    "United Arab Emirates",
    "Andorra",
    "Antigua and Barbuda",
    "Afghanistan",
    "Anguilla",
    "Virgin Islands",
    "Iceland",
    "Iran",
    "Armenia",
    "Albania",
    "Angola",
    "Antarctica",
    "American Samoa",
    "Argentina",
    "Australia",
    "Austria",
    "British Indian Ocean Territory",
    "India",
    "Åland Islands",
    "Azerbaijan",
    "Ireland",
    "Indonesia",
    "Ukraine",
    "Qatar",
    "Mozambique"
  ]
}

export default combineReducers({
    results: resultsReducer,
    searchQuery: updateSearchQueryReducer
})