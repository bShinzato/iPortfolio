import React from 'react'

const CardItem = (props) => {
  return (
    <li className="cards__item">
      <a
        className="cards__item__link"
        href={props.path}
        target="_blank"
        rel="noreferrer"
      >
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <iframe
            src={props.path}
            title={props.label}
            className="cards__item__iframe"
          />
        </figure>
        <div className="cards__item__info"></div>
        <h5 className="cards__item__text">{props.text}</h5>
      </a>
    </li>
  )
}

export default CardItem
