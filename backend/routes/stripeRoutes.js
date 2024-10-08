const router = require('express').Router()
const appcontroller = require('../controllers/StripeController')
const auth = require('../middlewares/auth')

router.post('/create-checkout-session', auth.userAuth, appcontroller.createCheckoutSession)
router.post('/webhook', appcontroller.webhook)
module.exports= router
