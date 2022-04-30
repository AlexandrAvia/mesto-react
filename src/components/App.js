function App() {
  return (
    <body class="page">
      <header class="header">
        <img
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип проекта с надписью Mesto Russia"
          class="header__logo"
        />
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__avatar"></div>
          <div class="profile__info">
            <div class="profile__container">
              <h1 class="profile__name"></h1>
              <button class="profile__edit" type="button"></button>
            </div>
            <p class="profile__profession"></p>
          </div>
          <button class="profile__add-gallery" type="button"></button>
        </section>
        <section class="element"></section>
        <template class="element-template">
          <article class="element__card">
            <img class="element__image" src="." />
            <div class="element__caption">
              <p class="element__title"></p>
              <div class="element__like-group">
                <button
                  class="element__like-button"
                  type="button"
                  aria-label="Поставить лайк"
                ></button>
                <span class="element__like-count"></span>
              </div>
            </div>
            <button
              class="element__delete-button"
              type="button"
              aria-label="Удалить карточку"
            ></button>
          </article>
        </template>
      </main>
      <footer class="footer">
        <p class="footer__text">© 2022 Mesto Russia</p>
      </footer>
      {/* popup profile edit */}
      <article class="popup popup_type_profile">
        <div class="popup__container">
          <button class="popup__close" type="reset"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form popup__form_profile" name="form__profile">
            <div class="popup__fieldset">
              <input
                type="text"
                class="popup__input popup__input_form_name"
                name="name"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40"
                value=""
                id="name"
              />
              <span class="popup__error name-error"></span>
            </div>
            <div class="popup__fieldset">
              <input
                type="text"
                class="popup__input popup__input_form_profession"
                name="profession"
                placeholder="Профессия"
                required
                minlength="2"
                maxlength="200"
                value=""
                id="proffesion"
              />
              <span class="popup__error proffesion-error"></span>
            </div>
            <button class="popup__submit popup__submit_profile" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </article>
      {/* popup add gallery card  */}
      <article class="popup popup_type_gallery">
        <div class="popup__container">
          <button
            class="popup__close popup__close_gallery"
            type="reset"
          ></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form popup__form_gallery" name="form__gallery">
            <div class="popup__fieldset">
              <input
                type="text"
                class="popup__input popup__input_form_image-title"
                name="place"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
                value=""
                id="place-name"
              />
              <span class="popup__error place-name-error"></span>
            </div>
            <div class="popup__fieldset">
              <input
                class="popup__input popup__input_form_image-src"
                name="url"
                placeholder="Ссылка на картинку"
                type="url"
                value=""
                required
                id="place-url"
              />
              <span class="popup__error place-url-error"></span>
            </div>
            <button class="popup__submit popup__submit_add" type="submit">
              Создать
            </button>
          </form>
        </div>
      </article>
      {/* popup big photo  */}
      <article class="popup popup_type_photo">
        <div class="popup__container popup__container_photo">
          <img src="." alt="" class="popup__image" />
          <p class="popup__image-title"></p>
          <button class="popup__close popup__close_photo" type="reset"></button>
        </div>
      </article>
      {/* popup with confirmation  */}
      <article class="popup popup_type_confirmation">
        <div class="popup__container">
          <h2 class="popup__title popup__title_confirmation">Вы уверены?</h2>
          <button class="popup__close" type="reset"></button>
          <form
            class="popup__form popup__form_confirmation"
            name="form__confirmation"
          >
            <button
              class="popup__submit popup__submit_confirmation"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </article>
      {/* popup avatar update  */}
      <article class="popup popup_type_avatar">
        <div class="popup__container">
          <button
            class="popup__close popup__close_avatar"
            type="reset"
          ></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form popup__form_avatar" name="form__avatar">
            <div class="popup__fieldset">
              <input
                class="popup__input popup__input_form_avatar"
                name="avatar"
                placeholder="Ссылка на аватар"
                type="url"
                value=""
                required
                id="avatar"
              />
              <span class="popup__error avatar-error"></span>
            </div>
            <button class="popup__submit popup__submit_add" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </article>
    </body>
  );
}

export default App;
