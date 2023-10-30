import styles from "./auth.module.sass";

import Input from "../../components/main/Input/Input";
import Button from "../../components/main/Button/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import google from "../../assets/png/Google.png";
import warning from "../../assets/svg/warning.svg";
import arrowLeft from "../../assets/svg/longArrowLeft.svg";
import email from "../../assets/jpg/email.jpg";

import { useState, useEffect } from "react";
import forgotF from "./functions/forgot.ts";

export default function Forgot() {

  const [forgot, setForgot] = useState({
    email: "",
    password: "",
    isOk: false
  });
  const [popUp, setPopUp] = useState<false | {email: string}>(false);

  function verifyForgot(e) {
    setForgot(pr => { return {...pr, ...forgotF.verify(e)} });
    if(!forgotF.check().isOk) return setForgot(pr => { return {...pr, isOk: false}});
    return setForgot(pr => { return {...pr, isOk: true}});
  }

  function submit(e) {
    e.preventDefault();
    const {forgotEmail: email, forgotPassword: password} = e.currentTarget;
    setPopUp({email: email.value});
  }
  return (
    <>
      <Helmet>
        <title>Authorization</title>
      </Helmet>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <a href="/authorization">
            <img src={arrowLeft}/>
            Back to login
          </a>
        </nav>
        <article className={styles.typeField}>
          <div className={styles.boxForgot}>
            <div className={styles.title}>
              <h2>Forgot password</h2>
              <p>Enter your email adress to reacquisition to your password.</p>
            </div>
            <form className={styles.fields} onSubmit={submit}>
              <Input
                holder="Email adress"
                id="forgotEmail"
                type="email"
                border={true}
                isRequired={true}
                label="Email"
                onEdit={verifyForgot}/>
              <Input
                holder="Password"
                id="forgotPassword"
                type="password"
                border={true}
                isRequired={true}
                label="Password"
                onEdit={verifyForgot}/>
              <div className={styles.buttons}>
                <Button style="dark" disabled={!forgot.isOk}>RESET PASSWORD</Button>
              </div>
              <div className={[styles.message, styles.forgotMessage].join(" ")}>
                Don’t have an account? <Link className={styles.message} to="/authorization">Sign up</Link>
              </div>
            </form>
          </div>
        </article>
        {
            popUp && <div className={styles.window}>
              <div>
                <img src={email} alt="Congratulation, blue confetti in image!" width="90"/>
                <b>Check your email</b>
                <p>
                  We have just sent you your new confirmation email to
                </p>
                <b>{popUp.email}.</b>
                <button onClick={() => setPopUp(false)}>
                  <Button>I understood</Button>
                </button>
              </div>
            </div>
        }
      </main>
    </>
  )
}
