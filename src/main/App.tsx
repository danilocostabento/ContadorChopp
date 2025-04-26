import React from "react";
import Header from "./Header";
import Footer from "./FOot";
import { BrowserRouter as Router} from 'react-router-dom'
import Content from "./Content";

export default class App extends React.Component {
  public render(): React.ReactElement {
      return(
        <Router>
          <Header/>
          <Content />
          <Footer/>
        </Router>
      )
  }
}