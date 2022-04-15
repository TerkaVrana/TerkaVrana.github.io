
let currentPhotoIndex = 0;

const imagesData = [
    {
        photo: 'assets/01n-bar-viz.png',
        title: 'My title',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'assets/02i-viz.png',
        title: 'My title 2',
        description: 'What happened here, why is this a very nice image 2'
    }
];
setImage();

let timeout;
function myFunction() {
    timeout = setInterval(next, 3000);
}
myFunction();

function setImage() {
    const data = imagesData[currentPhotoIndex];
    console.log(currentPhotoIndex, data);
    $('header').css('background-image', `url(${data.photo})`);
    $('#photo-title').text(data.title);
    $('#photo-description').text(data.description);
}


function next() {
    currentPhotoIndex = currentPhotoIndex + 1;
    if (currentPhotoIndex >= imagesData.length) {
        currentPhotoIndex = 0;
    }
    setImage();
}

function prev() {
    currentPhotoIndex = currentPhotoIndex - 1;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = imagesData.length - 1;
    }
    setImage();
}


$('button#prev').click(() => {
    prev();
});

$('button#next').click(() => {
    next();
});
