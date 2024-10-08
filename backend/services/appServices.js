const User = require('../models/UserModel')


// activate free trail 
async function subToFreeTrail(email) {
    try {
        //check free trail count
        const getUser = await User.findOne({ email: email })
        if (getUser.free_trail_count > 0) {
            getUser.subscription_Mode = true
            getUser.subscription_Type = 'Free'
            getUser.save()
            return true
        }
        return false

    } catch (error) {
        throw Error(`Cant sub to free trail ${error}`)
    }
}

//update subscription
async function updateSubscription(email, type, subscriptionMode) {
    try {
        const getUser = await User.findOne({ email: email })
        getUser.subscription_Mode = subscriptionMode
        getUser.subscription_Type = type
        getUser.free_trail_count = 0
        getUser.save()
    } catch (error) {
        throw Error(`Cant update subscription ${error}`)
    }
}


module.exports = { subToFreeTrail, updateSubscription }