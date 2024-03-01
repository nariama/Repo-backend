const express = require('express')
const cors = require('cors')
const multer = requiere('multer')

const app = express()
app.use(cors())
app.use(express.json())

const storage =multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./cv/Cvtalentos")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const   upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file)

})

app.listen(3001,() => {
    console.log("server is running")
})