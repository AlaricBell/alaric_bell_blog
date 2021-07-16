import Link from 'next/link'

const Navbar: React.FC = props => {
  return (
    <nav className="navbar">
      <Link href="/"><a>
      <div className="brand">
        <img src="/img/ab-logo.png" alt="logo image" className="logo"/><h2>Alaric Bell</h2>
      </div>
      </a></Link>
      <div className="nav-right">
        <ul className="nav-items">
        <li className="nav-item">
            <Link href="/blog"><a>Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/blog"><a>Blog</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/blog"><a>About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/blog"><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;