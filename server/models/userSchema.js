import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
})

const userModel = mongoose.model('app-auth', userSchema)
export default userModel
