export function createAdminParams() {
  const user = {
    name: "John",
  };
  const age = +prompt("Введите возраст:");
  user.age = age;
  const admin = Object.assign(user, { role: "admin" });
  const { name, role } = admin;

  return `${name}, ${age}, ${role}`;
}
