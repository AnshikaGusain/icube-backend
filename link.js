const link=(req,res,db)=>{
    const {title,category}=req.body;
    db.from(category).select('*').where({title})
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