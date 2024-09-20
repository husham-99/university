
let icon = document.querySelector(".icon")
let navLink = document.querySelector(".nav-link")
let close = document.querySelector(".close")


icon.addEventListener('click' , () =>{


    navLink.classList.add('open')
     
})


close.addEventListener('click', () =>{


    navLink.classList.remove('open')
    

})