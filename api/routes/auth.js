const router = require("express").Router();
const User =require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async(req,res)=>{
    try{
        console.log("received register request !");
        // check if user already registered or username has already been taken
        try{
        const existUsername = await User.findOne({ username: req.body.username});
        if (existUsername) {
            console.log('username taken');
            const err = new Error("this Username has been Taken try another username !")
            throw err;
            
        }
    }catch(err){
        res.status(400).json("This Username has been Taken try another username ! ")
    }
        // if username has not been taken , then register this new username in the database !
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass                            // req.body.password,
        });

        const user = await newUser.save();
        res.status(200).json(user);  //sends back the user

        console.log("user registered successfully !");
    }catch(err){
        res.status(500)
    }
});
// LOGIN 
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong credentials  !");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials !");
        const { password, ...rest } = user._doc;

        res.status(200).json(rest);
        console.log("Logged in Successfully !")
    } catch(err) {
        res.status(500);
    };
});



module.exports = router;