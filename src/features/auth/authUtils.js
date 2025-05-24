// Authentication utilities
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false
  const user = localStorage.getItem("user")
  return user && JSON.parse(user).loggedIn
}

export const getCurrentUser = () => {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("foodServices")
  window.location.href = "/"
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 6
}
