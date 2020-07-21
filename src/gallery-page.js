const Gallery= () =>{
    const divGallery = document.createElement("div")
    divGallery.setAttribute("id","gallery-div")
    const column1 = document.createElement('div')
    column1.setAttribute("id", "column1")
    const plate1 = document.createElement('img')
    plate1.setAttribute("src", "../dist/media/plate1.jpg")
    const plate2 = document.createElement('img')
    plate2.setAttribute("src", "../dist/media/plate2.jpg")
    column1.appendChild(plate1)
    column1.appendChild(plate2)
    divGallery.appendChild(column1)
    const column2 = document.createElement('div')
    column2.setAttribute("id", "column2")
    const plate3 = document.createElement('img')
    plate3.setAttribute("src", "../dist/media/plate3.jpg")
    const plate4 = document.createElement('img')
    plate4.setAttribute("src", "../dist/media/plate4.jpg")
    column2.appendChild(plate3)
    column2.appendChild(plate4)
    divGallery.appendChild(column2)
    const column3 = document.createElement('div')
    column3.setAttribute("id", "column3")
    const plate5 = document.createElement('img')
    plate5.setAttribute("src", "../dist/media/plate5.jpg")
    const plate6 = document.createElement('img')
    plate6.setAttribute("src", "../dist/media/plate6.jpg")
    column3.appendChild(plate5)
    column3.appendChild(plate6)
    divGallery.appendChild(column3)

    return{
        divGallery
    }
}

export default Gallery;