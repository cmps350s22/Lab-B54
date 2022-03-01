//initialize the database using localbase
const db = new Localbase('census.db')

export class CensusRepo {

    //add census
    addCensus(census) {
        try {
            return db.collection('censuses').add(census)
        } catch (e) {
            console.log(e)
        }
    }

    //update census
    updateCensus(census) {
        try {
            return db.collection('censuses').doc({id: census.id}).update(census)
        } catch (e) {
            console.log(e)
        }
    }

    //delete census
    deleteCensus(id) {
        try {
            return db.collection('censuses').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }

    //get census by id
    getCensus(id) {
        try {
            return db.collection('censuses').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }

    //get all censuses
    getCensuses() {
        try {
            return db.collection('censuses').get()
        } catch (e) {
            console.log(e)
        }
    }
}
















