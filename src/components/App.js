import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, card]) => {
        setCurrentUser(userData);
        setCards(card);
      })
      .catch(console.log);
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((res) => {
        console.log(res);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile(name, about)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        {/* popup profile edit */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        {/* popup add gallery card  */}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name="gallery"
          title="Новое место"
          buttonText="Создать"
          children={
            <>
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
            </>
          }
        />
        {/* popup avatar update */}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          name="avatar"
          title="Обновить аватар"
          buttonText=" Сохранить"
          children={
            <>
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
            </>
          }
        />
        {/* popup big photo */}
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        {/* popup with confirmation */}
        {/* <article className="popup popup_type_confirmation">
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
      </article> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
