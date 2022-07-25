const data=(req,res,db)=>{
    const {Title}=req.params;
    // console.log(Title);
    db.from(Title).select("*")
        .then(user=>{
            if(user.length){
                res.json(user);
            }
            else{
                res.status(400).json("Not Found");
            }
        }
        ).catch(err=>res.status(400).json(err));
}

export default data;