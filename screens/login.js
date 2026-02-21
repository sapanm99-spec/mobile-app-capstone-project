export function login(email, password) {
  if (!email || !password) {
    return "Login error";
  }
  return "Login successful";
}