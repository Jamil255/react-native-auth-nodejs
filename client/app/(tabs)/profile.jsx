import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { logoutAction } from '../(redux)/slice/authSlice'
import { useRouter } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  //   console.log(state?.user?.email);
  //   console.log("user",user.email)

  const handleLogout = () => {
    dispatch(logoutAction())
    router.push('/auth/login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {'user' ? (
        <>
          <Text style={styles.text}>Email:{'email' || '@gmail.com'}</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.text}>No user logged in</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
