import Images from "../../assets/image-data-master/images";
import styles from "./PictureModalStyle.module.scss";

import { useAppDispatch } from "../../helpers/redux";
import {
  pictureIncrement,
  smt,
  truePictureAnswer,
} from "../../store/gameSlice/gameSlice";
const PictureModal = ({
  active,
  setActive,
  truePic,
  clickedNum,
}: {
  active: boolean;
  setActive: (smt: boolean) => void;
  truePic: number;
  clickedNum: number | undefined;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={active ? 'modal scale' : 'modal out'}>
      <div className={active ? 'modal_content active' : 'modal_content'}>
        {truePic === clickedNum ? (
          <div className="all_modal">
            <div className="ModalcorrectImg"></div>
            <div
              style={{
                backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${truePic}full.jpg')`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
                borderRadius: "15px",
                width: "500px",
                height: "500px",
              }}
            ></div>
            <div className="modalTexts">
              <p className="modalText">{Images[truePic]?.name}</p>
              <p className="modalText">{Images[truePic]?.author}</p>
              <p className="modalText">{Images[truePic]?.year}</p>
            </div>
            <div>
              <button
                className="ModalNtn"
                onClick={() => {
                  setActive(false);
                  dispatch(pictureIncrement());
                  dispatch(truePictureAnswer());
                  dispatch(smt());
                }}
              >
                Next{" "}
              </button>
            </div>
          </div>
        ) : (
          <div className="all_modal">
            <div className="ModalIncorrectImg"></div>
            <div
              style={{
                backgroundImage: `url('https://art-quiz.netlify.app/assets/image-data/full/${truePic}full.jpg')`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
                borderRadius: "15px",
                width: "500px",
                height: "500px",
              }}
            ></div>
            <div className="modalTexts">
              <p className="modalText">{Images[truePic]?.name}</p>
              <p className="modalText">{Images[truePic]?.author}</p>
              <p className="modalText">{Images[truePic]?.year}</p>
            </div>
            <div>
              <button
                className="ModalNtn"
                onClick={() => {
                  setActive(false);
                  dispatch(pictureIncrement());
                  dispatch(smt());
                }}
              >
                Next{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureModal;
