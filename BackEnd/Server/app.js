const express = require('express')
const eventsByType = require("./Control/readData")
const MongoosConnector = require("../Database/Users/MongoosConnector")
const addedUser = require("../Database/Users/AddUser")


const server = express();
//let asyncCalls = new Map();
//let asyncCallId = 0;

server.use(express.json())

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
});

////////////////////////////////////////////////////////////////////////
// signup post
server.post(`/SignUp/Users`, async (req, res) => {
    const user = req.body
    if(!user) {
        const err = new Error("User must be submited")
        err.status = 400
        throw err
    }
    const addedUser = await MongoosConnector.addUser(user)
    if(addedUser) {
        res.json({message: "User has been added successfuly"})
    } else {
        res.status(500).json({message: "An error occured, couldn't create user, please try again later"})
    }
})



server.get('/sport/:type',(req,res) =>{
    let sportType = req.params.type
    let events = eventsByType(sportType)
    if(!events || events.length === 0){
    let err = {}
    err.errMessage = `No events ${sportType} has been found in the system`
    err.code = 404
    res.status(404).send(err)
    return
    }
res.send(events)
});


server.use((err, req, res, next) => {
    if(res.headersSent) {
        next()
        return
    }
    err.errMessage = (err.message|| "Unknown error!")
    res.status(err.status || 500).json({err})
    
    next()
})

server.listen(3001, () => console.log("Server is up and listening to port 3001"))
