

export default function useAPI(){
  const API_USERS_URL = 'https://reqres.in/api/users'
  const API_USER_LOGIN = 'https://reqres.in/api/login'

  const loadUserList = async () => {
    const response = await fetch(API_USERS_URL).then(result => result.json())
    const list = response.data
    return list
  }
  
  return {
    loadUserList
  }
}