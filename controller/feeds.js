exports.getPost = ((req, res, nex) => {
    res.status(200).json({
        posts: [{
            title: 'first post',
            content:'this is our first post'
        }]
    });
});

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