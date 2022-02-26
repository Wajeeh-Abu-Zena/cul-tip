const { MongoClient, ObjectId } = require("mongodb");
const eventsList = require("../Data/eventsList")

const host = "127.0.0.1"
const port = "27017"
const dbName = "UsersList"

const connectionString = `mongodb://${host}:${port}`

const connectMongo = async () => {
    const client = new MongoClient(connectionString)
    try {
        await client.connect()
        console.log("Connected")

        const db = client.db(dbName)
        const result = await db.collection("Events").insertMany(eventsList)
        console.log(`Count inserted ${result.insertedCount}`)

        //const AllEvents = await db.collection("Events").find({sportType:"Football"}).toArray()
        //console.log(AllEvents)

        const byId = await db.collection("Events").findOne({_id: new ObjectId("62064b992a8dd74b0a4ea5d8")})
        console.log(byId)
    }
    catch(err){
        console.log("Database's not available")
    }
    finally {
        client.close()
    }
}

connectMongo();