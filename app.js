let prise = 500
function prisecalculater() {
    let weight = prompt(("how much chicken do you need?"));
    let weigthinkg = weight /1000 ;
    let priseinkg = weigthinkg *prise ;
alert(`You will have to pay ${priseinkg} Rs for ${weight}grams of chicken `)
}


