

const cover1 = document.querySelector('#item-1-cover');
const cover2 = document.querySelector('#item-2-cover');
const cover3 = document.querySelector('#item-3-cover');
const cover4 = document.querySelector('#item-4-cover');

const content1 = document.querySelector('#item-1-content');
const content2 = document.querySelector('#item-2-content');
const content3 = document.querySelector('#item-3-content');
const content4 = document.querySelector('#item-4-content');

const covers = [cover1, cover2, cover3, cover4];
const contents = [content1, content2, content3, content4];

const coverHandler1 = () => {
    covers.forEach(element => {
        element.style.display = "flex";
    });
    contents.forEach(element => {
        element.hidden = true;
    });
    cover1.style.display = "none";
    content1.hidden = false;
};

const coverHandler2 = () => {
    covers.forEach(element => {
        element.style.display = "flex";
    });
    contents.forEach(element => {
        element.hidden = true;
    });
    cover2.style.display = "none";
    content2.hidden = false;
};

const coverHandler3 = () => {
    covers.forEach(element => {
        element.style.display = "flex";
    });
    contents.forEach(element => {
        element.hidden = true;
    });
    cover3.style.display = "none";
    content3.hidden = false;
};

const coverHandler4 = () => {
    covers.forEach(element => {
        element.style.display = "flex";
    });
    contents.forEach(element => {
        element.hidden = true;
    });
    cover4.style.display = "none";
    content4.hidden = false;
};

cover1.addEventListener('click', coverHandler1);
cover2.addEventListener('click', coverHandler2);
cover3.addEventListener('click', coverHandler3);
cover4.addEventListener('click', coverHandler4);

const endGameContent = document.querySelector('#endGameContent');
const hoverElement = document.querySelector('#hoverElement');
const link = document.querySelector("#redditLink");
const hoverHandlerEnter = () => {
    hoverElement.hidden = true;
    link.hidden = false;
}
const hoverHandlerLeave = () => {
    hoverElement.hidden = false;
    link.hidden = true;
}

endGameContent.addEventListener('mouseenter', hoverHandlerEnter);
endGameContent.addEventListener('mouseleave', hoverHandlerLeave);
