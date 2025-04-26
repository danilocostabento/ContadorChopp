import { Link } from "react-router-dom";
import './style/Header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src='/assets/logo.png' alt="Dois copos de cerveja brindando" className="logo"/>
        <div className="nav-links">
          <ul>
            <li><Link to='teste'>TEste</Link></li>
            <li><Link to='teste'>Teste1</Link></li>
            <li><Link to='teste'>Teste2</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}