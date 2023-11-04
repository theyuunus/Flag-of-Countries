import "../css/index.css";
import "./mode";

import request from "./request";
import { createCountryInfo } from "./UpdateUI";

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/${country}`

request(countryAPI).then((data) => {
    createCountryInfo(data[0])
}).catch((error) => {
    console.error(error.message);
})