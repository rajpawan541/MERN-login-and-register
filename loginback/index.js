const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
      extended: true,
    }),
  );
app.use(cors())

mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/mylogin',{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

const User = new mongoose.model("User",userSchema)


app.post("/",(req,res)=>{
    res.send("My app")
})


app.post("/login",(req,res)=>{
    const {email , password}  = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login successfull",user:user})
            }else{
                res.send({message:"Password didn't match"})
            }

        }else{
            res.send({message:"user not found"})
        }
    })
})

app.post("/register",(req,res)=>{
    const {name, email , password}  = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                  res.send(err)
                }else{
                    res.send({message:"success; Please login now"})
            }
        })

        }
    })
    
})

app.listen(9002,()=>{
    console.log("Started")
})




