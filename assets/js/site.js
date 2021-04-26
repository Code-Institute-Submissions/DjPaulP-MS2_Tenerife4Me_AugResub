// toggles the menu in mobile devices
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// modal JS 
var modal = document.getElementById('mod');
 
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }