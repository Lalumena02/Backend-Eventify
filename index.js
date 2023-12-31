require("dotenv").config()
const express = require('express')
const app = express()
const router = require('./routes/router')
const cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use(router)

app.use((req, res) => {
    res.statusCode = 404
    res.send("Page Not Found")
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

