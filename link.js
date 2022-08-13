const link=(req,res,db)=>{
    const {s_no,category}=req.body;
    db.from(category).select('*').where({s_no})
    .then(item=>{
        if(item.length){
            res.json(item[0])
        }
        else{
            res.status(400).json("Not Found");
        }
    })
    .catch(err=>res.status(400).json("err"));
    
}

export default link;