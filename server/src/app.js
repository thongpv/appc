const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('./config/config')

const app = express()
// const server = require('http').Server(app)
const server = app.listen(config.port, () => console.log(`Server started on port ${config.port}`))
const io = require('socket.io')(server)

let groups = [
  {
    title: 'Group one',
    subtitle: 'The logic for many event handlers will be more',
    logo: 'http://via.placeholder.com/50x50',
    total: 0,
    created_at: new Date(),
    password: ''
  },
  {
    title: 'Group two',
    subtitle: 'The logic for many event handlers will be more',
    logo: 'http://via.placeholder.com/50x50',
    total: 0,
    created_at: new Date(),
    password: '123'
  }
]

io.on('connection', (socket) => {
  console.log(`User connection: ${socket.id}`)

  // Disconnect
  socket.on('disconnect', function () {
    console.log(`User disconnect: ${socket.id}`)
  })

  io.emit('IO_GROUPS', JSON.stringify(groups))
})

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/api/chat', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'Post created...',
        authData
      })
    }
  })
})

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'thong',
    email: 'thong@gmail.com'
  }
  jwt.sign({user}, 'secretkey', {expiresIn: '30s'}, (err, token) => {
    if (err) {
      throw err
    }
    res.json({
      token
    })
  })
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// verifyToken
function verifyToken (req, res, next) {
  // Get auth heade value
  const bearerHeader = req.headers['authorization']
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const bearerToken = bearer[1]
    // Set the tokken
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}
