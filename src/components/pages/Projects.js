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
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80"
              text="First Fullstack Group Project at LEARN Academy."
              label="EurekaGrub"
              path="https://eureka-grub-frontend.onrender.com/"
              target="_blank"
            />
            <CardItem
              src="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png"
              text="This is my tech talk presentation slides at LEARN Academy. I talked about useState and useEffect. "
              label="Tech Talk Slides"
              path="https://www.canva.com/design/DAFqPZ9qnh4/RykK1fNfOlhU0r4aSnyJNQ/view?utm_content=DAFqPZ9qnh4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
            />
            <CardItem
              src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="This application is built for a friend building her clients and showing her skills within cosmetics. Frontend development that is only for iphone view as of now. "
              label="Salon App"
              path="https://deesbeauties.vercel.app/"
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
