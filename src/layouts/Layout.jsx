import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/FatemehSalimi-777">Fatemeh Salimi</a> |
          Web Developer
        </p>
      </header>
      {children}
      <footer>
        <p>Developed by Fatemeh from 🌎</p>
      </footer>
    </>
  );
}

export default Layout;
