
const podsClick = document.querySelector('#podsClick');
const smokeClick = document.querySelector('#smokeClick');
const beerClick = document.querySelector('#beerClick');

const dataPods = document.querySelector('[data-tab="pods"]');
const dataSmoke = document.querySelector('[data-tab="smoke"]');
const dataBeer = document.querySelector('[data-tab="beer"]');

const idPods = document.querySelector('#pods');
const idSmoke = document.querySelector('#smoke');
const idBeer = document.querySelector('#beer');


function clickTab (a, b, c) {
  const contents = document.querySelectorAll('.tabs__content');
  const tabs = document.querySelectorAll('.tabs__caption');

  a.onclick = () => {
    contents.forEach(element => {
      element.classList.remove('tabs__content_active');
    });
    b.classList.add('tabs__content_active');

    tabs.forEach(element => {
      element.classList.remove('tabs__caption_active');
    });
    c.classList.add('tabs__caption_active');
  };

}


clickTab(podsClick, idPods, dataPods);
clickTab(smokeClick, idSmoke, dataSmoke);
clickTab(beerClick, idBeer, dataBeer);
