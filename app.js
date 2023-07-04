
credentials = require("./middi/credentials")
const express = require("express")
const corsOptions = require("./config/corsOptions")
const cors = require('cors')
const app = express()

app.use(express.json())



app.use(cors({
    origin:"http://localhost:3000"
}))

app.use(cors(corsOptions));
const admin = require("./routes/adminRoute")
const user = require("./routes/userRoutes")
// for  route 
app.use("/", admin)
app.use("/user", user)
module.exports = app