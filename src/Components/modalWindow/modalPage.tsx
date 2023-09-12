import "./modalStyle.scss";
import Images from "../../assets/image-data-master/images";
import { useAppDispatch} from "../../helpers/redux";
import { increment, scoreFalse, scoreTrue, smt, trueAnswer } from "../../store/gameSlice/gameSlice";

const ModalPage = ({
  TrueNum,
  active,
  clickedNum,
  setActive,
}: {
  TrueNum: number;
  active: boolean;
  clickedNum: number | undefined;
  setActive: (boolean: boolean) => void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={active ? "modal scale" : "modal out"}>
      <div className={active ? 'modal_content active' : 'modal_content out'} onClick={(e) => e.stopPropagation()}>
        {clickedNum === TrueNum ? (
          <div className="all_modal">
            <div className="ModalcorrectImg"></div>
            <div
              style={{
                backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${TrueNum}full.jpg')`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
                borderRadius: "15px",
                width: "500px",
                height: "500px",
              }}
            ></div>
            <div className="modalTexts">
              <p className="modalText">{Images[TrueNum]?.name}</p>
              <p className="modalText">{Images[TrueNum]?.author}</p>
              <p className="modalText">{Images[TrueNum]?.year}</p>
            </div>
            <div>
              <button
                className="ModalNtn"
                onClick={() => {
                  setActive(false);
                  dispatch(increment());
                  dispatch(trueAnswer());
                  dispatch(smt());
                  dispatch(scoreTrue())
                }}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="all_modal">
            <div className="ModalIncorrectImg"></div>
            <div
              style={{
                backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${TrueNum}full.jpg')`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
                borderRadius: "15px",
                width: "500px",
                height: "500px",
              }}
            ></div>
            <div className="modalTexts">
              <p className="modalText">{Images[TrueNum]?.name}</p>
              <p className="modalText">{Images[TrueNum]?.author}</p>
              <p className="modalText">{Images[TrueNum]?.year}</p>
            </div>
            <div>
              <button
                className="ModalNtn"
                onClick={() => {
                  setActive(false);
                  dispatch(increment());
                  dispatch(smt());
                  dispatch(scoreFalse())
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPage;
