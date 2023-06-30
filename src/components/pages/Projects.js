import React from 'react'
import CardItem from '../CardItem'
// import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="cards">
        <h1>My Projects</h1>    
            <div className="cards__container">
                <div className="cards__wrapper">
                    
                    <ul className="cards__items">
                        <CardItem
                        src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
                        text="Paired Programmed on backend and frontend of this application"
                        label="Cat Tinder"
                        path="*"
                        /> 
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Projects