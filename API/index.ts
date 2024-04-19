import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import cors from 'cors'
import path from 'path'
import {User, UserJSON} from "./Model/User"

const app = express()
const port = 3000

const ACCESS_TOKEN_SECRET = "ACCESS_SECRET"
const REFRESH_TOKEN_SECRET = "REFRESH_SECRET"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const mockUser: User = new User("user1", "1234");

const posts = [
    {username: "user1", title: "some title 1"},
    {username: "user1", title: "some title 2"},
    {username: "user1", title: "some title 3"},
    {username: "user1", title: "some title 4"},
    {username: "user1", title: "some title 5"},
    {username: "user1", title: "some title 6"},
]

let refreshTokens: string[] = []


app.listen(port,()=>console.log("working on port:" + port))




app.get("/posts",authenticateToken,(req,res)=>{
    res.json(posts.filter(e=>e.username === req.body.user.name))
    // res.json(req.body.user)
})

app.post("/login",(req,res)=>{
    //Authentication
    const username = req.body.name; 
    const user = {name: username}
    console.log(user)

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET);
    
    //  add to mock database
    refreshTokens.push(refreshToken);

    res.json({accessToken, refreshToken});
})



app.post('/token', (req: any,res: any)=>{
    const refreshToken = req.body.token
    if(refreshToken == null ) return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return  res.sendStatus(403)
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, el: any)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: el.name});
        res.json({accessToken})
    });
})

app.delete("/logout", (req,res) => {
    refreshTokens = refreshTokens.filter(e => e !== req.body.token)
    res.sendStatus(204);
})




function authenticateToken(req:any,res:any,next:any) {
    //  Bearer TOKEN
    const authHeader = req.headers["authorization"]
    //  log
    console.log(authHeader)   
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any,el: any)=>{
        if(err) return res.sendStatus(403);
        req.body.user = el;
        next();
    })
}

function generateAccessToken(user: any){
    return jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: 30})// 30 second =  30s  60 seconds = 60s = 1m
}