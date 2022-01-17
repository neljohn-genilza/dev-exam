import { useState, useEffect } from 'react'
import axios from 'axios'

import { User } from './types/User'
import UserInfo from './components/user/UserInfo'

const App = () => {
  const userProfile: User = {
    email: '',
    name: {
      title: '',
      first: '',
      last: ''
    }
  }

  const [user, setUser] = useState(userProfile)

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await axios.get('https://randomuser.me/api')
    const data = await response.data
    const { name, email } = data.results[0]
    localStorage.setItem('user', JSON.stringify({ email, name }))
    setUser(JSON.parse(localStorage.getItem('user') || userProfile.toString()))
  }

  return user.email 
    ? <UserInfo user={user} onChangeUser={getUser} /> 
    : <h4>Loading...</h4>
}

export default App
