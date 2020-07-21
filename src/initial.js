const initials = ()=>{
    const resTitle = document.createElement('H1');
    resTitle.textContent = "LUIGY'S PIZZERIA"
    resTitle.setAttribute("id", "page-title")
    const navBar = document.createElement('ul')
    navBar.classList.add("tabs","primary-nav")
    let homeItem = document.createElement('LI')
    homeItem.setAttribute("id", "item-home")
    homeItem.classList.add("tabs__item")
    let homeBtn = document.createElement('a')
    homeBtn.classList.add("tabs__link")
    homeBtn.setAttribute("href", "#")
    homeBtn.setAttribute("id", "home") 
    homeBtn.textContent = "HOME"
    homeItem.appendChild(homeBtn)
    let galleryItem = document.createElement('LI')
    galleryItem.setAttribute("id","item-gallery")
    galleryItem.classList.add("tabs__item")
    let galleryBtn = document.createElement('a')
    galleryBtn.classList.add("tabs__link")
    galleryBtn.setAttribute("id","gallery")
    galleryBtn.setAttribute("href", "#")
    galleryBtn.textContent = "GALLERY"
    galleryItem.appendChild(galleryBtn)
    let menuItem = document.createElement('LI')
    menuItem.classList.add("tabs__item")
    let menuBtn = document.createElement('a')
    menuBtn.classList.add("tabs__link")
    menuBtn.setAttribute("href", "#")
    menuBtn.textContent = "MENU"
    menuItem.appendChild(menuBtn)
    let contactItem = document.createElement('LI')
    contactItem.classList.add("tabs__item")
    let contactBtn = document.createElement('a')
    contactBtn.classList.add("tabs__link")
    contactBtn.setAttribute("href", "#")
    contactBtn.textContent = "CONTACT"
    contactItem.appendChild(contactBtn)
    navBar.appendChild(homeItem)
    navBar.appendChild(galleryItem)
    navBar.appendChild(menuItem)
    navBar.appendChild(contactItem)

    return{
        resTitle,
        navBar
    }
};

export default initials;