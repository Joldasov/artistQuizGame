import { NavLink } from "react-router-dom";
import styles from "./pictureBodyCategory.module.scss";

const PictureBodyCategory = () => {
  let score13 = localStorage.getItem("score13");
  let score14 = localStorage.getItem("score14");

  let score15 = localStorage.getItem("score15");

  let score16 = localStorage.getItem("score16");

  let score17 = localStorage.getItem("score17");

  let score18 = localStorage.getItem("score18");
  let score19 = localStorage.getItem("score19");
  let score20 = localStorage.getItem("score20");
  let score21 = localStorage.getItem("score21");
  let score22 = localStorage.getItem("score22");
  let score23 = localStorage.getItem("score23");
  let score24 = localStorage.getItem("score24");

  console.log(score13);

  console.log(score13);

  return (
    <div className={styles.wrapper}>
      <NavLink
        to="/pictureCategoryGame/:Portrait"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score13?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Portrait</p>
            <p className={styles.correact_num}>
              {(score13?.length as number)
                ? (score13?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score13?.length as number) > 0
                ? styles.category_img13
                : `${styles.category_img13} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/portrait">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Landscape"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score14?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Landscape</p>
            <p className={styles.correact_num}>
              {score14?.length ? (score14?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score14?.length as number) > 0
                ? styles.category_img14
                : `${styles.category_img14} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/landscape">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/StillLife"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score14?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Still LiFe</p>
            <p className={styles.correact_num}>
              {score15?.length ? (score15?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score15?.length as number) > 0
                ? styles.category_img15
                : `${styles.category_img15} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/stillLife">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Graphic"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score16?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Graphic</p>
            <p className={styles.correact_num}>
              {score16?.length ? (score16?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score16?.length as number) > 0
                ? styles.category_img16
                : `${styles.category_img16} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/graphic">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Antique"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score17?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Antique</p>
            <p className={styles.correact_num}>
              {score17?.length ? (score17?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score17?.length as number) > 0
                ? styles.category_img17
                : `${styles.category_img17} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/antique">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Avant-Garde"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score18?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Avant-Garde</p>
            <p className={styles.correact_num}>
              {score18?.length ? (score18?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score18?.length as number) > 0
                ? styles.category_img18
                : `${styles.category_img18} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/avantGarde">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Renaissance"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score19?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Renaissance</p>
            <p className={styles.correact_num}>
              {score19?.length ? (score19?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score19?.length as number) > 0
                ? styles.category_img19
                : `${styles.category_img19} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/renaissance">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Surrealism"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score20?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Surrealism</p>
            <p className={styles.correact_num}>
              {score20?.length ? (score20?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score20?.length as number) > 0
                ? styles.category_img20
                : `${styles.category_img20} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/surrealism">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Kitsch"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score21?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Kitsch</p>
            <p className={styles.correact_num}>
              {score21?.length ? (score21?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score21?.length as number) > 0
                ? styles.category_img21
                : `${styles.category_img21} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/kitsch">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Minimalism"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score22?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Minimalism</p>
            <p className={styles.correact_num}>
              {score22?.length ? (score22?.length as number) / 2 + 0.5 : 0}{" "}
            </p>
          </div>
          <div
            className={
              (score22?.length as number) > 0
                ? styles.category_img22
                : `${styles.category_img22} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/minimalism">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Avangard"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score23?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Avangard</p>
            <p className={styles.correact_num}>
              {score23?.length ? (score23?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score23?.length as number) > 0
                ? styles.category_img23
                : `${styles.category_img23} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/avangard">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pictureCategoryGame/Industrial"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score24?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Industrial</p>
            <p className={styles.correact_num}>
              {score24?.length ? (score24?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score24?.length as number) > 0
                ? styles.category_img24
                : `${styles.category_img24} ${styles.filter}`
            }
          >
            <NavLink to="/score/picture/industrial">
              <div className={`${styles.info} ${styles.info_results}`}>
                <button className={`${styles.buttons} ${styles.buttons_score}`}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#fafafa" }}
                  ></i>
                  Score
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default PictureBodyCategory;
