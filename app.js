let prise = 500

let show = document.querySelector(".result");

function prisecalculater() {
    let weight = prompt("how much chicken do you need?");
    let weigthinkg = weight /1000 ;
    let priseinkg = weigthinkg *prise ;
    show.innerHTML=`You will have to pay ${priseinkg} Rs for ${weight}grams of chicken `;
    // document.getElementsByClass("result") .inn (`You will have to pay ${priseinkg} Rs for ${weight}grams of chicken `)
    
}
console.log (typeof show)