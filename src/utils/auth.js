export function getCurrentAuth() {
  return ['user']
}

export function check(auth) {
  const current = getCurrentAuth()
  return current.some(item => auth.includes(item))
}

export function isLogin() {
  const current = getCurrentAuth()
  return current && current[0] !== 'guest'
}