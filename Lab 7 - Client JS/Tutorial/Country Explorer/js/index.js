//STEP 1: GET THE REFERENCE TO THE HTML ELEMENTS
const regionSearchBar = document
    .querySelector('#region')
const countryDropdown = document.querySelector('#country') //refernece
const factsArea = document.querySelector('#facts-area')
//STEP 2: BASE URL
const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'

//STEP 3 : CREATE THE CALL BACK FUNCTIONS
async function getCountries() {
    const url = `${regionBaseUrl}/${regionSearchBar.value}` //create the url
    const data = await fetch(url)  //download the data
    const countries = await data.json()  //
    const options = countries
        .map(country => countryToOption(country))
        .join(' ')

    countryDropdown.innerHTML = options


}

function countryToOption(country) {
    return `<option value="${country.name.common}">${country.name.common}</option>`
}

async function handleCountryChange() {
    const url = `${countryBaseUrl}/${countryDropdown.value}` //create the url
    const data = await fetch(url)  //download the data
    const countries = await data.json()  //
    const countryToFactsHTML = countryToFacts(countries[0])
    factsArea.innerHTML = countryToFactsHTML
}

function countryToFacts(country){
    return `
        <h1>Facts about ${country.name.common}</h1>
        <img src="${country.flags.png}" alt="">
        <table>
            <tr>
                <td>Offical Country Name</td>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <td>Population</td>
                <td>${country.population}</td>
            </tr>
              <tr>
                <td>Currencies</td>
                <td>${Object.keys(country.currencies).map(key => country.currencies[key].name)}</td>
            </tr>
        </table>
        
    `
}























// // how to select  elements in the page
// const students = [
//     {
//         name : 'Fereyal',
//         age : 21
//     },
//     {
//         name : 'Fatima',
//         age : 20
//     },
//     {
//         name : 'Zahra',
//         age : 22
//     },
//     {
//         name : 'Tooba',
//         age : 21,
//         gender : 'Female',
//         hobbies : "Tennis"
//     }
// ]
//
// document.querySelector('.container').innerHTML += `
//     <h1 class="blue-background"> This is a replacement tag </h1>
//     <img src="https://flagcdn.com/w320/qa.png" alt="">
//     ${students.map(student=> `<li> ${Object.keys(student).map(key => student[key]).join(' - ')}</li>`).join(' ')}
// `
//
