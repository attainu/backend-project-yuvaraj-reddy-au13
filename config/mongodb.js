
// const mongoose = require('mongoose')

// // mongoose.connect('mongodb://localhost:27017/CRUD')

// const connectionDB = async ()=>{
//     try {
//         const MONGO_URI = 'mongodb://localhost:27017/CRUD'
//         const con = await mongoose.connect(MONGO_URI, {
//             useNewUrlParser : true,
//             useUnifiedTopology : true,
//             useFindAndModify : false,
//             useCreateIndex : true
//         })
//         console.log(`mongodb connected : ${con.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     };
// };

// module.exports = connectionDB;


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Project',  {
                useNewUrlParser : true,
                useUnifiedTopology : true,
                useFindAndModify : false,
                useCreateIndex : true
            })
console.log('Connect to DB!!');


// mongoose.connect('mongodb+srv://yuvaraj-reddy-au13:yuvaraj@3108@cluster0.4pbtw.mongodb.net/dailyStories?retryWrites=true&w=majority')

