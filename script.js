function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    if (answer === '4618') {
        document.getElementById('popup-text').innerText = 'Hammayya nv eh na .. sare idhi choodu.';
        document.getElementById('popup-button').innerText = 'Click Here';
        document.getElementById('popup-button').onclick = showSlide2;
    } else {
        document.getElementById('popup-text').innerText = 'Inko chance isthunna ..vaadesko';
        document.getElementById('popup-button').innerText = 'Try Again';
        document.getElementById('popup-button').onclick = closePopup;
    }
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function showSlide2() {
    closePopup();
    document.getElementById('slide1').classList.remove('active');
    document.getElementById('slide2').classList.add('active');
}

function showSlide3() {
    document.getElementById('slide2').classList.remove('active');
    document.getElementById('slide3').classList.add('active');
}

function showNoPopup() {
    document.getElementById('no-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeNoPopup() {
    document.getElementById('no-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function showSlide4() {
    document.getElementById('slide3').classList.remove('active');
    document.getElementById('slide4').classList.add('active');
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
    drawing = true;
    draw(e);
}

function stopDrawing() {
    drawing = false;
    context.beginPath();
}

function draw(e) {
    if (!drawing) return;

    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

const backButton = document.getElementById('back-button');

// Add event listener to the back button
backButton.addEventListener('click', function() {
    slide3.classList.remove('active'); // Hide slide3
    slide2.classList.add('active'); // Show slide2
});


function showSlide(slide) {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.remove('active');
    });
    slide.classList.add('active');
}

// Event listener for the home button on slide 4
document.getElementById('home-button').addEventListener('click', function() {
    showSlide(slide1);
});

