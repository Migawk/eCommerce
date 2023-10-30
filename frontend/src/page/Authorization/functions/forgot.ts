import { z } from "zod";

export function check() {
  const email = document.getElementById("forgotEmail").value;
  const password = document.getElementById("forgotPassword").value;

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
    case "forgotEmail":
      return {email: value};
    case "forgotPassword":
      return {password: value};
    default:
      return {message: "err"};
  }
}

export default {check, verify};
