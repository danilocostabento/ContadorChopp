import React from "react";
import Header from "./Header";
import Footer from "./FOot";
import Home from "../views/Home";


export default class App extends React.Component {
  public render(): React.ReactElement {
      return(
        <>
          <Header/>
          <Home/>
          <Footer/>
        </>
      )
  }
}