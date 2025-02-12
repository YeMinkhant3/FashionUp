// searchinput change Js
let search_input = document. getElementById ('search-input')
let icon_items = document .getElementsByClassName ('icon-item')
search_input.onfocus = function() {
    
    for(let item of icon_items) {
        item.style.display = "none"
    }
    this.style.width ='150px'
}

search_input.onblur = function() {
    
    for(let item of icon_items) {
        item.style.display = "block"
    }
    this.style.width ='65px'
}

// navbar Bg Js
let nav = document.getElementById ('nav')
window.onscroll = function () { 
    if (window.pageYOffset > 420) {
        nav.classList.add ('bg')
    } else {
        nav.classList.remove('bg') 
    }
   
}

// Navbar Show & Hide Js
let bars = document.getElementById ('bars')
let navbar_menu = document.getElementById ('navbar-menu')
bars.onclick = function() {
    navbar_menu.classList.toggle ('active')

    if(this.innerHTML == '<i class="fa-solid fa-bars"></i>') {
        this.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        this.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
}

// Slider Js

let next_btn = document.getElementById ('next-btn')
let prev_btn = document.getElementById ('prev-btn')
let sliders = document.getElementsByClassName ('slider')
let slider_number = 1

function next() {
    document.getElementById ('slider' + slider_number).classList.remove ('active')

    slider_number ++
    if (slider_number > sliders.length){
        slider_number = 1
    }

    document.getElementById ('slider' + slider_number).classList.add ('active')
    // console.log (slider_number)
}



function prev() {
    document.getElementById ('slider' + slider_number).classList.remove ('active')

    slider_number --
    if (slider_number < 1){
        slider_number = sliders.length
    }

    document.getElementById ('slider' + slider_number).classList.add ('active')
}

next_btn.onclick = next
prev_btn.onclick = prev
setInterval(next, '3000')

// Product filter Js

let all_btn = document.getElementById ('all-btn')
let cloth_btn = document.getElementById ('cloth-btn')
let shoe_btn = document.getElementById ('shoe-btn')
let watch_btn = document.getElementById ('watch-btn')

let cloth_cards = document.getElementsByClassName ('cloth')
let shoe_cards = document.getElementsByClassName ('shoe')
let watch_cards = document.getElementsByClassName ('watch')

all_btn.onclick = function () {
    for (let cloth_card of cloth_cards) {
        cloth_card.style.display ='block'
    } 
    
    for (let shoe_card of shoe_cards) {
        shoe_card.style.display ='block'
    } 

    for (let watch_card of watch_cards) {
        watch_card.style.display ='block'
    } 

    all_btn.classList.add ('active')
    cloth_btn.classList.remove ('active')
    shoe_btn.classList.remove ('active')
    watch_btn.classList.remove ('active')
}

cloth_btn.onclick = function () {
    for (let cloth_card of cloth_cards) {
        cloth_card.style.display ='block'
    } 
    
    for (let shoe_card of shoe_cards) {
        shoe_card.style.display ='none'
    } 

    for (let watch_card of watch_cards) {
        watch_card.style.display ='none'
    } 

    all_btn.classList.remove ('active')
    cloth_btn.classList.add ('active')
    shoe_btn.classList.remove ('active')
    watch_btn.classList.remove ('active')
}

shoe_btn.onclick = function () {
    for (let shoe_card of shoe_cards) {
        shoe_card.style.display ='block'
    } 
    
    for (let cloth_card of cloth_cards) {
        cloth_card.style.display ='none'
    } 
    
    for (let watch_card of watch_cards) {
        watch_card.style.display ='none'
    } 

    all_btn.classList.remove ('active')
    cloth_btn.classList.remove ('active')
    shoe_btn.classList.add ('active')
    watch_btn.classList.remove ('active')
}


watch_btn.onclick = function () {
    for (let watch_card of watch_cards) {
        watch_card.style.display ='block'
    } 
    
    for (let cloth_card of cloth_cards) {
        cloth_card.style.display ='none'
    }  

    for (let shoe_card of shoe_cards) {
        shoe_card.style.display ='none'
    } 

    all_btn.classList.remove ('active')
    cloth_btn.classList.remove ('active')
    shoe_btn.classList.remove ('active')
    watch_btn.classList.add ('active')
}


