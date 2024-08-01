console.log('hello world');

function formValidation(){
    let name = document.getElementById('input-name').value;
    console.log(name);

    if (name === ''){
        alert('Maaf, inputan Anda kosong.');
    } else {
        alert('Sukses menginput.');
    }
}

let indexSlide = 1; // Initial slide index
showSlide(indexSlide);

function nextSlide(n) {
    indexSlide += n;
    if (indexSlide > listImage.length) {
        indexSlide = 1;
    } else if (indexSlide < 1) {
        indexSlide = listImage.length;
    }
    showSlide(indexSlide);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    if (listImage.length === 0) return; // No images to show

    // Hide all images
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }

    // Display the current image
    listImage[n - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);