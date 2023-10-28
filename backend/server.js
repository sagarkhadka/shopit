const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = require('./app')

// config setting
dotenv.config({
  path: 'backend/config/config.env'
})

// db connect
connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server started PORT: ${process.env.PORT}`)
})
