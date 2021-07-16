

let testimonials=[
    {
        image:"images/img1.jpg",
        name:"Li Yeun",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam nobis sapiente, vel consectetur numquam perspiciatis impedit, ipsa, quidem voluptatibus minus a officia repellat iure natus? Tempora hic consequatur, quidem officia vitae corporis sapiente dolore commodi!!"
    },
    {
        image:"images/img2.jpg",
        name:"Jackie Chan",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis mollitia doloribus, ipsum distinctio debitis molestias voluptatum quos possimus sit consequatur ex dolorem ullam illo suscipit quisquam eligendi, maxime omnis accusantium?"
    },
    {
        image:"images/img3.jpg",
        name:"Nadia Foo",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam nobis sapiente, vel consectetur numquam perspiciatis impedit, ipsa, quidem voluptatibus minus a officia repellat iure natus? Tempora hic consequatur, quidem officia vitae corporis sapiente."
    },
    {
        image:"images/img4.jpg",
        name:"Ye Leo ",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam nobis sapiente, vel consectetur numquam perspiciatis impedit, ipsa, quidem voluptatibus minus a officia repellat iure natus? Tempora hic consequatur, quidem officia vitae corporis sapiente dolore commodi, asperiores temporibus iure earum!"
    }
]

const leftButton = document.getElementById("leftBtn")
const rightButton = document.getElementById("rightBtn")

currentItem = 0

let image =  document.getElementById("image") 
let name =  document.getElementById("name") 
let desc =  document.getElementById("desc") 

image.src = testimonials[currentItem].image
name.innerText = testimonials[currentItem].name
desc.innerText = testimonials[currentItem].desc

leftButton.addEventListener('click', ()=> {
    if (currentItem == 0) {
        currentItem = testimonials.length-1
    }
    else{
        currentItem-=1
    }
    updateTestimonials()
})

rightButton.addEventListener('click', ()=> {
    if (currentItem == (testimonials.length-1)) {
        currentItem = 0
        
    }
    else{
        currentItem+=1
    }
    updateTestimonials()
})

function updateTestimonials(){
    image.src = testimonials[currentItem].image
    name.innerText = testimonials[currentItem].name
    desc.innerText = testimonials[currentItem].desc
}