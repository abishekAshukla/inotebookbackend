const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();


const app = express()
const port = 5000

app.get('/express', (req, res) => { res.send('Hello from Express!')})
app.get('/node', (req, res) => { res.send('Hello from NodeJs yuhu machate raho tony stark urff ironman')})

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
// on 'localhost:3000/api/auth' 'auth.js' will be served
app.use('/api/notes', require('./routes/notes'))
app.use('/api/user', require('./routes/user'))
app.use('/api/chat', require('./routes/chat'))
app.use('/api/message', require('./routes/message'))


// app.listen(process.env.PORT || port, () => {
//   console.log(`iNoteBook BackEnd listening at http://localhost:${port}`)
// })

const server = app.listen(process.env.PORT || port, console.log(`server started on ${port}`))


