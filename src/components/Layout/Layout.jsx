import Routers from "../../Router/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
