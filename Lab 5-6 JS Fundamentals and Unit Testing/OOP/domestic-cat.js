import {Cat} from "./cat.js";

class DomesticCat extends Cat{
    constructor(name, color , owner) {
        super(name  , color);
        this.owner = owner
    }
}

const dcat = new DomesticCat('juju', 'blue', 'Zahra')
console.log(dcat)