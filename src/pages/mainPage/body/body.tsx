import { NavLink } from "react-router-dom";
import styles from "./body.module.scss";
const Body = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className={styles.body_wrapper}>
        <NavLink style={{ textDecoration: "none" }} to="/artistCategoryPage">
          <div className={styles.card}>
            <div className={styles.img1}></div>
            <h2 className={styles.h2}>
              ARTIST <span>QUIZ</span>
            </h2>
          </div>
        </NavLink>
        <NavLink to="/pictureCategory" style={{ textDecoration: "none" }}>
          <div className={styles.card}>
            <div className={styles.img2}></div>
            <h2 className={styles.h2}>
              PICTURE<span> QUIZ</span>
            </h2>
          </div>
        </NavLink>
      </div>
      <NavLink to="#">
        <div className={styles.settings}>
          <NavLink to="/settings">
            <button className={styles.btnSet}>
              <i className="fa-solid fa-gear" style={{ color: "white" }}></i>
              Settings
            </button>
          </NavLink>
        </div>
      </NavLink>
    </div>
  );
};
export default Body;
