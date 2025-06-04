
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span role="img" aria-label="cake">🧁</span>
        <span className="header__title">Сладкая жизнь</span>
      </div>
      <nav className="header__nav">
        <a href="#">Добавить десерт</a>
        <a href="#">О сайте</a>
        <a href="#">Обратная связь</a>
      </nav>
      <div className="header__auth">
        <a href="#">root | Выйти</a>
      </div>
    </header>
  );
}

export default Header;