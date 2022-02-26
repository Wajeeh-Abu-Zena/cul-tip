const eventsList = require('../Data/eventsList')


const eventsByType = (sportType) => {
    let evenstList = readEvents()

    return evenstList.filter( e => e.sportType === sportType)
}


const readEvents = () => {
    let events = eventsList.getAllEvents()
    if(!events || events.length ===0)
        throw new Error("No data available in file")
    return events
}

module.exports = eventsByType;