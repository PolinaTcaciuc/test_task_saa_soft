export function validateLogin(login: string): boolean {
  return !!login && login.length <= 100
}

export function validatePassword(password: string): boolean {
  return !!password && password.length <= 100
}
