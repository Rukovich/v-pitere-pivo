function addCard(
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

//НАПИТКИ

window.addEventListener("DOMContentLoaded", () => {
  //Медоварус
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `Квас "МЕДОВАРУС"`,
    `Медовуха приготовлена по уникальной старинной рецептуре из натурального меда,
      патоки, пряностей и трав методом естественного брожения. В напитке сохранены истинный медовый вкус и
      аромат, дополненные пряными и травяными оттенками.`,
    `Алк-5,7% пл.-16%`,
    `55`,
    `110`,
    `.cards-beer`
  );

  //Дюшес
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Дюшес"`,
    `сладкий безалкогольный газированный напиток, созданный на основе вкусовых и
    ароматических композиций десертных сортов груши с нежной, сочной и сладкой мякотью.производятся только
    на натуральном сырье: прекрасно сбалансированная очищенная вода, сахар и сахарный колер.`,
    `Алк-5,7% пл.-16%`,
    `45`,
    `90`,
    `.cards-beer`
  );

  //Традиционный
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Традиционный"`,
    `Медовуха приготовлена по уникальной старинной рецептуре из натурального меда,
    патоки, пряностей и трав методом естественного брожения. В напитке сохранены истинный медовый вкус и
    аромат, дополненные пряными и травяными оттенками.`,
    `Алк-5,7% пл.-16%`,
    `120`,
    `240`,
    `.cards-beer`
  );

  //Бланш Бир
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Бланш Бир"`,
    `Ароматный, пшеничный, непастеризованный сорт в бельгийских традициях с приятным
    изысканным вкусом, пикантными фруктовыми нотками и умеренной хмелевой горчинкой.`,
    `Алк-4,8% пл.-12%`,
    `80`,
    `160`,
    `.cards-beer`
  );

  //Псковское Абрикосовое
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Псковское Абрикосовое"`,
    `Уникальное сочетание абрикоса и персика в авторской рецептуре. Органолептика
    продукта идентична известному Бельгийскому сорту «Mort subite lambic». Нефильтрованное и идеально
    сбалансированное пиво с ярким, сочным, летним ароматом абрикоса, фруктовой нотой дополняющей солодовый
    характер.`,
    `Алк-4.7% пл.-12%`,
    `110`,
    `220`,
    `.cards-beer`
  );

  //Вайс Берг пшеничное
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Вайс Берг пшеничное"`,
    `Пшеничное нефильтрованное пиво, имеет особый цвет, специальный сорт светлой
      пшеницы отсутствие фильтрации и наличие дрожжей в готовом пиве делают его непрозрачным и беловатым.`,
    `Алк-4.7% пл.-12%`,
    `90`,
    `180`,
    `.cards-beer`
  );

  //"Специальное №5"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Специальное №5"`,
    `Вишнёвый лагер сварен в классическом немецком стиле с добавлением натурального
    сока вишни на стадии брожения. Пиво мягкое, в меру сладкое, хмелевая горечь едва заметна.`,
    `Алк-4,0% пл.-12%`,
    `135`,
    `170`,
    `.cards-beer`
  );

  //"Мальц Вайзен"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Мальц Вайзен"`,
    `Обладает выраженным насыщенным вкусом только что сваренного «живого» пива и
    свежим хмелевым ароматом с медовыми нотками. В богатом вкусе особое место занимает пикантная горчинка.
    Для любителей нефильтрованного, сваренного по европейским традициям.`,
    `Алк-4,5% пл.-10%`,
    `60`,
    `120`,
    `.cards-beer`
  );

  //"Ирландский Эль"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Ирландский Эль"`,
    `Крепкий и необычный мягкий с винным оттенком во вкусе. Сварен из готового сусла
    с начальной плотность 16%. Это оригинальное пиво отличает особый рубиновый цвет, приятный
    ячменно-солодовый вкус и аромат.`,
    `Алк-6.5% пл.-16%`,
    `95`,
    `190`,
    `.cards-beer`
  );

  //Культ
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `Культ"`,
    `Светлое пшеничное пиво, с терпким пряным сладковатым вкусом. Изысканный
      нефильтрованный напиток идеально дополнит легкий ужин.`,
    `Алк-6.0% пл.-16%`,
    `100`,
    `200`,
    `.cards-beer`
  );

  //"КРЕПКИЙ ХМЕЛЬ"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"КРЕПКИЙ ХМЕЛЬ"`,
    `Светлое крепкое пиво, обладает своим выраженным плотным вкусом благодаря
    специальному солоду в составе и увеличенному времени натурального брожения.`,
    `Алк-8.0% пл.-17%`,
    `85`,
    `170`,
    `.cards-beer`
  );

  //"Василеостровское Домашнее"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Василеостровское Домашнее"`,
    `Светлый нефильтрованный Лагер раскрывает всю яркость солодового вкуса
    уравновешенного невероятной дрожжевой мягкостью`,
    `Алк-4.5% пл.-12%`,
    `100`,
    `200`,
    `.cards-beer`
  );

  //"Ин вэ скай"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Ин вэ скай"`,
    `Небесно ясная IPA с сочетанием хмеля Citra, Mosaic и Galaxy`,
    `Алк-5,4% пл.-16%`,
    `125`,
    `250`,
    `.cards-beer`
  );

  //"Васька"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Васька"`,
    `Светлый нефильтрованный Лагер имеет солодовый вкус и мягкий дрожжевой аромат.`,
    `Алк-4,0% пл.-11%`,
    `75`,
    `140`,
    `.cards-beer`
  );

  //"Советское Жигулевское"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Советское Жигулевское"`,
    `Светлое пастеризованное фильтрованное. Культовое пиво Советского союза. Впервые
    его сварили в Самаре в 1935г. Сварено по рецептуре, которая была внесена в ГОСТ, аж в 1938 году!`,
    `Алк-4.0% пл.-11%`,
    `65`,
    `130`,
    `.cards-beer`
  );

  //"Хвойнинское Элитное"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Хвойнинское Элитное"`,
    `Пиво «Хвойнинское Элитное» светлое фильтрованное варится с использованием
    артезианской воды и экологически чистого сырья по классической технологии. Отборные сорта английского
    солода и хмеля позволяют получить пиво высокого качества с тонкими вкусовыми оттенками. Пиво является
    ЖИВЫМ.`,
    `Алк-4.7% пл.-12%`,
    `90`,
    `180`,
    `.cards-beer`
  );

  //"БЛЭК ВЕЛЬВЕТ"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Хвойнинское Элитное"`,
    `Темный Лагер варится по особой рецептуре из пяти сортов солода, придающих пиву
    насыщенный темный цвет, карамельный аромат и бархатный вкус.`,
    `Алк-5,8% пл.-15%`,
    `95`,
    `190`,
    `.cards-beer`
  );

  //"Пуаре"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Пуаре"`,
    `Грушевый квас или, как его стали называть на французский манер Пуаре, -
    является одной из разновидностей плодового кваса и на протяжении веков был очень популярен среди
    населения.`,
    `Алк-6,0% пл.-16%`,
    `130`,
    `260`,
    `.cards-beer`
  );

  //"Айсти"
  addCard(
    "https://pivaldi.ru/wp-content/uploads/2022/04/pshenichnoe-1L.jpg",
    "beer",
    `"Айсти"`,
    `Напиток брожения получен по технологии производства «Шампанского» путем
      брожения яблочного сусла с добавлением натуральных компонентов винограда`,
    `Алк-6,0% пл.-12%`,
    `75`,
    `150`,
    `.cards-beer`
  );
});
