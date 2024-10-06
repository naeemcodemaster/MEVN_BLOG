const httpStatus = require('http-status');
const {UserModel,BlogPostModel} = require('../models');
const ApiError = require('../utils/ApiError');
const GenerateToken = require('../utils/jwt.utils');



// Register User Service
const register = async (body)=>{
    const {name,email,password} = body;

    const existUser = await UserModel.findOne({email:email});

    if(existUser){
        throw new ApiError(httpStatus.BAD_REQUEST,"User Already Exist");
    }

    const user = await UserModel.create({
        name:name,
        email:email,
        password:password
    })

    // return user;
    return {msg:'User register successfully'}
}



// Login User Service
const login = async (body)=>{
    const {email,password} = body;

    const existUser = await UserModel.findOne({email:email});
    if(!existUser){
        throw new ApiError(httpStatus.NOT_FOUND,'User Not Exist');
    }

    const isMatch = await existUser.comparePassword(password);
    
    if(!isMatch){
        throw new ApiError(httpStatus.BAD_REQUEST,'Invalid Crendentials');
    }

    // return existUser;
    const token = await GenerateToken(existUser);
    return {msg:"Login Success",token};

}



// User Profile Service
const UserProfile = async(id)=>{
    return await UserModel.findById(id).select("-password");
}

// Create single Post
const createPost = async(user,body,file)=>{
    const {title,content,} = body;
    const existTitle = await BlogPostModel.findOne({title});
    if(existTitle){
        throw new ApiError(httpStatus.BAD_REQUEST,'Title already exist,Try Another Name')
    }
    const newTitle = title.split(" ").join("-");
    const model = await BlogPostModel.create({
        title:title,
        slug:newTitle,
        content:content,
        image:file?.filename,
        user:user
    })

    return model;
}


// Get All Post
const AllPosts = async()=>{
    // const posts =  await BlogPostModel.find({});
    const posts =  await BlogPostModel.find({_id:id,isDeleted:false}).populate("user","name email");
    return {posts,total:posts.length}
}   



// View Single Post
const SinglePost = async(id)=>{
    // const post = await BlogPostModel.findById(id);
    const post = await BlogPostModel.findById({_id:id,isDeleted:false}).populate("user","name email");
    return {post};
}


// delete Post
const DeletePost =  async(id)=>{
    // const post = await BlogPostModel.findById(id);
    const post = await BlogPostModel.findByIdAndUpdate(id,{
        isDeleted:true
    });
    return {msg:"Post Deleted"};
}

module.exports = {
    register,
    login,
    UserProfile,
    createPost,
    AllPosts,
    SinglePost,
    DeletePost
}