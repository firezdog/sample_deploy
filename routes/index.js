const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.index)
router.get('/another', controllers.another)

module.exports = router