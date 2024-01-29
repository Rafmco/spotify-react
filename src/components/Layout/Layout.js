import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
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

          <Main />
        </div>
      </main>

      <Footer />
    </body>
  </>
}

export default Layout;
