const express = require('express');
const Posts = require('../models/pay');
 
const router = express.Router();

//save posts

router.post('/payment/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Posts saved successfully"
        });

    });

});


//get posts

router.get('/payments',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
//get a specific post

router.get("/payment/:id",(req,res)=>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
            return res.status(200).json({
                success:true,
                post
            });
   
   
    });

});

    //update posts

    router.put('/payment/update/:id',(req,res)=>{
        Posts.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,post)=>{
                if(err){
                    return res.status(400).json({error:err});
                }

                return res.status(200).json({
                    success:"Updated Succesfully"
                });
            }
        );
    });


});
 
//delete post

router.delete('/payment/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({

            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
}); 


module.exports = router;