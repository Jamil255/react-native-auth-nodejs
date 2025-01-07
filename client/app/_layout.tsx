import { Stack } from 'expo-router'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './(services)/queryClient'
import AppWrapper from './(redux)/AppWrapper'
import { Provider } from 'react-redux'
import store from './(redux)/store'
const RootLayout = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </Provider>
  )
}

export default RootLayout
