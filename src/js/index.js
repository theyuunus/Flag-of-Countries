import "../css/index.css"

import request from "./request"
import { createCountries } from "./UpdateUI"
import "./filter"
import "./mode"

const API = "https://restcountries.com/v3.1/all"

request(API).then((data) =>{
    createCountries(data);
}).catch((error) =>{
    console.error(error.message);
})

console.clear();