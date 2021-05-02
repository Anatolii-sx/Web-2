let sliderBlock = document.querySelectorAll('.slider-block'); //поиск массива центральных блоков слайдера
let sliderCircle = document.querySelectorAll('.header-content-bottom-circle'); //поиск массива точек снизу слайдера
let headerImage = document.querySelector('.header');

let current = 0; //переменная счетчик для добавления/удаления класса
// let timer = 0;

sliderRight();
sliderLeft();

document.querySelector('.header-content-rightbtn').onclick = sliderRight;
document.querySelector('.header-content-leftbtn').onclick = sliderLeft;

// Нажатие точек под слайдером

sliderCircle[0].onclick = () => {
    ex(3);
}
sliderCircle[1].onclick = () => {
    ex(0);
}
sliderCircle[2].onclick = () => {
    ex(1);
}
sliderCircle[3].onclick = () => {
    ex(2);
}

function ex(a) {
    current = a;
    sliderRight();
}

function sliderRight() {

    //Перебор всех переменных массива и удаление класса opacity1

    for (let i = 0; i < sliderBlock.length; i++) {
        sliderBlock[i].classList.remove('opacity1');
        sliderCircle[i].classList.remove('slider-circle-focus');
    }

    //Добавление класса с opacity 1 для одного блока

    current++;
    if (current == sliderBlock.length) {
        current = 0;
    }
    sliderBlock[current].classList.add('opacity1');
    sliderCircle[current].classList.add('slider-circle-focus');
    console.log(current);

    // Фоновая картинка header

    if (current == 0) {
        headerImage.style.backgroundImage = 'url(img/header_image.png)';
        headerImage.style.filter = 'inherit';
    }
    else if (current == 1) {
        headerImage.style.backgroundImage = 'url(img/header_image2.png)';
    }
    else if (current == 2) {
        headerImage.style.backgroundImage = 'url(img/header_image3.png)';
    }
    else if (current == 3) {
        headerImage.style.backgroundImage = 'url(img/header_image4.png)';
    }

    // let timer = setTimeout(sliderRight, 4000);
}

function sliderLeft() {

    //Перебор всех переменных массива и удаление класса opacity1

    for (let i = 0; i < sliderBlock.length; i++) {
        sliderBlock[i].classList.remove('opacity1');
        sliderCircle[i].classList.remove('slider-circle-focus');
    }

    //Добавление класса с opacity 1 для одного блока

    current--;
    if (current < 0) {
        current = sliderBlock.length - 1;
        sliderBlock[current].classList.add('opacity1');
        sliderCircle[current].classList.add('slider-circle-focus');
    }
    sliderBlock[current].classList.add('opacity1');
    sliderCircle[current].classList.add('slider-circle-focus');
    console.log(current);

    // Фоновая картинка header

    if (current == 0) {
        headerImage.style.backgroundImage = 'url(img/header_image.png)';
        headerImage.style.filter = 'inherit';
    }
    else if (current == 1) {
        headerImage.style.backgroundImage = 'url(img/header_image2.png)';
    }
    else if (current == 2) {
        headerImage.style.backgroundImage = 'url(img/header_image3.png)';
    }
    else if (current == 3) {
        headerImage.style.backgroundImage = 'url(img/header_image4.png)';
    }
}

// Слайдер по стрелкам клавиатуры

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key == "ArrowRight") {
        sliderRight();
    }
    else if (event.key == "ArrowLeft") {
        sliderLeft();
    }
});

// Видео

const videoBox = document.querySelector('.section3');
const video = document.querySelector('.section3-video');
let pause = document.querySelector('.section3-playicon-pause');
let play = document.querySelector('.section3-playicon');
let videoDescription = document.querySelectorAll('.section3-description');
const videoButtonFull = document.querySelector('.section3-btn');
let time = '';


videoBox.onclick = VideoClick;

function VideoClick() {
    if (video.paused) {
        video.play();
        play.classList.toggle('video-btn-opacity0');
        pause.classList.toggle('video-btn-opacity0');

        video.style.filter = 'brightness(100%)';

        // Исчезновение описания к видео

        for (let i = 0; i < videoDescription.length; i++) {
            videoDescription[i].classList.add('video-description-hide');
        }

        // Исчезновение кнопки паузы через 3 секунды

        function hidePauseBtn() {
            videoButtonFull.style.opacity = 0;
        }

        time = setTimeout(hidePauseBtn, 3000);

    }

    else if (video.play) {
        video.pause();
        play.classList.toggle('video-btn-opacity0');
        pause.classList.toggle('video-btn-opacity0');

        // Затемнение видео при паузе
        video.style.filter = 'brightness(40%)';

        videoButtonFull.style.opacity = 1;
        clearTimeout(time);
    }
};

// Pause/play при нажатии Space

document.addEventListener('keydown', function (e) {
    if (e.key == " " || e.code == "Space") {
        e.preventDefault(); // Чтобы не скроллилась страница при нажатии на Space
        VideoClick();
    }
});







