const link=(req,res,db)=>{
    const {title}=req.body;
    db.from('buy').select('link').where({title})
    .then(item=>{
        if(item.length){
            res.json(item[0].link)
        }
        else{
            res.status(400).json("Not Found");
        }
    })
    .catch(err=>res.json("err"));
    
}

export default link;