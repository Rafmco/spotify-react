import './Layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return <>
    <body>
      <div class="sidebar-container">
        <Sidebar />
      </div>
      <main>
        <div class="main-container">
          <Header />
        </div>
      </main>
    </body>
  </>
}

export default Layout;
