
//Asal sayı kontrolü:

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let flag=0;
        for (let j = 2; j <numbers[i] ; j++) {
            if (numbers[i]%j===0) {
                flag=1 ;
                break;
            }
            
        }
        if (flag===0) {
            console.log(numbers[i]+" is Prime.\n")
        }
        else
        {
            console.log(numbers[i]+" isnt Prime .\n")
        }
    }
}
findPrime(2,4,37,39,52);

//Arkadaş Sayılar
function friendsNumber(number1,number2) {
    let total1=0,total2=0;
    for (let i = 1; i < number1; i++) {
        if (number1%i==0) {
         total1+=i;
        } 
            
    }
    for (let i = 1; i < number2; i++) {
        if (number2%i==0) {
         total2+=i;
        } 
             
    }
    if (total1==number2 && total2==number1) {
        console.log(number1+" and "+number2+" are friend numbers")
    }
    else{
        console.log(number1+" and "+number2+" are not friend numbers")
    }

}

friendsNumber(220,284)


//1000 e kadar olan mükemmel sayılar:
function perfectNumberList() {
    let list=[];   
    for (let number = 1; number < 1000; number++) {
        let total=0;
        for (let divisor = 1; divisor <=number; divisor++) {
            if (number%divisor==0) {
                total+=divisor;
            }          
        }
        if (total==number*2) {
            list.push(number)
        }
    }
    console.log(list)
    
}
perfectNumberList()

//1000 e kadar olan tüm asal sayılar:
function primeNumberList() {
    let list=[];
    for (let number = 2; number < 1000; number++) {
        let isNotPrime=false;
        for (let divisor = 2; divisor < number; divisor++) {                                  
            if (number%divisor==0) {               
                isNotPrime=true;
            }                     
        }
         if (!isNotPrime) {
             list.push(number)
         }
    }
    console.log(list)
}
primeNumberList()
