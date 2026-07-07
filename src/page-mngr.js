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

            if(homeTab.getToggle()){
                homeTab.toggle()
            }
            if (aboutTab.getToggle()){
                aboutTab.toggle()
            }

        }
    })

    
    aboutButton.addEventListener("click",e=>{
        if (!aboutTab.getToggle()){
            aboutTab.toggle()

            if(homeTab.getToggle()){
                homeTab.toggle()
            }
            if(menuTab.getToggle()){
                menuTab.toggle()
            }

        }
    })
    
    homeButton.addEventListener("click",e=>{
        if (!homeTab.getToggle()){
            homeTab.toggle()

            if(menuTab.getToggle()){
                menuTab.toggle()
            }
            if (aboutTab.getToggle()){
                aboutTab.toggle()
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