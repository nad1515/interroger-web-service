console.log("chargé");

import monJson from '../../data.json'assert{type:'json'};
console.log("Mon JSON: ",monJson);

//..............methode ajax......................

const resultAjax = await ajaxTest('data.json');
console.log("Résultat via Ajax - nécéssite une promesse explicite: ", resultAjax);
function ajaxTest (url) {
    return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    if (!xhr) {
        alert('Abandon :( Impossible de créer une instance de XMLHTTP');
        return false;
    }
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                return resolve(JSON.parse(this.response));
            }
        }
    };
    xhr.send();
    });
}
//.......methode avec axios.......................

let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("data.json");
    return response.data;
}
// Idem avec une promesse explicite :
let datasAxiosBis = await axiosTestAvecPromesseExplicite();
console.log("Datas via Axios et une promesse explicite: ", datasAxiosBis.data);
function axiosTestAvecPromesseExplicite () {
    return new Promise((resolve) => {
        return resolve(axios.get("data.json"));
    });
}
// Méthode avec fetch

let datasFetch;
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=1292";
await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}
let dataFetchBis;
await getDataFetchBis();
console.log("Voici les données via fetch: ", dataFetchBis);

async function getDataFetchBis () {
    const res = await fetch("data.json", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            
        }
    });
    dataFetchBis = await res.json();
}