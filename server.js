import express from "express";
import knex from "knex";
import data from "./data.js";
import cors from "cors";
import link from "./link.js";
const app=express();
app.use(express.json());
app.use(cors());

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'An$hika13#',
    database : 'endource'
  }
});

app.set("db",db);

app.get('/',(req,res)=>{
    res.json("Working");
})

app.get('/data/:Title',(req,res)=>{
    data(req,res,db);
})

app.post('/link',(req,res)=>{
  link(req,res,db);
})

app.listen(3000,()=>{
    console.log("Running");
})