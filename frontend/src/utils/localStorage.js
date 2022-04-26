export const addUserToLocalStorage = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  return localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
