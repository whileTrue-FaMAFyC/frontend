export function logOut() {
  localStorage.deleteItem("user");
  localStorage.deleteItem("username");
}
