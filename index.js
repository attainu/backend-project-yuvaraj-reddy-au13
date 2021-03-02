const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const hbs = require('express-handlebars');

const PORT = process.env.PORT || 1905 ;
const connectionDB = require('./config/mongodb.js')
// connectionDB();

dotenv.config({ path : './config/config.env'})

// morgan setup 
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// hbs setup
app.engine('.hbs', hbs({defaultLayout : "main", extname : '.hbs' }))
app.set('view engine', hbs)

// router 
const router = require('./routes/index')
app.use('/', router);


//middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/health', (req, res)=>{
    res.send('Working Fine!! on PORT : ' + PORT);
})


app.listen(PORT, (req, res)=>{
    console.log(`Server Running In ${process.env.NODE_ENV} Mode`);
    console.log(`Listening to http://localhost:${PORT}`);
    
})
