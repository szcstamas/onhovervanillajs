function imageChange(image) {

    document.querySelector('.main-image').src = image;
}

function circleChange(color) {

    const circle = document.querySelector('.circle');
    circle.style.background = color;
}