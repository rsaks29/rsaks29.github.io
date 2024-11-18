// script.js
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var dropdownList = document.querySelector('.dropdown-list');
    // Toggle the display of the dropdown list
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});