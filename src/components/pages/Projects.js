import React from "react";
import CardItem from "../CardItem";

const Projects = () => {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text="Rogue-lite game that involves minimal clicking. Can buy potions or a sword to slay monsters."
              label="MiniGame"
              path="https://mini-turn-based.vercel.app"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              text="Basic Movement Game with Basic Canvas Drawing"
              label="MiniGame"
              path="https://basic-movement-game.vercel.app"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
