export function pageLoad () {
    const contentDiv = document.getElementById("content");

    // header
    const header = document.createElement('div');
    header.classList.add('header');
    contentDiv.appendChild(header);

    const tabList = document.createElement('ul');
    tabList.classList.add('tabs');

    const homeTab = document.createElement('li');
    homeTab.textContent = 'Home';
    homeTab.classList.add('home-tab');
    tabList.appendChild(homeTab);

    const menuTab = document.createElement('li');
    menuTab.textContent = 'Menu';
    menuTab.classList.add('menu-tab');
    tabList.appendChild(menuTab);

    const aboutTab = document.createElement('li');
    aboutTab.textContent = 'About';
    aboutTab.classList.add('about-tab');
    
    tabList.appendChild(aboutTab);
    header.appendChild(tabList)
    


    // main
    const mainDiv = document.createElement('div');
    const mainHeading = document.createElement('p');
    mainHeading.textContent = 'BREAD';
    mainDiv.classList.add('main');
    contentDiv.appendChild(mainDiv);


    mainDiv.appendChild(mainHeading);

    

    // footer
    const footerDiv = document.createElement('div')
    footerDiv.classList.add('footer');
    contentDiv.appendChild(footerDiv);

    const author = document.createElement('p');
    author.textContent = "Site by Mark Subit";
    footerDiv.appendChild(author);

    const imageCredit = document.createElement('a');
    imageCredit.href = 'https://unsplash.com/@mitifotos';
    imageCredit.textContent = 'Image by miti on Unsplash';

    footerDiv.appendChild(imageCredit);


}