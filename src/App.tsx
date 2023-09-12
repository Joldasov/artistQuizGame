import { Route, Routes, useLocation } from "react-router-dom";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import "./App.css";
import ArtistCategoryPage from "./Components/ArtistCategoryPage/ArtistCategoryPage";
import ArtistGamePage from "./Components/ArtistGamePage/ArtistGamePage";
import MainPage from "./Components/MainPage/MainPage";
import PictureGame from "./Components/PictureGame/PictureGame";
import Settings from "./Components/SettingsPage/Settings";
import Error from "./Components/error/error";
import PictureCategory from "./Components/pictureGameCategory/pictureGameCategory";
import ModalWin from "./Components/modalWin/modalWin";
import Score from "./Components/score/score";
function App() {
  const location = useLocation();

  return (
    <>
      <div className="mainWrapper">
        <TransitionGroup>
          <SwitchTransition>
            <CSSTransition key={location.key} classNames="page" timeout={1000}>
              <Routes location={location}>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/artistCategoryPage"
                  element={<ArtistCategoryPage />}
                />
                <Route
                  path="/artistCategoryPage/:name"
                  element={<ArtistGamePage />}
                />
                <Route
                  path="/pictureCategory"
                  element={<PictureCategory />}
                ></Route>
                <Route
                  path="/pictureCategoryGame/:picture"
                  element={<PictureGame />}
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Error />} />
                <Route path="/modalWin" element = {<ModalWin/>}/>
                <Route path="/score/:nameGame/:name" element = {<Score/>}/>
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </TransitionGroup>
      </div>

      <div className="footer">
        <h2 className="name text">Roman Kostyrin</h2>
        <h2 className="year text">© 2021</h2>
        <div className="footer_logo"></div>
      </div>
    </>
  );
}

export default App;
