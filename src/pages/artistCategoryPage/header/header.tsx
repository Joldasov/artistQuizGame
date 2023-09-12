import { NavLink } from "react-router-dom";
import styles from "./headerStyle.module.scss";
const Header = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className={styles.header}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.post_header}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <button className={styles.homeBtn}>
            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
            HOME
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
