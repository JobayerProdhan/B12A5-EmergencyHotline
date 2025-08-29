const heartIcon = document.getElementsByClassName('heart-icon'); 

for(let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function() {
        alert('Heart icon clicked!');

        const isSolid = heartIcon[i].classList.contains('fa-solid');
        if (isSolid) {
            heartIcon[i].classList.remove('fa-solid');
            heartIcon[i].classList.add('fa-regular');
        } else {
            heartIcon[i].classList.remove('fa-regular');
            heartIcon[i].classList.add('fa-solid');
        }

        const heartCountElement = document.getElementById('heart-count');
        heartCountElement.innerText = parseInt(heartCountElement.innerText) + (isSolid ? -1 : 1);
    });
}

