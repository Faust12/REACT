import React from 'react';
import Contacts from './contacts.jsx'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <nav>
            <div></div>
            <ul>
              <li><a href="index.html" class="selected">Главная</a></li>
              <li><a href="delivery.html">Доставка и оплата</a></li>
              <li><a href="about.html">О компании</a></li>
              <li><a href="contacts.html">Контакты</a></li>
              <li><a href="" onClick="getCatalog(event)">Каталог</a></li>
            </ul>
          </nav>
          <div>
            Корзина: 0 руб
          </div>
        </div>
        <div>
          <a href="index.html"><img src="img/logo.jpg" alt="logo" /></a>
          <Contacts />
          <div>
            <input type="text" placeholder="Поиск по каталогу" />
            <button onClick="search(event)"></button>
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <li><a href="#" onClick="showSigs(event, 'sig')">Электронные сигареты</a></li>
              <li><a href="#" onClick="showSigs(event, 'fl')">Жидкости</a></li>
              <li>
                <a href="#">Комплектующие</a>
                <ul>
                  <li><a href="#">Дрипки</a></li>
                  <li><a href="#">Баки</a></li>
                </ul>
              </li>
              <li><a href="#">Аккумуляторы</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;