import { createSlice } from '@reduxjs/toolkit'
export const getUserFromLoocal = () => {
  const userInfo = localStorage.getItem('user')
  return userInfo ? JSON.parse(userInfo) : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: true,
  },
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload
      state.isLoading = false
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logoutAction: (state, action) => {
      state.user = null
      state.isLoading = false
      localStorage.clear()
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    getUser: (state, action) => {
      //   state.user =localStorage.getItem("user")
      const user = getUserFromLoocal()
    },
  },
})

export const { loginAction, logoutAction, setLoading, setUser } =
  authSlice.actions

export default authSlice

// export const getUser = (dispatch) => {
//   const user = getUserFromLoocal()
//   console.log(user)
//   if (user) {
//     dispatch(setUser(user))
//   }
// }
