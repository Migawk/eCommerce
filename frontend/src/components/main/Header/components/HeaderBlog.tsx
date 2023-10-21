import logo from "../../../../assets/png/Logo.png";
import instagram from "../../../../assets/svg/instagram.svg"
import telegram from "../../../../assets/svg/telegram.svg"
import facebook from "../../../../assets/svg/facebook.svg"

import styles from "../Header.module.sass"

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <Link className={styles.logo} to="/">
                    <div className="ico"><img src={logo} /></div>
                    <div className="text">Luminae</div>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="#">News</Link></li>
                        <li><Link to="#">Fashion</Link></li>
                        <li><Link to="#">Health</Link></li>
                        <li><Link to="#">Tech</Link></li>
                        <li><Link to="#">Science</Link></li>
                    </ul>
                </nav>
                <div className={[styles.contacts, styles.contactsSpec].join(" ")}>
                    <button><img alt="contact us in instagram" src={instagram} /></button>
                    <button><img alt="contact us in facebook" src={facebook} /></button>
                    <button><img alt="contact us in telegram" src={telegram} /></button>
                </div>
            </div>
        </header>
    )
}
