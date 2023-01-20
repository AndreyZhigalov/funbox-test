import React from 'react'
import CardBackground from "../components/CardBackground"

const Card = ({ item, onClickCard, pet }) => {
    return (
        <div className={`food-card__wrapper ${item.count < 1 && "disabled"}`} key={item.id}>
            <input className="food-card__selector" type="checkbox" name={item.filling} id={item.id} disabled={item.count === 0} />
            <CardBackground />
            <div className="food-card__container" onClick={() => item.count > 0 && onClickCard(item.id)}>
                <label htmlFor={item.id} className="food-card__selector-label">
                    <div className="food-card">
                        <ul className="food-card__description">
                            <li className="food-card__sub-title">Сказочное заморское яство</li>
                            <li className="food-card__title">{item.title}</li>
                            <li className="food-card__filling">с {item.filling}</li>
                            <li className="food-card__features"><strong>{item.portions}</strong> порций</li>
                            <li className="food-card__features">{item.mice === 1 ? "мышь в подарок" : item.mice < 5 ? item.mice + " мыши в подарок" : item.mice + " мышей в подарок"}</li>
                            {item.isHappy && <li className="food-card__features">заказчик доволен</li>}
                        </ul>
                        <img className="food-card__pet-image" src={pet} alt="Питомец" draggable={false} />
                        <div className="food-card__weight-container">
                            <span className="food-card__weight">0,5</span>
                            <span className="food-card__weight-type">кг</span>
                        </div>
                    </div>
                </label>
            </div>
            {item.count > 0 && item.selected === false ?
                <p className="food-card__trigger-text">Чего сидишь? Порадуй котэ, <a className="food-card__trigger-link" href="#" >купи</a><span className="food-card__trigger-link_dot">.</span></p> :
                item.count > 0 && item.selected === true ?
                    <p className="food-card__trigger-text">{item.description}</p> :
                    <p className="food-card__trigger-text">Печалька, с {item.filling} закончился.</p>}
        </div>
    )
}

export default Card