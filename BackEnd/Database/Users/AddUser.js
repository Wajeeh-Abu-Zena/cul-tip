const MongoosConnector = require("./MongoosConnector")


const addUserIfNotExistAsync = async (user, asyncCall, onChangeAsyncState) => {

    const foundUser = await MongoosConnector.findUser(user)
    console.log(foundUser)
    if(foundUser) {
        onChangeAsyncState(asyncCall, 'ERROR_ALREADY_EXIST')
        return
    }
    const addedUser = await MongoosConnector.createUser(user)
    if(addedUser) {
        onChangeAsyncState(asyncCall, 'SUCCESS')
    } else {
        onChangeAsyncState(asyncCall, 'FAILED')
    }
}


module.exports = {addUserIfNotExistAsync};