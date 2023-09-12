import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/redux";
import {
  turnOffTime,
  turnOffVolune,
  turnOnTime,
  turnOnVolume,
} from "../../store/gameSlice/gameSlice";
import styles from "./settingsALLstyle.module.scss";
const SettingsALL = () => {
  const dispatch = useAppDispatch();
  const num = localStorage.getItem("timerNum");
  const smt = localStorage.getItem("time");
  const vol = localStorage.getItem("volume");
  const volControl = localStorage.getItem("volumeControl");
  const time = useAppSelector((state) => state.game.checkedTime);
  const volume = useAppSelector((state) => state.game.checkedVal);
  const [timerTimeValume, setTimerTimeValue] = useState<number | string>(
    JSON.parse(num as string)
  );

  const [nn, setNN] = useState<boolean>(JSON.parse(smt as string));
  const [volume0, setVolume0] = useState<boolean>(JSON.parse(vol as string));

  if (volume0) {
    dispatch(turnOnVolume());
  } else {
    dispatch(turnOffVolune());
  }

  if (nn) {
    dispatch(turnOnTime());
  } else {
    dispatch(turnOffTime());
  }

  console.log(time);

  const [volumeControl, setVolumeControl] = useState<number | string>(
    JSON.parse(volControl as string)
  );

  function save() {
    localStorage.setItem("timerNum", timerTimeValume.toString());
    localStorage.setItem("time", time.toString());
    localStorage.setItem("volume", volume.toString());
    localStorage.setItem("volumeControl", volumeControl.toString());
  }

  console.log(volControl);

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <h2 className={styles.text}>settings</h2>
      <div className={styles.cards}>
        <div className={`${styles.card_settings_volume} ${styles.card}`}>
          <div className={styles.volume_Logo}></div>
          <div className={styles.common_wrapper}>
            <div className={styles.vol_wrapper}>
              <button className={styles.mini_volume_logo}></button>
              <input
                className={styles.vol_range}
                type={"range"}
                min={0}
                max={10}
                value={volumeControl}
                onChange={(e) => setVolumeControl(e.target.value)}
              />
            </div>

            <input
              type="checkbox"
              id="1"
              className={styles.checkbox}
              checked={volume0}
              onChange={(e) => setVolume0(e.target.checked)}
            />
            <label htmlFor="1">ON/OFF</label>
          </div>
          <h2 className={styles.textSetting}>VOLUME</h2>
        </div>

        <div className={`${styles.card_settings_time} ${styles.card}`}>
          <div className={styles.time_logo}></div>
          <div className={styles.common_wrapper}>
            <div className={styles.time_wrapper}>
              <input
                className={styles.time_range}
                type={"range"}
                min={5}
                max={30}
                value={timerTimeValume}
                step={5}
                id="2"
                disabled={!nn}
                onChange={(e) => setTimerTimeValue(e.target.value)}
              />
              <label htmlFor="2" className={styles.seconds}>
                {timerTimeValume}
              </label>
            </div>

            <input
              type="checkbox"
              id="2"
              className={styles.checkbox}
              checked={nn}
              onChange={(e) => setNN(e.target.checked)}
            />
            <label htmlFor="2">ON/OFF</label>
          </div>
          <h2 className={styles.textSetting}>Time</h2>
        </div>
      </div>
      <NavLink to="/">
        <button className={styles.saveButton} onClick={() => save()}>
          Save
        </button>
      </NavLink>
    </div>
  );
};

export default SettingsALL;
