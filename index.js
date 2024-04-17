const tattoodesignEl = document.getElementById('tattoodesign')
const aboutMeEl = document.getElementById('aboutMe')
const servicesEl = document.getElementById('services')
const locationEl = document.getElementById('location')
const contactEl = document.getElementById('contact')
const myLinksEl = document.getElementById('myLinks')

let images = ['./asset/work1.jpeg','./asset/work2.jpeg','./asset/work3.jpeg','./asset/work4.jpeg']
let counter = 0
let cook = 1



document.addEventListener('click', (e) => {
    
    if(e.target.id == 'btn-right'){
        if(counter < 3){
            counter ++
            tattoodesignEl.style.background = `url(${images[counter]})`
            tattoodesignEl.style.backgroundSize = 'cover'
            tattoodesignEl.style.objectFit = 'cover'
            rotate()
            console.log(counter)
        }
        else if(counter == 3){
            rotate()
        }
        
    }

    else if(e.target.id == 'btn-left'){
        if(counter > 0){
            counter = counter - 1
            tattoodesignEl.style.background = `url(${images[counter]})`
            tattoodesignEl.style.backgroundSize = 'cover'
            tattoodesignEl.style.objectFit = 'cover'
            console.log(counter)
            rotate()
        }
        else if(counter == 0){
            rotate()
        }
        
    }

    else if(e.target.id == 'hamburger'){
        cook = cook + 1
        if(cook % 2 == 0){
            myLinksEl.style.display = 'flex'
        }else{
            myLinksEl.style.display = 'none'
        }
    }

    else if(e.target.id == 'anchor'){
        myLinksEl.style.display = 'none'
    }
})


function rotate(){
    tattoodesignEl.style.transition = 'width 2s, height 2s transform 4s'
    tattoodesignEl.style.transform = 'rotate(360deg)'
}



function scrollFunctionOne(){
    aboutMeEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionTwo(){
    servicesEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionThree(){
    locationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionFour(){
    contactEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

