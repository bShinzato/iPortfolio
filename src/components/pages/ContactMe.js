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
                text="I would love to connect with you"
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
                src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source"
                text="Another good way to contact me and to collaborate on projects"
                label="Discord"
                path="https://discordapp.com/users/186638873181290496"
                target="_blank"
              />
              <CardItem
                src="https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw="
                text="I will respond to Emails right away"
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
