const Options = {
    headers: {
        'X-Api-Key': 'aq9Bxqfvr3ma/FMBl57I5A==3ve8JZi2OuDc2A4o'
    }
}

fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', Options).
then(res => {
    return res.json()
}).then(json => console.log(json),
    err => console.log(err))

//need eventListener when user clicks initial button on homepg
//need to return quote from API
//have circular shape on background 
//circular shape continues to grow => keyframes
//change from quote to breathing countdown
//all text disappear 
//2 buttons appear => back home or breathing loop with colour
//option for colour to be randomly assigned (make object?)