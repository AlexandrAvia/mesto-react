function handleEditAvatarClick() {
  document.querySelector(".popup_type_avatar").classList.add("popup_opened");
}
function handleEditProfileClick() {
  document.querySelector(".popup_type_profile").classList.add("popup_opened");
}
function handleAddPlaceClick() {
  document.querySelector(".popup_type_gallery").classList.add("popup_opened");
}

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick} />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name" />
            <button
              className="profile__edit"
              type="button"
              onClick={handleEditProfileClick}
            />
          </div>
          <p className="profile__profession" />
        </div>
        <button
          className="profile__add-gallery"
          type="button"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="element" />
      <template className="element-template" />
    </main>
  );
}

export default Main;
