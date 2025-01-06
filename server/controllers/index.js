import userModel from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signupControllers = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({
        message: 'all fields is required',
        status: false,
      })

    const user = await userModel.findOne({ email })
    if (user !== null) {
      return res.status(400).json({
        message: 'email is already exists',
        status: false,
      })
    }

    const userPass = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({
      ...req.body,
      password: userPass,
    })

    const userResponse = newUser.toObject()
    delete userResponse.password
    return res.status(201).json({
      message: 'user signup successfully',
      data: userResponse,
      status: true,
    })
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      stack: error.stack,
      status: false,
    })
  }
}

const loginControllers = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({
        message: 'all fields is required',
        status: false,
      })

    const user = await userModel.findOne({ email })
    if (!user == null) {
      return res.status(400).json({
        message: 'email and password Invaild',
        status: false,
      })
    }

    const hashPass = await bcrypt.compare(password, user.password)

    if (!hashPass) {
      return res.status(400).json({
        message: 'email and password Invaild',
        status: false,
      })
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user?.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: '10m' }
    )

    return res.status(200).json({
      message: 'user successfully login',
      token,
      status: true,
    })
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      stack: error.stack,
      status: false,
    })
  }
}

const getProfileController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      stack: error.stack,
      status: false,
    })
  }
}

export { signupControllers, loginControllers, getProfileController }
