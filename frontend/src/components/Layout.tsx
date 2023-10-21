import Header from "./main/Header/Header";
import Footer from "./main/Footer/Footer";
import {useLocation} from "react-router-dom";

interface ILayout {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const {pathname: path} = useLocation(); // get "pathname" and name const as path;

  return (
    <>
      <Header/>
      {children}
      <Footer isOffer={path === "/"}/>
    </>
  )
}
