const Category=(req,res,db)=>{
    const {type}=req.body;
    // console.log(Title);
    db.from("category").select("*").where({type})
        .then(user=>{
            if(user.length){
                res.json(user);
            }
            else{
                res.status(400).json("Not Found");
            }
        })
        .catch(err=>res.status(400).json("err"));
}

export default Category;