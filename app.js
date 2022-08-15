console.log("Hi")
const firstName = "Andrii"
console.log(firstName)
let name = firstName + " Voronchuk"
console.log(name)
console.log(`${firstName} Voronchuk
age 41`)

const car = {
    model: "VW", maxSpeed: 250, color:"blue",
    passengers:[
        {name:"Vasy",age:25,driver:true},
        {name:"Pety",age:27,driver:true},
        {name:"Katy",age:26,driver:false},
        {name:"Sveta",age:28,driver:true},
    ]
}
/*console.log(car)
 console.log(car.passengers[2].driver)
 car.passengers[2].driver=true
*/
const isDriver = !car.passengers[0].driver
console.log(isDriver)
/*if (car.passengers[0].name) {
    console.log(25)
}                 else {
    console.log("Small")
}    */
     if (isDriver){
         console.log("Yes")
     }      else {
         console.log("No")
     }
/*let driver
if (isDriver){
    driver="Yes"
}      else {
    driver="No"
}*/

const driver=isDriver ? "Yes" : "No"

console.log(driver)

const color = car.color??"black"
console.log(color)
//car.color="red"
console.log(car.color??"black")
console.log(car.color)
console.log(car)

console.log(car.color??isDriver?"Yes" : "No")