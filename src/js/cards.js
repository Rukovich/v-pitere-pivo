export function addCard(
  img,
  alt,
  subtitle,
  descr,
  alc,
  price,
  priceTwo,
  parentSelector
) {
  const element = document.createElement("div");
  const parent = document.querySelector(parentSelector);

  element.innerHTML = `
    <div class="card">
    <div class="card__content">
      <img src=${img} alt=${alt}
        class="card__img">
      <div class="card__subtitle">${subtitle}</div>
      <div class="card__descr">${descr}<br>
        <span>${alc}</span>
      </div>
    </div>
    <hr>
    <div class="card__price">${price}<span> Руб / 0.5л</span>
      <br>
      ${priceTwo}<span> Руб / 1л</span>
    </div>
  </div>

  `;
  parent.append(element);
}
