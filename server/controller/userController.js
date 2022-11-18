
import User from '../schema/userSchema.js';

export const addUser = async(request, response)=> {
    const user = request.body;
    
    const newUser = new User(user);
    try {
        await newUser.save();
        response.status(201).json({newUser,message:"Added Successfully"});
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
}


export  const getUsers = async(request,response)=>{
    try {
            const users = await User.find({})
        
        response.status(200).json(users);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
}


export const deleteData = async (request,response)=>{
       
    try{
        await User.deleteOne({_id:request.params.id})
        const users = await User.find({})
        response.status(200).json({users,message:"Successfully Deleted"})
    }
    catch(error){
        response.status(400).json({message: error.message});
    }
}


export const getupdate = async (request,response)=>{
    let user = request.body;
    const editUser = new User(user)
    try {
        await User.updateOne({_id:request.params.id},editUser)
        response.status(201).json({editUser,message:"updated Succesfully"})
        } catch (error) {
            response.status(409).json({message: error.message})
        }
}

