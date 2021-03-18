// initialize vars
const express = require('express') // code requiring Express (library that was installed); import Express library
const { restart } = require('nodemon')
const app = express() // http server; create 'app' obj; has all api methods for routing urls for functions that will handle reqs + send back reasponses
const port = 3000 // .listen will listen here; specify which port to listen on


// SET UP ROUTES AND HANDLERS using app.get()...
// tells Exp to listen to any GET method for any URL mthd
// req object and res obj = params
app.get('/', (req, res) => {
    // sending back response with text
    // responsive to html ex '<em>Hello</em>'
  res.send('Hello World!!!')
})

app.get('/ctp', (req, res) => {
    res.send('youre at the ctp page, welcome')
})

app.post('/ctp', (req, res) => {
    // res.send('you POSTed to the ctp page')
    // send back json object with information:
    res.json({
        msg:"this is the ctp POST endpoint",
        data: ["1", 2, {num:"three"}],
    })
})

// tell server to start listening for clients
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})