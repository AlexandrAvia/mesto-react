function ImagePopup() {
  return (
    <article className="popup popup_type_photo">
      <div className="popup__container popup__container_photo">
        <img src="." alt="" className="popup__image" />
        <p className="popup__image-title" />
        <button className="popup__close popup__close_photo" type="reset" />
      </div>
    </article>
  );
}

export default ImagePopup;
