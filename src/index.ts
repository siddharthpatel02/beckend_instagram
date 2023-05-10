const express=require ("express")
const app =express()
const port=8080
const cors = require('cors')
const signuprouter=require('./router/signUpRouter')
const signinrouter=require('./router/signInRouter')


// const bodyParser = require('body-parser');
app.use(cors())

app.use(express.json());
// app.use(bodyParser.json());
app.use("/signup",signuprouter)
app.use("/signin",signinrouter)





app.listen(port,()=>{console.log("server started")})


