import dotenv from "dotenv";
import express from "express";
import knex from "knex";
import data from "./data.js";
import cors from "cors";
import link from "./link.js";
import Handpickeddata from "./Handpicked.js";
import Category from "./category.js";




dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
//   });

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : process.env.HOST,
    port : 5432,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  }
});


app.set("db",db);

// app.options('*', cors());

app.get('/',(req,res)=>{
    console.log(process.env.HOST);
    res.json("Working");
})

app.get('/data/:Title',(req,res)=>{
    data(req,res,db);
})

app.post('/link',(req,res)=>{
  link(req,res,db);
})

app.post('/handpicked',(req,res)=>{
  Handpickeddata(req,res,db);
})
app.post('/category',(req,res)=>{
  Category(req,res,db);
})


app.listen(process.env.PORT || 3000,()=>{
    console.log("Running");
})