document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight'){
        var person = document.getElementById('person');
        var currentLeft = parseInt(window.getComputedStyle(person).left,10);
        person.style.left = (currentLeft + 1) + "vh";
    }
});