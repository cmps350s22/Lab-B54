export class Cat {
    #cid
    constructor(name, color) {
        this.name = name
        this.color = color
        this.#cid = Math.random() * 1000
    }
    getCid(){
        return this.#cid
    }
    sound(){
        console.log('Meoow')
    }
}
