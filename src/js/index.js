import "../css/index.css"

import request from "./request"

const API = "https://restcountries.com/v3.1/all"

request(API).then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.error(error.message);
})