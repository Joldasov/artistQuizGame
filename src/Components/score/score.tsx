import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Images from "../../assets/image-data-master/images";
import { useAppDispatch, useAppSelector } from "../../helpers/redux";
import { resetScore, trueAnswer } from "../../store/gameSlice/gameSlice";
import styles from "./scoreStyle.module.scss";
const Score = () => {
  const scoreArr = useAppSelector((state) => state.game.score);
  const score = localStorage.getItem("score") as string;
  const { nameGame, name } = useParams();

  const [images, setImages] =
    useState<
      { author: string; name: string; year: string; imageNum: string }[]
    >();
  useEffect(() => {
    if (nameGame === "artist") {
      if (name === "portrait") {
        setImages(Images?.slice(0, 10));
      } else if (name === "landscape") {
        setImages(Images?.slice(10, 20));
      } else if (name === "stillLife") {
        setImages(Images?.slice(20, 30));
      } else if (name === "graphic") {
        setImages(Images.slice(30, 40));
      } else if (name === "antique") {
        setImages(Images.slice(40, 50));
      } else if (name === "avantGarde") {
        setImages(Images.slice(50, 60));
      } else if (name === "renaissance") {
        setImages(Images.slice(60, 70));
      } else if (name === "surrealism") {
        setImages(Images.slice(70, 80));
      } else if (name === "kitsch") {
        setImages(Images.slice(80, 90));
      } else if (name === "minimalism") {
        setImages(Images?.slice(90, 100));
      } else if (name === "avangard") {
        setImages(Images?.slice(100, 110));
      } else if (name === "industrial") {
        setImages(Images.slice(110, 120));
      }
    } else {
      if (name === "portrait") {
        setImages(Images?.slice(120, 130));
      } else if (name === "landscape") {
        setImages(Images?.slice(130, 140));
      } else if (name === "stillLife") {
        setImages(Images?.slice(140, 150));
      } else if (name === "graphic") {
        setImages(Images.slice(150, 160));
      } else if (name === "antique") {
        setImages(Images.slice(160, 170));
      } else if (name === "avantGarde") {
        setImages(Images.slice(170, 180));
      } else if (name === "renaissance") {
        setImages(Images.slice(180, 190));
      } else if (name === "surrealism") {
        setImages(Images.slice(190, 200));
      } else if (name === "kitsch") {
        setImages(Images.slice(200, 210));
      } else if (name === "minimalism") {
        setImages(Images?.slice(210, 220));
      } else if (name === "avangard") {
        setImages(Images?.slice(220, 230));
      } else if (name === "industrial") {
        setImages(Images.slice(230, 240));
      }
    }
  }, [name]);

  const [arr, setArr] = useState<string[]>([]);

  console.log(images);
  console.log(name);
  console.log(nameGame);

  const arrBoolean = score?.split(",");
  
  let smt = 0

  useEffect(() => {
    setArr(arrBoolean);
  }, []);

 
  images?.map(() =>{
    console.log()
  })
  

  return (
    <div className="wrapper_score">
      <div className={styles.header}>
        <div>
          <NavLink to="/">
            <button className={styles.homeBtn}>
              <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
              Home
            </button>
          </NavLink>
        </div>
        <div className={styles.header_logo}>
          <div className={styles.logo}></div>
        </div>

        <div>
          <NavLink
            to={
              nameGame === "artist" ? "/artistCategoryPage" : "/pictureCategory"
            }
          >
            <button className={styles.categoryBtn}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
              Categories
            </button>
          </NavLink>
        </div>
      </div>
      <div className={styles.answer_box}>
        {images?.map((info) => (
          <div className={styles.card}>
            <div className={styles.texts}>
              <h1>{info.author}</h1>
            </div>

            <div
              className={arr[smt++] === 'true' ? true : false ? "" : styles.filter}
              style={{
                backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${info.imageNum}full.jpg')`,
                width: "200px",
                height: "200px",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                position: "relative",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Score;

{
  /* <div className={styles.card}>
  <div className={styles.texts}>
    <h1>Text</h1>
  </div>
  <div
    className={styles.scoreImg}
    style={{
      backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/1full.jpg')`,
      width: "200px",
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      position: "relative",
    }}
  ></div>
</div>; */
}
