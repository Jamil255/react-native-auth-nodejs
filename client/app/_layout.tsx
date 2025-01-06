import { Stack } from 'expo-router'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './(services)/queryClient'
const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  )
}

export default RootLayout
