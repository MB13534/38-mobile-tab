const buttons = document.querySelectorAll('li')
const images = document.querySelectorAll('.content')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        hideAllImages();
        hideAllButtons();     
        
        button.classList.add('active')
        images[index].classList.add('show')
    })
})

function hideAllImages(){
    images.forEach((image) => {
        image.classList.remove('show')
    })
}

function hideAllButtons(){
    buttons.forEach((button) => {
        button.classList.remove('active')
    })
}