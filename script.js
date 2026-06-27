// script.js
const dropdownButton = document.querySelector('.dropdown-btn');
const dropdownList = document.querySelector('.dropdown-list');

if (dropdownButton && dropdownList) {
    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownList.classList.toggle('show-dropdown');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.classList.remove('show-dropdown');
        }
    });
}

if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: "pT1thhECmL_xOXlQ-pRkk" });
}