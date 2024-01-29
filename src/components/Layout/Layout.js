import './Layout.css';
import Footer from '../Footer/Footer';
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

      <Footer />
    </body>
  </>
}

export default Layout;
