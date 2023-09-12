import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../helpers/redux";
import stylesWin from "./modalWinStyle.module.scss";

const ModalWin = () => {
  const trueAnswer = useAppSelector((state) => state.game.answers);
  console.log(trueAnswer);

  return (
    <div className={stylesWin.modalWinModal}>
      <div className={stylesWin.modalWinContent}>
        <div className={stylesWin.congratsText}>CONGRATULATIONS !</div>
        <div className={stylesWin.score}>
          <span>{trueAnswer.length}</span>/10
        </div>
        <div className={stylesWin.scoreImg}></div>
        <div className={stylesWin.twoButtons}>
          <NavLink to="/">
            <button className={stylesWin.Btns}>Home</button>
          </NavLink>
          <NavLink to="/artistCategoryPage">
            <button className={stylesWin.Btns}>Next Quiz</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ModalWin;
