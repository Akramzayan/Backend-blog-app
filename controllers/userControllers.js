import User from "../models/User.js"


export const registerUser = async(req,res,next) => {
    try {
        const {name,email,password} =req.body;
        //check if the user exists or not
        let user = await User.findOne({email});
        if(user) {
            //return res.status(400).json({message:"User is Already Exists With this Email"})
            throw new Error("User is Already Exists With this Email");
        }   
        //Create a new user
        user = await User.create({
            name,
            email,
            password,
        });
        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            token:await user.generateJWT()
          });


    } catch (error) {
        
    next(error);
    }
}

export const loginUser = async(req,res,next) => {
    try {
        const {email,password} =req.body;
        let user = await User.findOne({email});
        if(!user){
            throw new Error("User is Not Found With this Email");
        }
        if(await user.comparePassword(password)){
            return res.status(200).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                token:await user.generateJWT()
              });
        }
        else {
            throw new Error("Invalid Email Or Password");
        }
    } catch (error) {
        next(error);
        
    }
}
export const userProfile = async(req,res,next) => {
    try {
        let user = await User.findById(req.user._id);
        if(user){
            return res.status(200).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                
              });
        }
        else{
            let error = new Error("User not found");
            error.statusCode=404;
            next(error)
        }
        
    } catch (error) {
        next(error);
        
    }

}
export {registerUser,loginUser,userProfile}