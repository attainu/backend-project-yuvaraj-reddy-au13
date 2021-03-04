const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')
const session = require('express-session');
const passport = require('passport')

const PORT = process.env.PORT || 5500 ;
// port = 1905
const connectionDB = require('./config/mongodb.js')
// connectionDB();

dotenv.config({ path : './config/config.env'})

// passport
// const passauth = require('../config/passport')
// passauth(passport)
require('./config/passport')(passport)

//middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// morgan setup 
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//static files
app.use(express.static(path.join(__dirname, 'public')))

// hbs setup
app.engine('.hbs', exphbs({defaultLayout : 'main', extname : '.hbs' }))
app.set('view engine', '.hbs')

// app.engine(
//     '.hbs',
//     exphbs({
//       defaultLayout: 'main',
//       extname: '.hbs',
//     })
//   )
// app.set('view engine', '.hbs')


// session
app.use(session({
    secret: 'Mysecrete',
    resave: false,
    saveUninitialized: false,
}))

// passport setup
app.use(passport.initialize());
app.use(passport.session());


// routes
// const router = require('./controllers/indexController')
app.use('/', require('./controllers/indexController'));
// app.use('/', require('./z_prac_login'))
app.use('/auth', require('./controllers/authController'));



app.get('/health', (req, res)=>{
    res.send('Working Fine!! on PORT : ' + PORT);
})
app.listen(PORT, (req, res)=>{
    console.log(`Server Running In ${process.env.NODE_ENV} Mode`);
    console.log(`Listening to http://localhost:${PORT}`);
    
})
