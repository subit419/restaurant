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
    const mainHeading = document.createElement('h1');
    const mainPara = document.createElement('p');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Top-notch Bun";
    pageTitle.classList.add('title');
    mainDiv.appendChild(pageTitle);


    mainHeading.textContent = 'THE HOME OF THE BEST BREAD';
    mainPara.textContent = 'Bread is a food consisting of flour or meal that is moistened, ' +
    'kneaded into dough, and often fermented using yeast, and it has been a major sustenance ' +
    'since prehistoric times.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas '+
    'sollicitudin lorem eu sapien mattis varius. Nunc sagittis mauris at felis dictum placerat. '+
    'Nam vehicula suscipit arcu, sit amet tempor dui tincidunt non. Suspendisse porttitor consectetur '+
    'velit, id commodo diam convallis ut. Sed neque quam, vehicula luctus velit et, hendrerit ullamcorper '+
    'nibh. In nec ultricies massa, ut mollis leo. Mauris et odio dui. Cras efficitur sit amet purus in suscipit. '+
    'Suspendisse posuere ante non molestie finibus. Etiam ultricies, lectus in consequat condimentum, '+
    'nunc sapien congue enim, eu suscipit felis felis sit amet eros.';
    
    mainDiv.classList.add('main');
    contentDiv.appendChild(mainDiv);

   
    mainDiv.appendChild(mainHeading);
    mainDiv.appendChild(mainPara);

    

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