const podsClick = document.querySelector('#podsClick');
const smokeClick = document.querySelector('#smokeClick');
const beerClick = document.querySelector('#beerClick');

const dataPods = '[data-tab="pods"]';
const dataSmoke ='[data-tab="smoke"]';
const dataBeer ='[data-tab=beer]';


function clickNavigation(navClick, dataNav) {
  const tabs = document.querySelectorAll('.tabs__caption');
  navClick.onclick = () => {

    tabs.forEach(element => {
      element.classList.remove('tabs__caption_active');
    });
    document.querySelector(`${dataNav}`).classList.add('tabs__caption_active');
  };
} 
clickNavigation(podsClick, dataPods);
clickNavigation(smokeClick, dataSmoke);
clickNavigation(beerClick, dataBeer);

