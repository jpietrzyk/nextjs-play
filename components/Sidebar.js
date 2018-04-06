import SidebarItem from './Sidebar/Item'

const Sidebar = (props) => (
  <nav>
    <div className="navburger">
      <i className="fa fa-bars"></i>
    </div>
    <ul>
      <SidebarItem href="/" icon="tag" />
      <SidebarItem href="/" icon="filter" />
      <SidebarItem href="/" icon="calendar" />
      <SidebarItem href="/" icon="code" />
    </ul>
    <style jsx>{`
      nav {
        width: 60px;
        height: 100%;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background-color: #2E2E2E;
        overflow-x: hidden;
        padding-top: 20px;
        box-shadow: 3px 0 5px rgba(0, 0, 0, 0.6), 3px 0 5px rgba(0, 0, 0, 0.6);
      }
      .navburger {
        text-align: center;
        color: #a2a2a2;
        font-size: 1.5em;
      }
      .navburger i.fa {
        font-weight: 300;
      }
      ul {
        margin: 0;
        padding: 0;
        display: block;
        list-style: none;
        width: 100%;
        margin-top: 150px;
      }
    `}</style>
  </nav>
)

export default Sidebar
