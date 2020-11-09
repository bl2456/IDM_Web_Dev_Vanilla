const cokeLogo = document.querySelector('#coke-logo');
const spriteLogo = document.querySelector('#sprite-logo');
const doritoLogo = document.querySelector('#dorito-logo');
const kitkatLogo = document.querySelector('#kitkat-logo');

const cokeItem = document.querySelector('#coke');
const spriteItem = document.querySelector('#sprite');
const doritoItem = document.querySelector('#dorito');
const kitkatItem = document.querySelector('#kitkat');

const items = [cokeItem, spriteItem, doritoItem, kitkatItem];
const cokeHandler = () =>{
    items.forEach(element => {
        if(element !== cokeItem){
            element.style.visibility = 'hidden';
        }
        else{
            element.style.visibility = 'visible';
        }
    });
}

const spriteHandler = () =>{
    items.forEach(element => {
        if(element !== spriteItem){
            element.style.visibility = 'hidden';
        }
        else{
            element.style.visibility = 'visible';
        }
    });
}

const doritoHandler = () =>{
    items.forEach(element => {
        if(element !== doritoItem){
            element.style.visibility = 'hidden';
        }
        else{
            element.style.visibility = 'visible';
        }
    });
}

const kitkatHandler = () =>{
    items.forEach(element => {
        if(element !== kitkatItem){
            element.style.visibility = 'hidden';
        }
        else{
            element.style.visibility = 'visible';
        }
    });
}
cokeLogo.addEventListener('click', cokeHandler);
spriteLogo.addEventListener('click', spriteHandler);
doritoLogo.addEventListener('click', doritoHandler);
kitkatLogo.addEventListener('click', kitkatHandler);