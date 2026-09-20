import userModel from "../models/user.model.js"

const createUser = async (req,res) => {
  try {
    const data = req.body
    await userModel.create({
      name:data.name,
      password:data.password,
      email:data.email
    })
    res.status(201).json({
      message:"user"
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}
//get users
const getusers = async(req,res) => {
  try {
  const users = await userModel.find()
    res.status(200).json({
      message:"users fatched",
    allusers:users,
    })
  } catch (error) {
    message:error.message
  }
}
//delete users
const deleteusers =async (req,res) => {
  try {
  const id = req.params.id
    const user = await userModel.findOneAndDelete({
      _id:id
    })
    res.status(201).json({
      message:"user deleted successfuly"
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}
export {createUser,getusers,deleteusers}