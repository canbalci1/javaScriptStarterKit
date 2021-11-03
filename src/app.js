// console.log("Merhaba Kodlama.io")


let dolarBugun=9.30  
let dolarDun=9.20
{
    let dolarDun=9.10

}
// console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
// console.log(euroDun)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
// console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    // console.log("<li>"+konutKredileri[i]+"</li>")
}
// console.log("</ul>")
// console.log(konutKredileri)

//rest
let showProducts = function (id,...products){
    console.log(id)
    console.log(products)
}
// console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")


//spread
let points =[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))

//Descructuring
let populations =[10000,20000,30000]
let [small,medium,high]=populations
console.log(small)
console.log(medium)
console.log(high)

