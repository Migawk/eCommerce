import styles from "./auth.module.sass";

import Input from "../../components/main/Input/Input";
import Button from "../../components/main/Button/Button";

import google from "../../assets/png/Google.png";
import warning from "../../assets/svg/warning.svg";
import arrowLeft from "../../assets/svg/longArrowLeft.svg";

export default function Authorization() {
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
        <form className={styles.fields}>
          <Input
            holder="Email adress"
            type="email"
            border={true}
            isRequired={true}
            label="Email"/>
          <Input
            holder="Password"
            type="password"
            border={true}
            isRequired={true}
            label="Password"/>
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
            <Button style="dark" disabled={true}>SIGN IN</Button>
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
            type="text"
            border={true}
            isRequired={true}
            label="Name"/>
          <Input
            holder="Email adress"
            type="email"
            border={true}
            isRequired={true}
            label="Email"/>
          <Input
            holder="Password"
            type="password"
            border={true}
            isRequired={true}
            label="Password"/>
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
            <Button style="dark" disabled={true}>SIGN UP</Button>
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
