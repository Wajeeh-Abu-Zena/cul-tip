let id = 100

let eventsList = [
    {
        id: id++,
        sportType: "Football",
        country: "Jerusalem",
        eventData: "01/8/2022"
    },
    {
        id: id++,
        sportType: "Football",
        country: "Haifa",
        eventData: "01/9/2022"
    },
    {
        id: id++,
        sportType: "Football",
        country: "Rammala",
        eventData: "01/10/2022"
    },
    {
        id: id++,
        sportType: "Boxing",
        country: "Jerusalem",
        eventData: "01/8/2022"
    },
    {
        id: id++,
        sportType: "Baseball",
        country: "Jereco",
        eventData: "01/11/2022"
    },
    {
        id: id++,
        sportType: "Car Racing",
        country: "Tell Aviv",
        eventData: "01/5/2022"
    },
    {
        id: id++,
        sportType: "Ice Skating",
        country: "Hermon",
        eventData: "01/3/2022"
    },
    {
        id: id++,
        sportType: "Karate",
        country: "Jerusalem",
        eventData: "01/7/2022"
    },
    {
        id: id++,
        sportType: "Tennis",
        country: "Jerusalem",
        eventData: "01/5/2022"
    }
]

const getAllEvents = () => {
    return eventsList
}

module.exports = {getAllEvents};
