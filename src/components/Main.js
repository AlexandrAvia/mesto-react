function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name" />
            <button className="profile__edit" type="button" />
          </div>
          <p className="profile__profession" />
        </div>
        <button className="profile__add-gallery" type="button" />
      </section>
      <section className="element" />
      <template className="element-template" />
    </main>
  );
}

export default Main;
