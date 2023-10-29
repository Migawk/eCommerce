import styles from "./auth.module.sass";

import Input from "../../components/main/Input/Input";
import Button from "../../components/main/Button/Button";

import google from "../../assets/png/Google.png";
import warning from "../../assets/svg/warning.svg";
import arrowLeft from "../../assets/svg/longArrowLeft.svg";

import { useState, useEffect } from "react";
import signInF from "./functions/signIn.ts";
import signUpF from "./functions/signUp.ts";

interface ISignIn {
  email: string;
  password: string;
  isOk: boolean;
}
interface ISignUp extends ISignIn {
  name: string;
}
export default function Authorization() {
  const [signUp, setSignUp] = useState<ISignUp>({
    name: "",
    email: "",
    password: "",
    isOk: false
  });
  const [signIn, setSignIn] = useState<ISignIn>({
    email: "",
    password: "",
    isOk: false
  });

  function verifySignIn(e) {
    setSignIn(pr => { return {...pr, ...signInF.verify(e)} });
    if(!signInF.check().isOk) return setSignIn(pr => { return {...pr, isOk: false}});
    return setSignIn(pr => { return {...pr, isOk: true}});
  }
  function signInSubmit(e) {
    e.preventDefault();
    const {signInEmail: email, signInPassword: password} = e.target;

    console.log({email: email.value, password: password.value});
  }
  function verifySignUp(e) {
    setSignUp(pr => { return {...pr, ...signUpF.verify(e)} });
    if(!signUpF.check().isOk) return setSignUp(pr => { return {...pr, isOk: false}});
    return setSignUp(pr => { return {...pr, isOk: true}});
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <a href="/">
          <img src={arrowLeft}/>
          Back to the website
        </a>
      </nav>
      <article className={styles.typeField}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h2>Sign in</h2>
        </div>
        <form className={styles.fields} onSubmit={signInSubmit}>
          <Input
            holder="Email adress"
            id="signInEmail"
            type="email"
            border={true}
            isRequired={true}
            label="Email"
            onEdit={verifySignIn}/>
          <Input
            holder="Password"
            id="signInPassword"
            type="password"
            border={true}
            isRequired={true}
            label="Password"
            onEdit={verifySignIn}/>
          <div className={styles.fieldsBottom}>
            <div>
              <label className={styles.label}>
                <input type="checkbox"/>
                <span>Remember for 30 days</span>
              </label>
            </div>
            <a href="/forgot" className={styles.forgotPassword}>Forgot password</a>
          </div>
          <div className={styles.buttons}>
            <Button style="dark" disabled={!signIn.isOk}>SIGN IN</Button>
            <div className={styles.buttonsDivider}>
              <div className={styles.buttonsDividerElement}>OR</div>
            </div>
            <Button style="dark">
              <img src={google}/>
              <span>sign in by google</span>
            </Button>
          </div>
          <div className={styles.message}>
            <img src={warning}/>Sign up to  save $9 for free shipping with Ausff company through australlian territory
          </div>
        </form>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>
          <h2>Sign up</h2>
        </div>
        <form className={styles.fields}>
          <Input
            holder="Name"
            id="signUpName"
            type="text"
            border={true}
            isRequired={true}
            label="Name"
            onEdit={verifySignUp}/>
          <Input
            holder="Email adress"
            id="signUpEmail"
            type="email"
            border={true}
            isRequired={true}
            label="Email"
            onEdit={verifySignUp}/>
          <Input
            holder="Password"
            id="signUpPassword"
            type="password"
            border={true}
            isRequired={true}
            label="Password"
            onEdit={verifySignUp}/>
          <div className={styles.fieldsBottom}>
            <div>
              <label className={styles.label}>
                <input type="checkbox"/>
                <span>
                  Terms and conditions agreement should start with an introduction
                  that lets users know they’re reading a terms and conditions agreement
                </span>
              </label>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button style="dark" disabled={!signUp.isOk}>SIGN UP</Button>
            <div className={styles.buttonsDivider}>
              <div className={styles.buttonsDividerElement}>OR</div>
            </div>
            <Button style="dark">
              <img src={google}/>
              sign up by google
            </Button>
          </div>
        </form>
      </div>
      </article>
    </main>
  )
}
