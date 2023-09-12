import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../helpers/redux";
import styles from "./BodyStyle.module.scss";

const Body = () => {
  const trueAnswerArr = useAppSelector((state) => state.game.answers);
  let score1 = localStorage.getItem("score1");
  let score2 = localStorage.getItem("score2");
  let score3 = localStorage.getItem("score3");
  let score4 = localStorage.getItem("score4");
  let score5 = localStorage.getItem("score5");
  let score6 = localStorage.getItem("score6");
  let score7 = localStorage.getItem("score7");
  let score8 = localStorage.getItem("score8");
  let score9 = localStorage.getItem("score9");
  let score10 = localStorage.getItem("score10");
  let score11 = localStorage.getItem("score11");
  let score12 = localStorage.getItem("score12");

  console.log(trueAnswerArr);
  console.log(score2);

  return (
    <div className={styles.wrapper}>
      <NavLink
        to="/artistCategoryPage/:Portrait"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score1?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Portrait</p>
            <p className={styles.correact_num}>
              {(score1?.length as number) > 0
                ? (score1?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score1?.length as number) > 0
                ? styles.category_img1
                : `${styles.category_img1} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/portrait">
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
        to="/artistCategoryPage/Landscape"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score2?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Landscape</p>
            <p className={styles.correact_num}>
              {(score2?.length as number) > 0
                ? (score2?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score2?.length as number) > 0
                ? styles.category_img2
                : `${styles.category_img2} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/landscape">
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
        to="/artistCategoryPage/StillLife"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score3?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Still LiFe</p>
            <p className={styles.correact_num}>
              {(score3?.length as number) > 0
                ? (score3?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score3?.length as number) > 0
                ? styles.category_img3
                : `${styles.category_img3} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/stillLife">
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
        to="/artistCategoryPage/Graphic"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score4?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Graphic</p>
            <p className={styles.correact_num}>
              {(score4?.length as number) > 0
                ? (score4?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score4?.length as number) > 0
                ? styles.category_img4
                : `${styles.category_img4} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/graphic">
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
        to="/artistCategoryPage/Antique"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score5?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Antique</p>
            <p className={styles.correact_num}>
              {(score5?.length as number)
                ? (score5?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score5?.length as number) > 0
                ? styles.category_img5
                : `${styles.category_img5} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/antique">
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
        to="/artistCategoryPage/Avant-Garde"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score6?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Avant-Garde</p>
            <p className={styles.correact_num}>
              {(score6?.length as number)
                ? (score6?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score6?.length as number) > 0
                ? styles.category_img6
                : `${styles.category_img6} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/antique">
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
        to="/artistCategoryPage/Renaissance"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score7?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Renaissance</p>
            <p className={styles.correact_num}>
              {(score7?.length as number)
                ? (score7?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score7?.length as number) > 0
                ? styles.category_img7
                : `${styles.category_img7} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/renaissance">
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
        to="/artistCategoryPage/Surrealism"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score8?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Surrealism</p>
            <p className={styles.correact_num}>
              {(score8?.length as number)
                ? (score8?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score8?.length as number) > 0
                ? styles.category_img8
                : `${styles.category_img8} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/surrealism">
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
        to="/artistCategoryPage/Kitsch"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score9?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Kitsch</p>
            <p className={styles.correact_num}>
              {(score9?.length as number)
                ? (score9?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score9?.length as number) > 0
                ? styles.category_img9
                : `${styles.category_img9} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/kitsch">
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
        to="/artistCategoryPage/Minimalism"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score10?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Minimalism</p>
            <p className={styles.correact_num}>
              {(score10?.length as number)
                ? (score10?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score10?.length as number) > 0
                ? styles.category_img10
                : `${styles.category_img10} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/minimalism">
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
        to="/artistCategoryPage/Avangard"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score11?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Avangard</p>
            <p className={styles.correact_num}>
              {(score11?.length as number)
                ? (score11?.length as number) / 2 + 0.5
                : 0}
            </p>
          </div>
          <div
            className={
              (score11?.length as number) > 0
                ? styles.category_img11
                : `${styles.category_img11} ${styles.fillter}`
            }
          >
            <NavLink to="/score/artist/avangard">
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
        to="/artistCategoryPage/Industrial"
        style={{ textDecoration: "none" }}
        className={styles.nav}
      >
        <div
          className={(score12?.length as number) > 0 ? styles.card_hover : ""}
        >
          <div className={styles.texts}>
            <p className={styles.text}>Industrial</p>
            <p className={styles.correact_num}>
              {score12?.length ? (score12?.length as number) / 2 + 0.5 : 0}
            </p>
          </div>
          <div
            className={
              (score12?.length as number) > 0
                ? styles.category_img12
                : `${styles.category_img12} ${styles.fillter}`
            }
          >
            <NavLink to='/score/artist/industrial'>
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

export default Body;
