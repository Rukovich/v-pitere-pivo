
const headerIdPods = document.querySelector('#podsClick');
const headerIdSmoke = document.querySelector('#smokeClick'); 
const headerIdbeer = document.querySelector('#beerClick'); 

const dataTabPods = document.querySelector('[data-tab="pods"]');
const dataTabSmoke = document.querySelector('[data-tab="smoke"]');
const dataTabBeer = document.querySelector('[data-tab="beer"]');

const tabIdPods = document.querySelector('#pods');
const tabIdSmoke = document.querySelector('#smoke');
const tabIdBeer = document.querySelector('#beer');

function controlItTabs (a, b, c) {
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

controlItTabs(headerIdPods, tabIdPods, dataTabPods);
controlItTabs(headerIdSmoke, tabIdSmoke, dataTabSmoke);
controlItTabs(headerIdbeer, tabIdBeer, dataTabBeer);
