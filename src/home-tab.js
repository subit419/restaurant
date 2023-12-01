export function homeTab() {

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Top-notch Bun";
    pageTitle.classList.add('title');

    const mainDiv = document.querySelector('.main');
    const mainHeading = document.createElement('h1');
    const mainPara = document.createElement('p');

    mainDiv.appendChild(pageTitle);
    mainHeading.textContent = 'BREAD';
    mainPara.textContent = 'Bread is a food consisting of flour or meal that is moistened, kneaded into dough, and often fermented using yeast, and it has been a major sustenance since prehistoric times.';
    mainDiv.appendChild(mainHeading);
    mainDiv.appendChild(mainPara);
}  
