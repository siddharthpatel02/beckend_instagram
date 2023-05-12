
const express=require ("express")
const app =express()
const multer  = require('multer')
const port=8080
const cors = require('cors')
const signuprouter=require('./router/signUpRouter')
const signinrouter=require('./router/signInRouter')
const path=require("path")


// const bodyParser = require('body-parser');
app.use(cors())

app.use(express.json());
// app.use(bodyParser.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, path.join(__dirname, '/uploads'))
       console.log(__dirname)
    },  
    filename: function (req, file, cb) { 
        console.log(file)
       cb(null, Date.now()+path.extname(file.originalname ))
    }
  })
  const upload=multer({storage:storage}) 
  

app.use("/signup",signuprouter)
app.use("/signin",signinrouter)
app.post("/upload",upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.status(200).send("file uploaded")
})





app.listen(port,()=>{console.log("server started")})


