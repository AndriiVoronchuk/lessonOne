
const car = {
    model: "VW", maxSpeed: 250, color:"blue",
    passengers:[
        {name:"Vasy",age:25,driver:true},
        {name:"Pety",age:27,driver:true},
        {name:"Katy",age:26,driver:false},
        {name:"Sveta",age:28,driver:true},
    ]
}
const {model,passengers}=car
console.log(passengers)
console.table(passengers)
console.log(passengers.length)

const count=passengers.length
for(let i=0;i<count;i++){
    console.log(passengers[i].name)
}
let totalAge=0
passengers.forEach(item=>{
    totalAge+=item.age
    console.log(item)
})
console.log(totalAge)

// const fn=function (item,index) {
//     console.log(`index of current item is ${index}`)
//     item.yearOfBirth=2022-item.age
//     return item
// }

const newPassengers=passengers.map((item)=>new Date().getFullYear()-item.age)
console.log(newPassengers)
//console.log(passengers[0])
// const itemIndex=0
// const newPass = fn(passengers[itemIndex],itemIndex)
// console.log(newPass)

console.table(newPassengers)

const resultFilter=passengers.filter(item=>item.driver&&item.age>25)
console.log(resultFilter)

const resultFind=passengers.find(item=>item.name==='Katy').age
console.log(resultFind)

const resultIndex=passengers.findIndex(item=>item.driver)
console.log(resultIndex)

const resultReduce=passengers.reduce((total,item)=>total+item.age,0)
console.log(resultReduce)