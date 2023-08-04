import React from 'react'
import CardItem from '../CardItem'

const Projects = () => {
  return (
    <div className="cards">
        <h1>My Projects</h1>    
            <div className="cards__container">
                <div className="cards__wrapper">
                    
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-p-1.png"
                        text="This project was created at LEARN Academy within 2 weeks, by a team of 3, including myself. Ranging from Frontend to Backend, we achieved full CRUD, and adding more features as time permits. "
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
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Projects