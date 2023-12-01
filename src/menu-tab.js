export function menuTab () {
    const mainDiv = document.querySelector('.main');
    
    const firstMenuItem = document.createElement('div');
    const secondMenuItem = document.createElement('div');
    const thirdMenuItem = document.createElement('div');
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "MENU";
    pageTitle.classList.add('title');
    
    mainDiv.appendChild(pageTitle);
    mainDiv.appendChild(firstMenuItem);
    mainDiv.appendChild(secondMenuItem);
    mainDiv.appendChild(thirdMenuItem);
    
    // first item
    const firstMenuItemHeader = document.createElement('h1');
    firstMenuItemHeader.textContent = "Classic Bread - $25";
    firstMenuItem.appendChild(firstMenuItemHeader);
    const firstMenuItemDesc = document.createElement('p');
    firstMenuItemDesc.textContent = "Bread is a food consisting of flour or meal that is moistened, kneaded into dough, and often fermented using yeast, and it has been a major sustenance since prehistoric times."
    firstMenuItem.appendChild(firstMenuItemDesc);
    firstMenuItem.appendChild(document.createElement('hr'));


    // second item
    const secondMenuItemHeader = document.createElement('h1');
    secondMenuItemHeader.textContent = "Baguette - $35";
    secondMenuItem.appendChild(secondMenuItemHeader);
    const secondMenuItemDesc = document.createElement('p');
    secondMenuItemDesc.textContent = "A baguette is a French bread shaped like a long, thin loaf with a crisp and crunchy crust. A baguette is made of wheat flour, yeast, salt, and water. It is characterized by the crisp and crunchy crust but is soft inside. Baguette is widely known for its taste and texture; it is usually baked in a stone oven."
    secondMenuItem.appendChild(secondMenuItemDesc);
    secondMenuItem.appendChild(document.createElement('hr'));

    // third item
    const thirdMenuItemHeader = document.createElement('h1');
    thirdMenuItemHeader.textContent = "Sourdough - $45";
    thirdMenuItem.appendChild(thirdMenuItemHeader);
    const thirdMenuItemDesc = document.createElement('p');
    thirdMenuItemDesc.textContent = "Sourdough or sourdough bread is a bread made by the fermentation of dough using wild lactobacillaceae and yeast. Lactic acid from fermentation imparts a sour taste and improves keeping qualities"
    thirdMenuItem.appendChild(thirdMenuItemDesc);
}