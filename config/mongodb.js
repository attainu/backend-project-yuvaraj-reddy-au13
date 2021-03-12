const mongoose = require('mongoose')
const url = 'mongodb+srv://yuvaraj-reddy-au13:499612@cluster0.4pbtw.mongodb.net/BE-project?retryWrites=true&w=majority' 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB ;

