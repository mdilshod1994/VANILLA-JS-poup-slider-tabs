// Tabs

const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsContent = document.getElementById('tabs-contents');


tabsBtn.forEach((item, indexBtn) => {
    item.addEventListener('click', e => {
        activeBtn(e.target)
        let currentInd = indexBtn + 1;
        for(let i = 0; i < tabsContent.children.length; i++) {
            tabsContent.children[i].classList.remove('active')
            if(tabsContent.children[i].dataset.content == currentInd) {
                tabsContent.children[i].classList.add('active')
             
            }
        }
    })
    
})

const activeBtn = n => {
    for(let i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].classList.remove('active')
    }
    n.classList.add('active')
}


// Modal Window

const btnOpen = document.getElementById('order-btn')
const modal = document.getElementById('modal')
const btnClose = document.getElementById('modal-content__btn')
const modalContent = document.getElementById('modal-content')


btnOpen.addEventListener('click', () => {
    modal.classList.add('active')
})

const closeModal = () => {
    modal.classList.remove('active')
}

modal.addEventListener('click', closeModal)
for(let modalContent of modal.children) {
    modalContent.addEventListener('click', evnt => {
        evnt.stopPropagation();
    }) 
}
btnClose.addEventListener('click', closeModal)


// Sliders

const next = document.getElementById('slide-btn-next'),
      prev = document.getElementById('slide-btn-prev'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot')


let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index)
        activeDot(index)
    }else {
        index++;
        activeSlide(index)
        activeDot(index)
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index)
        activeDot(index)
    }else {
        index--;
        activeSlide(index)
        activeDot(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeDot(index)
        activeSlide(index)
    })
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

const interval = setInterval(nextSlide, 2500)