import reuben from "./imgs/reuben.jpg"
import cold from "./imgs/cold.jpg"
import cuban from "./imgs/cubano.jpg"
import pan from "./imgs/panini.jpg"
import po from "./imgs/po.jpg"
import melt from "./imgs/melt.jpg"


const contentDiv = document.querySelector("#content")
const menuDiv = document.createElement("div")
let toggled = true
menuDiv.setAttribute("id", "menu")
contentDiv.appendChild(menuDiv)

let menuItems = [
    {
        name:"Reuben",
        description:"This classic hot sandwhich features sliced corned beef, sauerkraut, your choice of melted cheese,"+ 
                    "topped with Russian or Thousand island dressing served on swirl rye bread grill-toasted golden brown. Your choice of side included.",
        img: reuben,
        price:"$10.00"
    },
    {
        name:"Cold Cut",
        description:"Your choice of ham/protien, cheese, veggies, and extras served on sub or slices. Your choice of side included.",
        img: cold,
        price:"$10.00"
    },
    {
        name:"Melt",
        description:"Your choice of ham/protein with perfectly melted cheese in between two cripsy grill-toasted slices of toast. Your choice of slide included.",
        img: melt,
        price:"$10.00"
    },
    {
        name:"Cubano",
        description:"This miami staple is prepared with roasted pork, glazed ham, your choice of cheese, pickles and mustard, pressed within cuban bread until a crispy exterior and melted interior."+
                    "Served with your choice of side",
        img: cuban,
        price:"$10.00"
    },
    {
        name:"Po' Boy",
        description:"Traditional Louisiana sandwich made with your choice of protien dressed with lettuce, tomato, mayonnaise, pickles and house sauce wrapped in"+
                    "a perfectly fluffy french roll. Served with your choice of side.",
        img: po,
        price:"$10.00"
    },
    {
        name:"Panini",
        description:"Your choice of ham, cheese, toppings, and bread pressed until golden brown and melted. Served with your choice of side.",
        img: pan,
        price:"$10.00"
    }
]


const initMenu = () => {
    const items =  document.createElement("div")
    const sides = document.createElement("div")
    items.setAttribute("class", "menu-items")
    sides.setAttribute("class", "menu-sides")


    menuItems.forEach(item => {
        let entry = document.createElement("div")
        let nameHeader = document.createElement("h1")
        let img = document.createElement("img")
        let descPara = document.createElement("p")
        let priceHeader = document.createElement("h3")

        entry.setAttribute("class", "entry")
        nameHeader.textContent = item.name
        img.setAttribute("src", item.img)
        descPara.textContent = item.description
        priceHeader.textContent = item.price


        entry.appendChild(nameHeader)
        entry.appendChild(img)
        entry.appendChild(descPara)
        entry.appendChild(priceHeader)

        items.appendChild(entry)
    })


    menuDiv.appendChild(items)
}

const toggle = () => {
    menuDiv.classList.toggle("disabled")
    toggled = !toggled
}

const getToggle = () => toggled

export {initMenu, toggle, getToggle}