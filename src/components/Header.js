import "./header.css"
import slack_logo from "../assests/media/Slack-logo.png"
import search_logo from "../assests/media/search-logo.png"

const Header = () => {
  return (
    <header className="header-main">
        <nav className="header-left">
         <img className="slack-logo" src={slack_logo} alt="slack-logo" />
         <a className="header-link" href="/"> Product ⋎ </a>
         <a className="header-link" href="/"> Enterprise </a>
         <a className="header-link" href="/"> Resources </a>
         <a className="header-link" href="/"> Pricing </a>
        </nav>

        <nav className="header-right">
         <img className="search-logo" src={search_logo} alt="search-logo" />
         <a className="header-link" href="/"> Sign in </a>
         <button className="sales-btn"> TALK TO SALES </button>
         <button className="free-btn" > TRY FOR FREE </button>
        </nav>
    </header>
  )
}

export default Header