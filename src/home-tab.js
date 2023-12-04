export function homeTab() {

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Top-notch Bun";
    pageTitle.classList.add('title');

    const mainDiv = document.querySelector('.main');
    const mainHeading = document.createElement('h1');
    const mainPara = document.createElement('p');

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
    mainDiv.appendChild(mainHeading);
    mainDiv.appendChild(mainPara);
}  
