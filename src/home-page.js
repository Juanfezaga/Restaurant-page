const Home = () =>{
    const divHome = document.createElement('div')
    divHome.setAttribute("id", "home-div")
    const divInner = document.createElement('div')
    const blockHeadline = document.createElement('blockquote')
    const textHeadline = document.createElement('p')
    const headlineQuote = document.createElement('i')
    headlineQuote.textContent = "¡Pizza and divine taste!"
    textHeadline.appendChild(headlineQuote)
    blockHeadline.appendChild(textHeadline)
    divInner.appendChild(blockHeadline)
    const imgHome = document.createElement('img')
    imgHome.setAttribute("id", "home-img")
    imgHome.setAttribute("src", "./media/pizzaHome.png")
    divInner.appendChild(imgHome)
    const textRes = document.createElement('H4')
    textRes.textContent = `Luigy's Pizzeria is one of the most 
    sucessful bussiness in the industry with his delicious pizzas it has become
    one of the most loved restaurants, with his fresh home-made pizza and high
    quality ingredients`;
    divInner.appendChild(textRes)
    divHome.appendChild(divInner)
    return {
        divHome
    }
}

export default Home;