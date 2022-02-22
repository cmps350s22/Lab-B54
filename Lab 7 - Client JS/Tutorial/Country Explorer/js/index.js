const regionSearchBar = document
    .querySelector('#region')
const countryDropdown = document.querySelector('#country')

const regionBaseUrl = 'https://restcountries.com/v3.1/region'

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
