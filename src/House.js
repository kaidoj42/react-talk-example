import React, { useState } from "react";
import Door from "./components/Door";
import Floor from "./components/Floor";
import Grass from "./components/Grass";
import Roof from "./components/Roof";
import Window from "./components/Window";
import "./style.scss";

const House = () => {
  const [allWindowsOpen, setAllWindowsOpen] = useState(false);
  const [allDoorsOpen, setAllDoorsOpen] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setAllWindowsOpen(!allWindowsOpen)}>
        Toggle all windows
      </button>
      <button onClick={() => setAllDoorsOpen(!allDoorsOpen)}>
        Toggle all doors
      </button>
      <strong style={{ marginLeft: 50 }}>
        All the elements that change color are rerendered
      </strong>
      <div className="house">
        <Roof />
        <Floor nr="3">
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
        </Floor>
        <Floor nr="2">
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
        </Floor>
        <Floor nr="1">
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
          <Window open={allWindowsOpen} />
        </Floor>
        <Floor nr="GF">
          <Door open={allDoorsOpen} />
          <Door open={allDoorsOpen} />
          <Door open={allDoorsOpen} />
        </Floor>
      </div>
      <Grass />
    </div>
  );
};

export default House;
