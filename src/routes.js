const { Router } = require('express')

const routes = new Router()

routes.get('', (req, res) => res.json({ mgs: 'Hello World' }))

module.exports = routes
