import {  useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// import ModalWin from "../../../Components/modalWin/modalWin";
// import ModalPage from "../../../Components/modalWindow/modalPage";
// import Images from "../../../assets/image-data-master/images";
import ModalWin from "../../Components/modalWin/modalWin";
import ModalPage from "../../Components/modalWindow/modalPage";
import Images from "../../assets/image-data-master/images";
import { useAppDispatch, useAppSelector } from "../../helpers/redux";
import { reset, resetArr, resetScore, trueAnswer } from "../../store/gameSlice/gameSlice";

import styles from "./artistGamePageStyle.module.scss";

import loseSound from "../../assets/fail-144746.mp3";
import winSound from "../../assets/new-level-142995.mp3";

const ArtistGamePageAll = () => {
  const [shuffled, setShuffled] = useState<number[]>([]);
  let checked = localStorage.getItem("volume");
  const ArtistNumChange = useAppSelector((state) => state.game.value);
  const dispatch = useAppDispatch();
  const [changeNum, setChangeNum] = useState<number>();
  const answers = useAppSelector((state) => state.game.smt);
  const { name } = useParams();
  const artistCorrectAnswer = useAppSelector((state) => state.game.answers);
  const scoreArr = useAppSelector((state) => state.game.score);

  const [clickedNum, setClickedNum] = useState<number>();

  let win = new Audio(winSound);
  let lose = new Audio(loseSound);

  let volControl = localStorage.getItem("volumeControl");

  const handleResultSound = (clicked: number) => {
    if (JSON.parse(checked as string)) {
      if (clicked === (changeNum as number) + ArtistNumChange) {
        win.play();
        win.volume = JSON.parse(volControl as string);
      } else {
        lose.play();
        lose.volume = JSON.parse(volControl as string);
      }
    } else {
      ("");
    }
  };

  useEffect(() => {
    if (name === ":Portrait") {
      setChangeNum(0);
    } else if (name === "Landscape") {
      setChangeNum(10);
    } else if (name === "StillLife") {
      setChangeNum(20);
    } else if (name === "Graphic") {
      setChangeNum(30);
    } else if (name === "Antique") {
      setChangeNum(40);
    } else if (name === "Avant-Garde") {
      setChangeNum(50);
    } else if (name === "Renaissance") {
      setChangeNum(60);
    } else if (name === "Surrealism") {
      setChangeNum(70);
    } else if (name === "Kitsch") {
      setChangeNum(80);
    } else if (name === "Minimalism") {
      setChangeNum(90);
    } else if (name === "Minimalism") {
      setChangeNum(100);
    } else if (name === "Avangard") {
      setChangeNum(100);
    } else if (name === "Industrial") {
      setChangeNum(110);
    }

    dispatch(resetArr());
    dispatch(resetScore()) 
    dispatch(reset());
    // dispatch(resetWin())
  }, [name]);

  if (ArtistNumChange === 10) {
    if (name === ":Portrait") {
      localStorage.setItem("score1", artistCorrectAnswer.toString());
    } else if (name === "Landscape") {
      localStorage.setItem("score2", artistCorrectAnswer.toString());
    } else if (name === "StillLife") {
      localStorage.setItem("score3", artistCorrectAnswer.toString());
    } else if (name === "Graphic") {
      localStorage.setItem("score4", artistCorrectAnswer.toString());
    } else if (name === "Antique") {
      localStorage.setItem("score5", artistCorrectAnswer.toString());
    } else if (name === "Avant-Garde") {
      localStorage.setItem("score6", artistCorrectAnswer.toString());
    } else if (name === "Renaissance") {
      localStorage.setItem("score7", artistCorrectAnswer.toString());
    } else if (name === "Surrealism") {
      localStorage.setItem("score8", artistCorrectAnswer.toString());
    } else if (name === "Kitsch") {
      localStorage.setItem("score9", artistCorrectAnswer.toString());
    } else if (name === "Minimalism") {
      localStorage.setItem("score10", artistCorrectAnswer.toString());
    } else if (name === "Avangard") {
      localStorage.setItem("score11", artistCorrectAnswer.toString());
    } else if (name === "Industrial") {
      localStorage.setItem("score12", artistCorrectAnswer.toString());
    }
    localStorage.setItem('score', scoreArr.toString())
  }

  //random author

  const [modalActive, setModalActive] = useState<boolean>(false);

  let time = localStorage.getItem("time");
  let jsonTime = JSON.parse(time as string);
  let timerNum = localStorage.getItem("timerNum");
  const NumberTimerNum = Number(timerNum);

  const [timer, setTimer] = useState<number>(NumberTimerNum);

  const mixarr = (arr: number[]) => {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  };

  useEffect(() => {
    let min = (changeNum as number) + ArtistNumChange;

    let max = (changeNum as number) + 20 + ArtistNumChange;
    function getRandom(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let random1 = getRandom(min, max);
    let random2 = getRandom(min, max);
    let random3 = getRandom(min, max);
    let random4 = (changeNum as number) + ArtistNumChange;
    setShuffled(mixarr([random1, random2, random3, random4]));
  }, [(changeNum as number) + ArtistNumChange]);

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
        if (JSON.parse(checked as string)) {
          lose.play();
        }
      }

      return () => clearInterval(interval);
    }, [timer]);
  }

  useEffect(() => {
    setTimer(NumberTimerNum);
  }, [answers.length]);

  if (ArtistNumChange === 10) {
    return <ModalWin />;
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
            КТО АВТОР ДАННОЙ <br /> КАРТИНЫ?
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
          <NavLink to="/artistCategoryPage">
            <button className={styles.categoryBtn}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
              Categories
            </button>
          </NavLink>
        </div>
      </div>

      <div className={styles.smt}>
        <div className={styles.img}>
          <div
            style={{
              backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${
                (changeNum as number) + ArtistNumChange
              }full.jpg')`,
              width: "80%",
              height: "520px",
              backgroundSize: "cover",
              backgroundPosition: "50%",
              boxShadow: "2px 2px 15px #000",
              borderRadius: "15px",
              position: "relative",
              left: "8.8%",
              marginTop: "20px",
            }}
          ></div>
        </div>
      </div>

      <div className={styles.answer_box}>
        <div className={styles.answers}>
          <ul className={styles.answers_wrapper}>
            {shuffled?.map((item) =>
              Images.map((el) =>
                Number(el.imageNum) === item ? (
                  <li
                    onClick={() => {
                      setModalActive(true);
                      setClickedNum(Number(el?.imageNum));
                      handleResultSound(Number(el.imageNum));
                    }}
                    className={styles.answers_answer}
                    key={item}
                  >
                    {el.author}
                  </li>
                ) : (
                  ""
                )
              )
            )}
          </ul>
        </div>
      </div>

      <ModalPage
        TrueNum={(changeNum as number) + ArtistNumChange}
        active={modalActive}
        setActive={setModalActive}
        clickedNum={clickedNum}
      />
    </div>
  );
};
export default ArtistGamePageAll;

{
  /* <li className={styles.answers_answer}>Smt</li>
<li className={styles.answers_answer}>Smt</li>
<li className={styles.answers_answer}>Smt</li>
<li className={styles.answers_answer}>Smt</li> */
}
