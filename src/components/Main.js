import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([res, card]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCards(card);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit"
              type="button"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          className="profile__add-gallery"
          type="button"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="element">
        {cards.map((card) => (
          <Card {...card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
