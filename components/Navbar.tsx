import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,         
} from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = props => {
  return (
    <nav className="navbar">
      <Link href="/"><a>
      <div className="brand">
        <img src="/img/ab-logo.png" alt="logo image" className="logo"/><h2>Alaric Bell</h2>
      </div>
      </a></Link>
      <div id="collapse" onClick={handleIconVisibility}></div>

      <div id="nav-collapse" className="nav-right">
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/blog"><a>Blog</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/contact"><a>Contact</a></Link>
          </li>
          <li className="nav-item btn btn-youtube">
            <Link href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ"><a target="_blank">Youtube<FontAwesomeIcon icon={faYoutube} style={{width: '18px', height: '18px'}}/></a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const handleIconVisibility = (e) => {
  const nav = document.getElementById('nav-collapse')

  e.target.classList.toggle("collapsed");
  nav.classList.toggle("nav-collapsed");
}

export default Navbar;