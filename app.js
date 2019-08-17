const express = require('./node_modules/express')
const dotenv = require('./node_modules/dotenv')
var bodyParser = require('./node_modules/body-parser')
//const routes = require('/routes.js')

dotenv.config({path:'./config.env'})

let routes = require('./backend_src/routes/routes')

const app = express()

const port = process.env.PORT || 3000

app.use(
    express.json()
)

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,X-Frame-Options, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(routes)


app.listen(port, () => {
    console.log('Server is running on port' + port)
})

console.log(process.env)