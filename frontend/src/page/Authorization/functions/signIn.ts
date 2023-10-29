import { z } from "zod";

export function check() {
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  const { success, error } = z.object({
    email: z.string().min(5, {message: "Small"}).max(50, {message: "Long"}).email("Invalid Email"),
    password: z.string().min(8, {message: "Small"}).max(50, {message: "Long"})
  }).safeParse({email, password});

  if(!success) return {isOk: false}; // later would be nice add dirty field

  return {isOk: true};
}

export function verify(e) {
  const { value } = e.target;

  switch (e.target.id) {
    case "signInEmail":
      return {email: value};
    case "signInPassword":
      return {password: value};
    default:
      return {message: "err"};
  }
}

export default {check, verify};
