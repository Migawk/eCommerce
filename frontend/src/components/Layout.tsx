import Header from "./main/Header/Header";
import Footer from "./main/Footer/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../store/user.ts";
import { useItems } from "../store/main.ts";

interface ILayout {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const items = useItems(state => state.items);

  const user = useUser(state => state.user);
  const setUser = useUser(state => state.setUser);

  useEffect(() => {console.log(items)}, [items]);

  useEffect(() => {
    if(!user) {
      const localUser = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
      if(!localUser) return;
      setUser(localUser);
    }
  }, [])

  const {pathname: path} = useLocation(); // get "pathname" and name const as path;

  return (
    <>
      <Header/>
      {children}
      <Footer isOffer={path === "/"}/>
    </>
  )
}
