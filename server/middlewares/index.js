import jwt from 'jsonwebtoken'
const isAuthenticated = async (req, res, next) => {
  try {
    const headerObj = req.headers
    const token = headerObj.authorization.split(' ')[1]
    const verifyToken = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (error, decoded) => {
        if (error) {
          return res.status(401).json({
            message: 'unauthorized access',
          })
        } else return decoded
      }
    )
    if (verifyToken) {
      req.user = verifyToken._id
    }
    return next()
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      stack: error.stack,
      status: false,
    })
  }
}

export default isAuthenticated
