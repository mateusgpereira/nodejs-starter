const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('server up and running')
})
