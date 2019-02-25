export default (caption, amount = 0, isActive = false, isAdditional = false) =>
  `<a href="#${caption}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``} ${isAdditional ? `main-navigation__item--additional` : ``}">${caption} ${amount > 0 ? `<span class="main-navigation__item-count">${amount}</span></a>` : ``}</a>`;
