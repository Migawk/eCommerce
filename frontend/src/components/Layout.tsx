import Header from "./main/Header/Header";
import Footer from "./main/Footer/Footer";
import { Helmet } from "react-helmet";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IUserStore, useUser } from "../store/user.ts";
import { IItemsStore, useItems } from "../store/main.ts";

interface ILayout {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const items = useItems(state => (state as IItemsStore).items);
  const setItems = useItems(state => (state as IItemsStore).setItems);

  const user = useUser(state => (state as IUserStore).user);
  const setUser = useUser(state => (state as IUserStore).setUser);

  useEffect(() => {
    if(items === null) {
      const localItems = localStorage.getItem("items");
      if(!localItems) return;
      if(JSON.parse(localItems) === undefined) return;
      const itemsList = JSON.parse(localItems);
      if(itemsList.length !== 0) setItems(JSON.parse(localItems));
    }
    // localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if(!user) {
      const localUser = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!);
      if(!localUser) return;
      setUser(localUser);
    }
  }, [])

  const {pathname: path} = useLocation(); // get "pathname" and name const as path;

  return (
    <>
      <Helmet>
        <title>Luminae</title>
      </Helmet>
      <Header/>
      {children}
      <Footer isOffer={path === "/"}/>
    </>
  )
}
