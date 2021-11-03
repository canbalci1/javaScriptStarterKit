function addToCard(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : "+productName + " adet : "+quantity)
}
// addToCard()
addToCard(10)
// addToCard("Karpuz")

let sayHello = ()=>{
    console.log("Hello World")
}
sayHello()

let sayHello2 = function() {
    console.log("Hello World 2")
}
sayHello2()

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function addToCard2(product) {
console.log("Ürün:"+product.productName)
console.log("Adet:"+product.unitPrice)
console.log("Fiyat:"+product.quantity)
}
addToCard2(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName="KARPUZ"
console.log(product3.productName)

function addToCard4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCard4(products)

function add (...numbers){
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total = total+numbers[i]        
    }
    console.log(total)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers =[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,ege,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"10M"},
    {name:"Ege",population:"40M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["İzmir","Aydın"],
        
    ]
]
// console.log(marmara)
// console.log(icAnadolu)
// console.log(ege)
console.log(icAnadoluSehirleri)

let productName,unitPrice,quantity
let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
