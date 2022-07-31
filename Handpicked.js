const Handpickeddata=(req,res,db)=>{
    const {category}=req.body;
    db.from("handpicked").select("*").where({category})
        .then(user=>{
            if(user.length){
                res.json(user);
            }
            else{
                res.status(400).json("Not Found");
            }
        })
        .catch(err=>res.status(400).json(err));
}

export default Handpickeddata;