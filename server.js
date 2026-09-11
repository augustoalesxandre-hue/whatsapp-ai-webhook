const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>res.send("OK"));

app.get("/webhook",(req,res)=>{
if(req.query["hub.verify_token"]===process.env.VERIFY_TOKEN){
return res.send(req.query["hub.challenge"]);
}
res.sendStatus(403);
});

app.post("/webhook",(req,res)=>{
console.log(req.body);
res.sendStatus(200);
});

app.listen(process.env.PORT||10000);
