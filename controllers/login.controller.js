const passport = require("passport");
const { RegisterModel } = require("../Models/register.model")

const loginUser = (req, res) => {
    const user = new RegisterModel({
        username : req.body.username,
        password : req.body.password
    });
    req.login(user, (err)=>{
        if(err) {
            console.log(err);
        }else {
            passport.authenticate("local")(req,res,()=>{
                res.json({ Message : "login successfully...", userID: user._id, user : user });
            });
        }
    });
}

module.exports = {
    loginUser
}