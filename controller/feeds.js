const jsonWebToken = require('jsonwebtoken')

exports.getPost = ((req, res, nex) => {
    //this will get parameter 
    //parameter -1 --> validity for the token 
    //parameter -2 --> this is a secret token which is creted by us this seret token can't debug by others 
    //parameter -3 --> this parameter can be used for expiery of the token 
    let token = jsonWebToken.sign({
        date:new Date
    },"dsbsfgouefgpujsgijlsdvdfhhrrlgjierhs",
{
  expiresIn:40
}
)
    //we can able to encrypt the data and send through the token
    //sign --> header and payload using this to thing to make one encrypted token map the thing genarate a thing
    res.status(200).json({
        posts: [{
            _id:'1',
            title: 'first post',
            content:'this is our first post',
            creator:{
                name:'sabarinathan'
            },
            createdAt:new Date(),
            token:token
        }]
    });
});

exports.getveifytoken =  (async(req,res) =>{
    console.log(req.params.token);
    //here verify the given token is valid
    let token = req.params.postId;

    try{
        let tokenResult = await jsonWebToken.verify(token,"dsbsfgouefgpujsgijlsdvdfhhrrlgjierhs");
        console.log(tokenResult)
    if(tokenResult){
        res.json({
            message:"success"
        })
        //we can able to see this data when we pass the token as a params
    }
    else{
        res.status(500).json({
            message:"Something Went Wrong"
        })
    }
       
    }

    catch (error){
        res.status(401).json({message:"error"})
    }

})



exports.createPost = ((req,res,next)=>{
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message:'post created successfuly',
        posts:{
            id:new Date().toString(),
            title: title,
            content: content
        }
    })
})