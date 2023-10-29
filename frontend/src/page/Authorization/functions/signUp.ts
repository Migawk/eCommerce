import { z } from "zod";

export function check() {
  const name = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  const { success, error } = z.object({
    name: z.string().min(3, {message: "Small"}).max(20, {message: "Long"}),
    email: z.string().min(5, {message: "Small"}).max(50, {message: "Long"}).email("Invalid Email"),
    password: z.string().min(8, {message: "Small"}).max(50, {message: "Long"})
  }).safeParse({name, email, password});

  if(!success) return {isOk: false}; // later would be nice add dirty field

  return {isOk: true};
}

export function verify(e) {
  const { value } = e.target;

  switch (e.target.id) {
    case "signUpName":
      return {name: value};
    case "signUpEmail":
      return {email: value};
    case "signUpPassword":
      return {password: value};
    default:
      return {message: "err"};
  }
}

export default {check, verify};
