import express from "express";
import knex from "knex";
import data from "./data.js";
import cors from "cors";
import link from "./link.js";

// const corsOptions={
//   origin:'*',
//   credentials:true,
//   optionSuccessStatus:200,
// }

const app=express();
app.use(express.json());
app.use(cors());

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
const db = knex({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
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

app.listen(process.env.PORT || 3000,()=>{
    console.log("Running");
})