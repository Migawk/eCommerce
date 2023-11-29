import styles from "./customer.module.sass";

import { useUser } from "/src/store/user.ts";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import calendar from "../../assets/svg/calendar.svg";
import clients from "../../assets/svg/clients.svg";
import company from "../../assets/svg/company.svg";
import dashboard from "../../assets/svg/dashboard.svg";
import help from "../../assets/svg/help.svg";
import orders from "../../assets/svg/order.svg";
import favorite from "../../assets/svg/heartFilled.svg";


export default function Customer() {
  const user = useUser(state => state.user);



  if(user === null) return <>
      <Helmet>403 Forbidden</Helmet>
      <main>
        <h1>You must be logged in</h1>
        <Link to="/authorization">Authorization</Link>
      </main>
    </>;
  return (
    <>
      <Helmet>
        <title>Customer</title>
        <meta name="theme-color" content="#319197"/>
      </Helmet>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            <li>
              <button>
                <img src={dashboard}/> Dashboard
              </button>
            </li>
            <li>
              <button>
                <img src={orders}/> Orders
              </button>
            </li>
            <li>
              <button>
                <img src={favorite}/>Favorite
              </button>
            </li>
            <li>
              <button>
                <img src={orders}/>Own-Products
              </button>
            </li>
            <li>
              <button>
                <img src={clients}/>Clients
              </button>
            </li>
            <li>
              <button>
                <img src={calendar}/>Calendar
              </button>
            </li>
            <li>
              <button>
                <img src={clients}/>Security
              </button>
            </li>
            <li>
              <button>
                <img src={help}/>Help
              </button>
            </li>
          </ul>
        </aside>
        <article className={styles.panel}>
          <h1>Last actions for you:</h1>
          <section>
          </section>
          <section>
          </section>
        </article>
      </main>
    </>
  )
}
