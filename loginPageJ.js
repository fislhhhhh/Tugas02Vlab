// function toggleForm() {
//     const loginWrap = document.getElementById('loginWrap');
//     const signUpWrap = document.getElementById('signUpWrap');

//     document.getElementById('signUpWrap').classList.add('hidden');
// }

// // Menyembunyikan sign-up wrap secara default
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('signUpWrap').classList.add('hidden');
// });
const dynamicImage = document.getElementById('loginWrap');
const description = document.getElementById('signUpWrap');
const loginDy = document.getElementById('loginDy');
const signUpDy = document.getElementById('signUpDy');

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





window.onload = function() {
    dynamicImage.classList.add('active');
    description.classList.add('inactive');
}
