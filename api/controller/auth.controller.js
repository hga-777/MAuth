import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
   const {username , email , password} = req.body;
   const hashedPassord = bcryptjs.hashSync(password,10);  //to encrypt password
   const newUser = new User({username , email , password:hashedPassord}); //if key and value has same value then we can omit one thing
   try{
       await newUser.save();
       res.status(201).json({message : "User created successfully!"});
   }
   catch(error){
       res.status(500).json(error.message);
   }

};