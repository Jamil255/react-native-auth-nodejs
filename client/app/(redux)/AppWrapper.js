import { Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser, setUser } from './slice/authSlice'
const AppWrapper = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const user = localStorage.getItem('user')
    dispatch(setUser('user', JSON.parse(user)))
  }, [dispatch])
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/register" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AppWrapper
