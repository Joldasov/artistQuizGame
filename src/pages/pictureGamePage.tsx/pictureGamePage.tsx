import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PictureWin from "../../Components/ModalPictureWin/PictureWin";
import PictureModal from "../../Components/PictureModal/PictureModal";
import loseSound from "../../assets/fail-144746.mp3";
import Images from "../../assets/image-data-master/images";
import winSound from "../../assets/new-level-142995.mp3";
import { useAppDispatch, useAppSelector } from "../../helpers/redux";
import { resetPicture, resetPictureArr } from "../../store/gameSlice/gameSlice";
import styles from "./picturePageStyle.module.scss";
const PictureGamePage = () => {
  const [changePic, setChangePic] = useState<number>();
  const { picture } = useParams();
  const [shuffled, setShuffled] = useState<number[]>([]);
  const pictureNum = useAppSelector((state) => state.game.pictureNum);
  const dispatch = useAppDispatch();
  const correctPicAnswers = useAppSelector(
    (state) => state.game.truePictureAnswer
  );
  const min = (changePic as number) + pictureNum;
  const max = (changePic as number) + 12 + pictureNum;
  const answers = useAppSelector((state) => state.game.smt);
  const time = localStorage.getItem("time");
  const jsonTime = JSON.parse(time as string);
  const timerNum = localStorage.getItem("timerNum");
  const NumberTimerNum = Number(timerNum);
  const [timer, setTimer] = useState<number>(NumberTimerNum);
  let checked = localStorage.getItem("volume");
  let win = new Audio(winSound);
  let lose = new Audio(loseSound);
  let volControl = localStorage.getItem("volumeControl");
  lose.volume = JSON.parse(volControl as string);
  win.volume = JSON.parse(volControl as string);

  const handleResultSound = (clicked: number) => {
    console.log(clicked);

    if (JSON.parse(checked as string)) {
      if (clicked === (changePic as number) + pictureNum) {
        win.play();
      } else {
        lose.play();
      }
    }
  };
  if (jsonTime) {
    useEffect(() => {
      let interval: number = 0;

      if (timer !== 0) {
        interval = setInterval(function () {
          setTimer((timer) => timer - 1);
        }, 1000);
      } else {
        setModalActive(true);
        clearInterval(interval);
        lose.play();
      }

      return () => clearInterval(interval);
    }, [timer]);
  }

  useEffect(() => {
    if (picture === ":Portrait") {
      setChangePic(120);
    } else if (picture === "Landscape") {
      setChangePic(130);
    } else if (picture === "StillLife") {
      setChangePic(140);
    } else if (picture === "Graphic") {
      setChangePic(150);
    } else if (picture === "Antique") {
      setChangePic(160);
    } else if (picture === "Avant-Garde") {
      setChangePic(170);
    } else if (picture === "Renaissance") {
      setChangePic(180);
    } else if (picture === "Surrealism") {
      setChangePic(190);
    } else if (picture === "Kitsch") {
      setChangePic(200);
    } else if (picture === "Minimalism") {
      setChangePic(210);
    } else if (picture === "Avangard") {
      setChangePic(220);
    } else if (picture === "Industrial") {
      setChangePic(230);
    }
    dispatch(resetPicture());

    dispatch(resetPictureArr());
  }, [picture]);

  if (pictureNum === 10) {
    if (picture === ":Portrait") {
      localStorage.setItem("score13", correctPicAnswers.toString());
    } else if (picture === "Landscape") {
      localStorage.setItem("score14", correctPicAnswers.toString());
    } else if (picture === "StillLife") {
      localStorage.setItem("score15", correctPicAnswers.toString());
    } else if (picture === "Graphic") {
      localStorage.setItem("score16", correctPicAnswers.toString());
    } else if (picture === "Antique") {
      localStorage.setItem("score17", correctPicAnswers.toString());
    } else if (picture === "Avant-Garde") {
      localStorage.setItem("score18", correctPicAnswers.toString());
    } else if (picture === "Renaissance") {
      localStorage.setItem("score19", correctPicAnswers.toString());
    } else if (picture === "Surrealism") {
      localStorage.setItem("score20", correctPicAnswers.toString());
    } else if (picture === "Kitsch") {
      localStorage.setItem("score21", correctPicAnswers.toString());
    } else if (picture === "Minimalism") {
      localStorage.setItem("score22", correctPicAnswers.toString());
    } else if (picture === "Avangard") {
      localStorage.setItem("score23", correctPicAnswers.toString());
    } else if (picture === "Industrial") {
      localStorage.setItem("score24", correctPicAnswers.toString());
    }
  }
  useEffect(() => {
    setTimer(NumberTimerNum);
  }, [answers.length]);

  function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    const random1 = getRandom(min, max);
    const random2 = getRandom(min, max);
    const random3 = getRandom(min, max);
    const random4 = (changePic as number) + pictureNum;
    setShuffled(mixarr([random1, random2, random3, random4]));
  }, [(changePic as number) + pictureNum]);

  const mixarr = (arr: number[]) => {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  };

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [clickedPic, setClickedPic] = useState<number>();

  console.log(shuffled);

  console.log(pictureNum);

  if (pictureNum === 10) {
    return <PictureWin />;
  }

  return (
    <div className={styles.s}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className={styles.header}>
        <div>
          <NavLink to="/">
            <button className={styles.homeBtn}>
              <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
              Home
            </button>
          </NavLink>
        </div>
        <div className={styles.header_text}>
          <h1>
            КАКУЮ КАРТИНУ НАПИСАЛ <br />{" "}
            {Images.map((it) =>
              Number(it.imageNum) === (changePic as number) + pictureNum
                ? it.author
                : ""
            )}
          </h1>
        </div>

        {jsonTime ? (
          <div>
            <h2 className={styles.time}> {`00:${timer}`}</h2>
          </div>
        ) : (
          ""
        )}

        <div>
          <NavLink to="/pictureCategory">
            <button className={styles.categoryBtn}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
              Categories
            </button>
          </NavLink>
        </div>
      </div>

      <div className={styles.answer_box}>
        <div className={styles.answers}>
          <ul className={styles.answers_wrapper}>
            {shuffled.map((item) =>
              Images.map((el) =>
                Number(el.imageNum) === item ? (
                  <div
                    onClick={() => {
                      setModalActive(true);
                      setClickedPic(Number(el.imageNum));
                      handleResultSound(Number(el.imageNum));
                    }}
                    className={styles.img}
                  >
                    <img
                      src={`https://art-quiz.netlify.app/assets/image-data/full/${el.imageNum}full.jpg`}
                      style={{
                        width: "386px",
                        height: "300px",
                        borderRadius: "10px",
                        backgroundPosition: "50%",
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                ) : (
                  ""
                )
              )
            )}
          </ul>
        </div>
      </div>
      <PictureModal
        active={modalActive}
        setActive={setModalActive}
        truePic={(changePic as number) + pictureNum}
        clickedNum={clickedPic}
      />
    </div>
  );
};

export default PictureGamePage;
