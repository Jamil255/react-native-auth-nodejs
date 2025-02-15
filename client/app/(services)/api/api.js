import axios from 'axios'
const loginUser = async (user) => {
  const response = await axios.post(
    'http://localhost:8000/api/v1/user/login',
    user,
    {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return response.data
}
const registerUser = async (user) => {
  const response = await axios.post(
    'http://localhost:8000/api/v1/user/register',
    user,
    {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return response.data
}

export  { loginUser, registerUser }
