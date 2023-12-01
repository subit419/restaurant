import './style.css';
import background from './background.jpg';
import { pageLoad } from './page-load';
import { homeTab } from './home-tab';
import { menuTab } from './menu-tab';

pageLoad();


const menuItems = document.querySelector('.tabs').childNodes;
const mainDiv = document.querySelector('.main');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Clear the main div
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        // load the content for the target
        if (e.target.className == 'home-tab') {
            homeTab();
        } else if (e.target.className == 'menu-tab') {
            menuTab();
        }
    })
});