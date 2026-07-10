const contentDiv = document.querySelector("#content")
const homeDiv = document.createElement("div")
let toggled = true
homeDiv.setAttribute("id", "home")
contentDiv.appendChild(homeDiv)


const initHome = () => {
    const bannerDiv = document.createElement("div")
    const idkDiv = document.createElement("div")
    bannerDiv.setAttribute("class", "banner")
    idkDiv.setAttribute("class", "idk")


    const bannerText = document.createElement("div")
    const bannerImg = document.createElement("img")
    const bannerHeader = document.createElement("h1")
    const headerSub = document.createElement("h3")
    bannerImg.setAttribute("src","")
    bannerHeader.textContent = "YOUR TASTE OF A RATS PALETTE"
    headerSub.textContent = "Its not bad trust us."
    bannerText.appendChild(bannerHeader)
    bannerText.appendChild(headerSub)

    bannerDiv.appendChild(bannerImg)
    bannerDiv.appendChild(bannerText)

    const idkHeader = document.createElement("h2")
    const idkPara = document.createElement("p")

    idkHeader.textContent = "Dine in, Take out, Delivery"
    idkPara.textContent = "We're always happy to see you in person, but no matter where you wanna eat the quality of our food will remain the same."
                          

    idkDiv.appendChild(idkHeader)
    idkDiv.appendChild(idkPara)


    homeDiv.appendChild(bannerDiv)
    homeDiv.appendChild(idkDiv)
}

const toggle = () => {
    homeDiv.classList.toggle("disabled")
    toggled = !toggled
}

const getToggle = () => toggled

const getDiv = () => {
    return homeDiv
}


export {initHome, toggle, getToggle, getDiv}