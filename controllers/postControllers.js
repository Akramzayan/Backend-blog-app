import post from "../models/Post.js";
import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import Post from "../models/Post.js";
import {v4 as uuidv4}    from 'uuid'

export const createPost = async (req, res, next) => {
  try {
    const post = new Post({
        title: "sample title",
        caption:'sample caption',
        slug:uuidv4(),
        body:{
            type:"doc",
            content:[],

        },
        photo:"",
        user:req.user._id,


    })
    const createdPost = await post.save();
    return res.json(createPost)

 
  } catch (error) {
    next(error);
  }
};


export {
    createPost,  
};
