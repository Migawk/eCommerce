import styles from "./footer.module.sass";
import Input from "../Input/Input.tsx";

import visa from "../../../assets/png/visa.png";
import mastercard from "../../../assets/png/mastercard.png";
import paypal from "../../../assets/png/paypal.png";
import telegram from "../../../assets/svg/telegram.svg";
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";

export default function Footer({isOffer=true}: {isOffer?: boolean}) {
  return (
    <footer className={styles.footer}>

      {
        isOffer ? <div className={styles.panel}>
          <h1>
            Luminae Store
          </h1>
          <span>
            Register your email not to miss the last minutes off+ Free delivery
          </span>
          <form onSubmit={e => e.preventDefault()} method="post">
            <Input holder="Enter your email" type="email"/>
          </form>
        </div> : null
      }

      <nav className={[styles.nav, !isOffer ? styles.navTranslate: ""].join(" ")}>
        <div className={styles.navElement} id="company">
          <span>
            Company
          </span>
          <ul>
            <li>
              About Us
            </li>
            <li>
              Our Store
            </li>
            <li>
              Contact us
            </li>
          </ul>
        </div>
        <div className={styles.navElement} id="career">
          <span>
            Career Opportunities
          </span>
          <ul>
            <li>
              Selling Programs
            </li>
            <li>
              Advertise
            </li>
            <li>
              Cooperation
            </li>
          </ul>
        </div>
        <div className={styles.navElement} id="how">
          <span>
            How to Buy
          </span>
          <ul>
            <li>
              Making Payments
            </li>
            <li>
              Delivery Options
            </li>
            <li>
              Buyer Protection
            </li>
            <li>
              New User Guide
            </li>
          </ul>
        </div>
        <div className={styles.navElement} id="help">
          <span>
            Help
          </span>
          <ul>
            <li>
              Contacts Us
            </li>
            <li>
              FAQ
            </li>
            <li>
              Privacy Policy
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.basement}>
        <div className={styles.basementTop}>
          <div className={styles.basementPay}>
            <img src={visa}/>
            <img src={mastercard}/>
            <img src={paypal}/>
          </div>
          <select className={styles.basementLang}>
            <option>
              English
            </option>
            <option>
              Spanish
            </option>
            <option>
              Swedish
            </option>
          </select>
        </div>
        <div className={styles.basementBottom}>
          <div>
            165-179 Forster Road City of Monash, Melbourne, Australia
          </div>
          <div className={styles.basementCopyright}>
            ©2023 Copyright in reserved for lumine shop
          </div>
          <div className={styles.basementContacts}>
            <div>
              <img src={instagram}/>
            </div>
            <div>
              <img src={facebook}/>
            </div>
            <div>
              <img src={telegram}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
