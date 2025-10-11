import React from "react";
import "./SolovievPortfolio.css";

function SolovievPortfolio() {
  return (
    <div className="portfolio-wrapper">
      {/* Главная секция */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/pic1.jpg)`,
        }}
      >
        <div className="overlay"></div>
        <div className="center-block">
          <h1 className="site-title">BUILDSY.RU</h1>
          <p className="site-subtitle">ИП Соловьёв Всеволод Александрович</p>
        </div>
      </section>

      {/* О нас */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/pic2.jpg)`,
        }}
      >
        <div className="overlay"></div>
        <div className="center-block blur-section">
          <h2>О нас</h2>
          <p>
            Мы — команда, которая знает, как превратить строительный объект в
            готовое пространство. Занимаемся отделкой, демонтажом и подготовкой
            помещений под новые задачи. Работаем чётко, слаженно и без лишнего
            шума — просто делаем то, что нужно, и делаем это качественно. Там,
            где другим неудобно — мы работаем в штатном режиме.
          </p>
        </div>
      </section>

      {/* Контакты */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/pic3.jpg)`,
        }}
      >
        <div className="overlay"></div>
        <div className="center-block blur-section">
          <h2>Контакты</h2>
          <p>📞 Телефон: +7 (937) 917-07-22</p>
          <p>✉ E-mail: vsevolovv@bk.ru</p>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer">
        <p>
          © 2025 BUILDSY.RU. ИП Соловьёв Всеволод Александрович. Все права
          защищены.
        </p>
      </footer>
    </div>
  );
}

export default SolovievPortfolio;
