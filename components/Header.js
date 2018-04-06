import Link from 'next/link'
import SearchBar from './Header/SearchBar'

const Header = () => (
  <header>
    <Link href="/">
      <a>LOGO HERE</a>
    </Link>
    <SearchBar />
    <style jsx>{`
      header {
        padding: 15px 60px 15px 120px;
        width: 100%;
        max-width: 1200px;
        height: 100px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: transparent;
        overflow-y: hidden;
        box-sizing: border-box;
      }
      a {
        display: inline-block;
        float: left;
      }
    `}</style>
  </header>
)

export default Header
