//loop on the buttons
const box = document.querySelectorAll('[data-box]');
box.forEach(button => {
    button.addEventListener('click', () => {
       if(button.id == 'box-1'){
           alert('box 1 is clicked!');
       } else if(button.id == 'box-2') {
        alert('box 2 is clicked!');
       } else {
           alert('box 3 is clicked');
       }
    })
})