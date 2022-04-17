const router = require("express").Router();
const User =require("../models/User");
const Post = require("../models/Post")


//CREATE POST
router.post("/", async (req, res) => {
    console.log("Creating  New Post !");
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
        console.log("New Post has been created !");
    } catch (err) {
        res.status(500).json(err);
    }
  });

// UPDATE POST
router.put("/:id", async (req,res) => {    // post updated with the post unique id not the user id. if post exist , user has to exist .
    try{
      console.log("Post Update Request received !")
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
          try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set:req.body
              },{new: true});
              res.status(200).json(updatedPost);
              console.log("Post Updated Successfully !")
          }catch(err){

          }
        } else{
          res.status(401).json("You can update only your post !");
        }
    } catch(err){
      res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async (req,res) => {    // post updated with the post unique id not the user id. if post exist , user has to exist .
  try{
    console.log("Post delete Request received !")
      const post = await Post.findById(req.params.id);
      if(post.username === req.body.username){
        try{
            await post.delete();
            res.status(200).json("Post has been deleted !");
            console.log("Post deleted Successfully !")
        }catch(err){

        }
      } else{
        res.status(401).json("You can delete only your post !");
      }
  } catch(err){
    res.status(500).json(err);
  }
});
//GET POST
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});
// GET ALL POST
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.cat;
  console.log("Fetch request for posts with query ",username,category);
  try {
    let posts;
    if(username){
      posts = await Post.find({username});
    } else if(category){
      posts = await Post.find({categories:{
        $in:[category]
      }});
    }else{
      posts = await Post.find();
    }
    res.status(200).json(posts);
    console.log("fetched all the relevant posts from : ",username,category);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;