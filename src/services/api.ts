
const API_BASE_URL = 'https://blogapi-yn0r.onrender.com/api/v1'
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options)
  if(!response.ok){

    throw new Error ('Something went wrong')
  }
  return response.json()
}

export async function login(email: string, password: string) {
  return apiRequest('/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
}

export async function register(
  username: string,
  email: string,
  password: string,
  role: 'reader' | 'author'

) {
  return apiRequest('/auth/register/',{
    method:'POST',
    headers:{
      'Content-Type':'application/JSON',

    },
    body: JSON.stringify({
      username,
      email,
      password,
      role,
    }),
  })
}


export function saveTokens(access: string, refresh:string){
  localStorage.setItem('accessToken', access)
  localStorage.setItem('refreshToken', refresh)
}

export function getAccessToken() {
  return localStorage.getItem('accessToken')
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken')
}

export function clearTokens() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export async function refreshAccessToken() {
  const refreshToken = getRefreshToken()
  if(!refreshToken) {
    throw new Error('No refresh token found')
  }

  const data = await apiRequest('/auth/token/refresh/', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh:refreshToken,
    }),
  })


saveTokens(data.access, refreshToken)
return data.access
}

export async function authenticatedRequest (
  endpoint: string,
  options: RequestInit = {}
) {
  const accessToken = getAccessToken()
  if (!accessToken) {
    throw new Error('No access token found')
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  })

if (!response.ok) {
  throw new Error ('something went wrong')
}


return response.json()

}

export async function logout() {
  const refreshToken = getRefreshToken()
  if(!refreshToken) {
    clearTokens()
    return
  }
  await apiRequest('/auth/logout/', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      refresh:refreshToken,
    }),
  })
  clearTokens()
}
