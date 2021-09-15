const express = require('express')
const cors = require('cors')
const path = require('path');
const expressSession = require('express-session')
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'some secret string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

//Express App Config
app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
//Route production- public to server
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
//Route Development- domain 8080 to server    
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3030'],
        credentials: true
    }
    app.use(cors(corsOptions))
}
// Access-Control-Allow-Origin: 'http://localhost:3000'


//ROUTES
const orderRoutes = require('./api/order/order.routes')
app.use('/api/order', orderRoutes)

//If no routes get the HTML from public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



const logger = require('./service/logger.service.js')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
    console.log('Server is running on port: ' + port);
})
console.log('I am Here!')


