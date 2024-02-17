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


    })

 
  } catch (error) {
    next(error);
  }
};


export {
    createPost,  
};
