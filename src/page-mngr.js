import * as aboutTab from "./about.js"
import * as homeTab from "./home.js"
import * as menuTab from "./menu.js"


const initPage = () => {
    const homeButton = document.querySelector(".home-button")
    const aboutButton = document.querySelector(".about-button")
    const menuButton = document.querySelector(".menu-button")

    menuButton.addEventListener("click",e=>{
        if (!menuTab.getToggle()){
            menuTab.toggle()
            menuButton.classList.toggle("selected")

            if(homeTab.getToggle()){
                homeTab.toggle()
                homeButton.classList.toggle("selected")
            }
            if (aboutTab.getToggle()){
                aboutTab.toggle()
                aboutButton.classList.toggle("selected")
            }

        }
    })

    
    aboutButton.addEventListener("click",e=>{
        if (!aboutTab.getToggle()){
            aboutTab.toggle()
            aboutButton.classList.toggle("selected")

            if(homeTab.getToggle()){
                homeTab.toggle()
                homeButton.classList.toggle("selected")
            }
            if(menuTab.getToggle()){
                menuTab.toggle()
                menuButton.classList.toggle("selected")
            }

        }
    })
    
    homeButton.addEventListener("click",e=>{
        if (!homeTab.getToggle()){
            homeTab.toggle()
            homeButton.classList.toggle("selected")

            if(menuTab.getToggle()){
                menuTab.toggle()
                menuButton.classList.toggle("selected")
            }
            if (aboutTab.getToggle()){
                aboutTab.toggle()
                aboutButton.classList.toggle("selected")
            }
        }
    })


    aboutTab.initAbout()
    homeTab.initHome()
    menuTab.initMenu()

    aboutTab.toggle()
    menuTab.toggle()


}

export default initPage