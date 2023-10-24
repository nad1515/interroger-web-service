
//.....methode fetch................

let table = document.createElement("table");

const getPkemons = async ()=> {
   try {

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1292");
        const pokemons = await res.json(); 
        return pokemons;
    } catch (error) {
        console.log("Echec de la rcupération de la liste des pokemons");
    } 
}
const displayPokemons = async () =>{
    const pokemons = await getPkemons();
    console.log("pokemons", pokemons);
    console.log("results", pokemons.results);
}
displayPokemons();
//..........methode ajax.......................
const resultpokemons = await ajaxtest("https://pokeapi.co/api/v2/pokemon?limit=1292");
function ajaxtest (url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        if (!xhr) {
            alert('Abandon :( Impossible de créer une instance de XMLHTTP');
            return false;
        }
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
         if (this.readystate == 4){
           if (this.status == 200) {
            return resolve(JSON.parse(this.response));
           }
         }   
        };
        xhr.send();
    });
}
//............methode axios...............

let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292");
    return response.data;
}
// Idem avec une promesse explicite :
let datasAxiosBis = await axiosTestAvecPromesseExplicite();
console.log("Datas via Axios et une promesse explicite: ", datasAxiosBis.data);
function axiosTestAvecPromesseExplicite () {
    return new Promise((resolve) => {
        return resolve(axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292"));
    });
}