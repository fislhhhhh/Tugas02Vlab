const dynamicImage = document.getElementById('dynamicImage');
const description = document.getElementById('description');

let isImageVisible = true; 

function toggleContent() {
    if (isImageVisible) {
        dynamicImage.classList.remove('active');
        dynamicImage.classList.add('inactive');
        description.classList.remove('inactive');
        description.classList.add('active');
    } else {
        
        description.classList.remove('active');
        description.classList.add('inactive');
        dynamicImage.classList.remove('inactive');
        dynamicImage.classList.add('active');
    }
   
    isImageVisible = !isImageVisible;
}


setInterval(toggleContent, 5000);


window.onload = function() {
    dynamicImage.classList.add('active');
    description.classList.add('inactive');
}
