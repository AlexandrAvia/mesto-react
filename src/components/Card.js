function Card(card) {
  return (
    <article className="element__card">
      <img className="element__image" src={card.link} alt={card.name} />
      <div className="element__caption">
        <p className="element__title">{card.name}</p>
        <div className="element__like-group">
          <button
            className="element__like-button"
            type="button"
            aria-label="Поставить лайк"
          />
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
      <button
        className="element__delete-button"
        type="button"
        aria-label="Удалить карточку"
      />
    </article>
  );
}

export default Card;
