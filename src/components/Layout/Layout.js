import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return <>
    <div className="sidebar-container">
      <Sidebar />
    </div>

    <main>
      <div className="main-container">
        <Header />

        <Main />
      </div>
    </main>

    <Footer />
  </>
}

export default Layout;
