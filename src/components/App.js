import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      {/* popup profile edit */}
      <article className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close" type="reset" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_profile"
            name="form__profile"
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
            <button
              className="popup__submit popup__submit_profile"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </article>
      {/* popup add gallery card  */}
      <article className="popup popup_type_gallery">
        <div className="popup__container">
          <button className="popup__close popup__close_gallery" type="reset" />
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_gallery"
            name="form__gallery"
          >
            <div className="popup__fieldset">
              <input
                type="text"
                className="popup__input popup__input_form_image-title"
                name="place"
                placeholder="Название"
                required=""
                minLength={2}
                maxLength={30}
                defaultValue=""
                id="place-name"
              />
              <span className="popup__error place-name-error" />
            </div>
            <div className="popup__fieldset">
              <input
                className="popup__input popup__input_form_image-src"
                name="url"
                placeholder="Ссылка на картинку"
                type="url"
                defaultValue=""
                required=""
                id="place-url"
              />
              <span className="popup__error place-url-error" />
            </div>
            <button className="popup__submit popup__submit_add" type="submit">
              Создать
            </button>
          </form>
        </div>
      </article>
      {/* popup big photo */}
      <article className="popup popup_type_photo">
        <div className="popup__container popup__container_photo">
          <img src="." alt="" className="popup__image" />
          <p className="popup__image-title" />
          <button className="popup__close popup__close_photo" type="reset" />
        </div>
      </article>
      {/* popup with confirmation */}
      <article className="popup popup_type_confirmation">
        <div className="popup__container">
          <h2 className="popup__title popup__title_confirmation">
            Вы уверены?
          </h2>
          <button className="popup__close" type="reset" />
          <form
            className="popup__form popup__form_confirmation"
            name="form__confirmation"
          >
            <button
              className="popup__submit popup__submit_confirmation"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </article>
      {/* popup avatar update */}
      <article className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close popup__close_avatar" type="reset" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_avatar" name="form__avatar">
            <div className="popup__fieldset">
              <input
                className="popup__input popup__input_form_avatar"
                name="avatar"
                placeholder="Ссылка на аватар"
                type="url"
                defaultValue=""
                required=""
                id="avatar"
              />
              <span className="popup__error avatar-error" />
            </div>
            <button className="popup__submit popup__submit_add" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </article>
    </div>
  );
}

export default App;
