import initials from './initial'
import Home from './home-page'
import Gallery from './gallery-page'



const display = (() => {
    const content = document.querySelector("#content")
    

    const initialMenu = () => {
        content.appendChild(initials().resTitle)
        content.appendChild(initials().navBar)
    }

    const homePage = () => {
        //content.appendChild(Home().divHome)
        
        const homeBtn = document.querySelector("#home")
        homeBtn.addEventListener("click", () => {
            const homeDiv = document.querySelector("#home-div")
            const divs = document.querySelectorAll("#content div")
            divs.forEach(div => div.remove())
            if(content.contains(homeDiv)){
                homeDiv.remove()
            }
            content.appendChild(Home().divHome)
            let homeItem = document.querySelector("#item-home")
            const items = document.querySelectorAll("ul li")
            items.forEach(item => {
                item.classList.remove("active")
            })
            homeItem.classList.add("active")
        })
        const homeItem = document.querySelector("#item-home")
        homeItem.classList.add("active")

    }

    const galleryPage = () =>{
        const galleryBtn = document.querySelector("#gallery")
        galleryBtn.addEventListener("click", ()=>{
            let GalleryDiv = document.querySelector("#gallery-div")
            const divs = document.querySelectorAll("#content div")
            divs.forEach(div => div.remove())
            if(content.contains(GalleryDiv)){
                GalleryDiv.remove()
            }

            content.appendChild(Gallery().divGallery)
            const galleryItem = document.querySelector("#item-gallery")
            const items = document.querySelectorAll("ul li")
            items.forEach(item => {
                item.classList.remove("active")
            })
            galleryItem.classList.add("active")

        })
    }
    /*const galleryPage = () => {
        const galleryBtn = document.querySelector("#gallery")
        galleryBtn.addEventListener("click", () => Gallery().divGallery)
    }*/

    return {
        Output: ()=> {
            initialMenu(),
            homePage(),
            galleryPage()
        }
    }
    
})();

display.Output();

/*const menus= (()=>{

    const showHome= () => {
        const homeBtn = document.querySelector("#home")
        homeBtn.addEventListener("click",display.homePage()) 
    }

    const showGallery = () => {
        const galleryBtn = document.querySelector("#gallery")
        galleryBtn.addEventListener("click", display.galleryPage())
    }
    return {
        Output: () =>{
            showHome,
            showGallery
        }
    }

})();
menus.showHome()*/







