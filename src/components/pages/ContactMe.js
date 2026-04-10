import React from 'react';
import './ContactPage.css';
import CardItem from '../CardItem.js'
import '../Cards.css'

const ContactMe = () => {
  return (
    <>
      <div className='entire-content-cm'>
        <h2>Contact Me</h2>
        <h3>Have any questions? I'd love to hear from you.</h3>
      </div>
      <div className="cards"> 
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&usqp=CAU"
                text="Networking"
                label="LinkedIn"
                path="https://www.linkedin.com/in/bshinzato/"
                target="_blank"
              />
              <CardItem
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                text="View my GitHub"
                label="GitHub"
                path="https://github.com/bShinzato"
                target="_blank"
              />
              <CardItem
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-black-icon.png"
                text="Modern Communication"
                label="Discord"
                path="https://discordapp.com/users/186638873181290496"
                target="_blank"
              />
              <CardItem
                src="https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw="
                text="Business Email"
                label="Email"
                path="mailto:bshinzato@outlook.com"
              />
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ContactMe;
