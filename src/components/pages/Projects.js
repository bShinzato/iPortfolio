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
              src="https://static.vecteezy.com/system/resources/previews/070/513/421/non_2x/cute-pixel-monster-waving-hello-free-vector.jpg"
              text="Rogue-lite game that involves minimal clicking. Can buy potions or a sword to slay monsters. "
              label="MiniGame"
              path="https://mini-turn-based.vercel.app"
              target="_blank"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="https://static.vecteezy.com/system/resources/previews/070/513/421/non_2x/cute-pixel-monster-waving-hello-free-vector.jpg"
              text="Rogue-lite game that involves minimal clicking. Can buy potions or a sword to slay monsters. "
              label="MiniGame"
              path="https://basic-movement-game.vercel.app"
              target="_blank"
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Projects;
