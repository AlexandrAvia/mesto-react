function PopupWithForm(props) {
  return (
    <article className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close" type="reset" />
        <h2 className="popup__title">{`${props.title}`}</h2>
        <form
          className="popup__form popup__form_profile"
          name={`form__${props.name}`}
        >
          <div className="popup__fieldset">
            <input
              type="text"
              className="popup__input popup__input_form_name"
              name="name"
              placeholder="Имя"
              required=""
              minLength={2}
              maxLength={40}
              defaultValue=""
              id="name"
            />
            <span className="popup__error name-error" />
          </div>
          <div className="popup__fieldset">
            <input
              type="text"
              className="popup__input popup__input_form_profession"
              name="profession"
              placeholder="Профессия"
              required=""
              minLength={2}
              maxLength={200}
              defaultValue=""
              id="proffesion"
            />
            <span className="popup__error proffesion-error" />
          </div>
          <button className="popup__submit popup__submit_profile" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </article>
  );
}

export default PopupWithForm;
