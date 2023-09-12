import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../helpers/redux";
import styles from "./PictureWin.module.scss";
const PictureWin = () => {
  const trueNums = useAppSelector((state) => state.game.truePictureAnswer);
  return (
    <div className={styles.modalWinModal}>
      <div className={styles.modalWinContent}>
        <div className={styles.congratsText}>CONGRATULATIONS !</div>
        <div className={styles.score}>
          <span>{trueNums.length}</span>/10
        </div>
        <div className={styles.scoreImg}></div>
        <div className={styles.twoButtons}>
          <NavLink to="/">
            <button className={styles.Btns}>Home</button>
          </NavLink>
          <NavLink to="/pictureCategory">
            <button className={styles.Btns}>Next Quiz</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default PictureWin;
