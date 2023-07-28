//nest fetch in eventListener. To appear when user clicks initial button on homepg: quote, glowing div. + main page elements disappear
const Options = {
    headers: {
        'X-Api-Key': 'aq9Bxqfvr3ma/FMBl57I5A==3ve8JZi2OuDc2A4o'
    }
}
//created header for API key authorization

let inspireButton = document.getElementById("getInspiredBtn")

let fetchFunc = () => {

    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', Options).
        then((data) => {
            return data.json()
        }, (err) => {
            console.log(err, "ERROR")
        }).then((json) => { //input from first data return
            console.log(json)
            document.querySelector('#quoteOfDay').innerHTML = json[0].quote
            //retrieving data in an array, first object w key "quote"
        })




}



inspireButton.addEventListener('click', fetchFunc)

//circular shape continues to grow => keyframes
//2 colours. One inner and outer glow.
//change from quote to breathing countdown
//event listener type=animation for all text disappear 
//2 buttons appear => back home or breathing loop with colour
//option for colour to be randomly assigned (make object?)

