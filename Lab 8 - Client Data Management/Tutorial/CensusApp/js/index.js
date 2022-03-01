import {CensusRepo} from "./repository/census-repo.js";
const repo = new CensusRepo()
window.onload = async () => {
    await showCensusData();
}

const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

function addCensus(e) {
    e.preventDefault();
    const census = formToObject(e.target)
    repo.addCensus(census)
}

function formToObject(form) {
    const formData = new FormData(form)
    const data = {}

    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}

async function showCensusData() {
    //show the census
}








