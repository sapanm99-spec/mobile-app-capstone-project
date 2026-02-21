export function signup(username, email, password) {
  if (!username || !email || !password) {
    return "Error: All fields are required";
  }
  return "Signup successful";
}