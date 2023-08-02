//nest fetch in eventListener
const Options = {
    headers: {
        'X-Api-Key': 'aq9Bxqfvr3ma/FMBl57I5A==3ve8JZi2OuDc2A4o'
    }
}
//created header for API key authorization

//Main button to get quote
let inspireButton = document.getElementById("getInspiredBtn")
//Main homepage div 
let homePage = document.getElementById("mainHomeDiv")
//For back to home button
let backButton = document.getElementById("backHome") 
let subPage = document.getElementById("secondPage")


let fetchFunc = () => {
//code for main page items to disappear
    homePage.style.display = "none"
    subPage.style.display="block"
//code for retrieval and display of quote
    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', Options).
        then((data) => {
            return data.json()
        }, (err) => {
            console.log(err, "ERROR")
        }).then((json) => { //input from first data return
            console.log(json)
            //retrieving data in an array, first object w key "quote" + "author"
            let mainQuote = `${json[0].quote} <br> -${json[0].author}`
            document.querySelector('#quoteOfDay').innerHTML = mainQuote
            //code for background shape to appear + become larger
            eliassonTurrellGlow.style.display = "block"
            backHome.style.display = "block"
        })

}
inspireButton.addEventListener("click", fetchFunc)

let goHome = () => {
    if(subPage.style.display="block"){
        subPage.style.display = "none"
        homePage.style.display = "block"
    }
}
backButton.addEventListener("click", goHome) 
